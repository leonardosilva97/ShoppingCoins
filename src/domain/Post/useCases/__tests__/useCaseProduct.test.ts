import {renderHook, act} from '@testing-library/react-hooks';
import {productService} from '../../productService';
import {useProductList} from '../useCaseProductList';
import {Product, ProductAPI, toProduct} from '../../productType';

// Mock do service
jest.mock('../../productService');
const mockedProductService = productService as jest.Mocked<
  typeof productService
>;

interface MetaDataPage {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  firstPage: number;
  firstPageUrl: string;
  lastPageUrl: string;
  nextPageUrl: string | null;
  previousPageUrl: string | null;
}

interface Page<T> {
  data: T[];
  meta: MetaDataPage;
}

const mockProduct1: ProductAPI = {
  id: 1,
  nome: 'Notebook L24',
  descricao: 'Descrição do Notebook L24',
  preco: 4000,
  quantidade: 10,
  imagem_url: 'https://example.com/image.jpg',
  categoria: 'Eletrônicos',
  data_cadastro: '2024-01-01',
};

const mockProduct2: ProductAPI = {
  id: 2,
  nome: 'Óculos VR',
  descricao: 'Descrição do Óculos VR',
  preco: 2000,
  quantidade: 5,
  imagem_url: 'https://example.com/image2.jpg',
  categoria: 'Eletrônicos',
  data_cadastro: '2024-01-01',
};

const createMockResponse = (
  products: ProductAPI[],
  currentPage: number,
  hasNext: boolean,
): Page<Product> => ({
  data: products.map(toProduct),
  meta: {
    total: 20,
    perPage: 10,
    currentPage,
    lastPage: 2,
    firstPage: 1,
    firstPageUrl: '/?page=1',
    lastPageUrl: '/?page=2',
    nextPageUrl: hasNext ? `/?page=${currentPage + 1}` : null,
    previousPageUrl: currentPage > 1 ? `/?page=${currentPage - 1}` : null,
    hasNextPage: hasNext,
    hasPreviousPage: currentPage > 1,
  },
});

describe('useProductList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Estado inicial e carregamento', () => {
    it('deve mostrar loading durante a requisição inicial', async () => {
      mockedProductService.getList.mockImplementation(
        () =>
          new Promise(resolve =>
            setTimeout(() => resolve(createMockResponse([], 1, false)), 100),
          ),
      );

      const {result} = renderHook(() => useProductList());

      expect(result.current.loading).toBe(true);
    });
  });

  describe('Carregamento de dados', () => {
    it('deve carregar produtos com sucesso na primeira página', async () => {
      mockedProductService.getList.mockResolvedValueOnce(
        createMockResponse([mockProduct1, mockProduct2], 1, true),
      );

      const {result, waitForNextUpdate} = renderHook(() => useProductList());
      await waitForNextUpdate();

      expect(result.current.productList).toHaveLength(2);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBeNull();
      expect(mockedProductService.getList).toHaveBeenCalledWith(1);
    });

    it('deve atualizar corretamente ao chamar refresh', async () => {
      mockedProductService.getList.mockResolvedValueOnce(
        createMockResponse([mockProduct1], 1, true),
      );

      const {result, waitForNextUpdate} = renderHook(() => useProductList());
      await waitForNextUpdate();

      mockedProductService.getList.mockResolvedValueOnce(
        createMockResponse([mockProduct2], 1, true),
      );

      await act(async () => {
        await result.current.refresh();
      });

      expect(result.current.productList).toHaveLength(1);
      expect(result.current.productList[0].id).toBe(mockProduct2.id);
      expect(mockedProductService.getList).toHaveBeenCalledTimes(2);
    });
  });

  describe('Paginação', () => {
    it('não deve chamar fetchNextPage se já estiver carregando', async () => {
      mockedProductService.getList.mockResolvedValueOnce(
        createMockResponse([mockProduct1], 1, true),
      );

      const {result, waitForNextUpdate} = renderHook(() => useProductList());
      await waitForNextUpdate();

      // Simula múltiplas chamadas rápidas do fetchNextPage
      await act(async () => {
        result.current.fetchNextPage();
        result.current.fetchNextPage();
        result.current.fetchNextPage();
      });

      expect(mockedProductService.getList).toHaveBeenCalledTimes(2);
    });

    it('não deve chamar fetchNextPage se não houver próxima página', async () => {
      mockedProductService.getList.mockResolvedValueOnce(
        createMockResponse([mockProduct1], 1, false),
      );

      const {result, waitForNextUpdate} = renderHook(() => useProductList());
      await waitForNextUpdate();

      await act(async () => {
        await result.current.fetchNextPage();
      });

      expect(mockedProductService.getList).toHaveBeenCalledTimes(1);
    });

    it('deve concatenar corretamente os produtos ao carregar mais páginas', async () => {
      mockedProductService.getList
        .mockResolvedValueOnce(createMockResponse([mockProduct1], 1, true))
        .mockResolvedValueOnce(createMockResponse([mockProduct2], 2, false));

      const {result, waitForNextUpdate} = renderHook(() => useProductList());
      await waitForNextUpdate();

      expect(result.current.productList).toHaveLength(1);

      await act(async () => {
        await result.current.fetchNextPage();
      });

      expect(result.current.productList).toHaveLength(2);
      expect(result.current.productList[0].id).toBe(mockProduct1.id);
      expect(result.current.productList[1].id).toBe(mockProduct2.id);
    });
  });

  describe('Tratamento de erros', () => {
    it('deve lidar com erro na requisição inicial', async () => {
      const error = new Error('Erro na API');
      mockedProductService.getList.mockRejectedValueOnce(error);

      const {result, waitForNextUpdate} = renderHook(() => useProductList());
      await waitForNextUpdate();

      expect(result.current.error).toBe(true);
      expect(result.current.loading).toBe(false);
      expect(result.current.productList).toHaveLength(0);
    });

    it('deve lidar com erro ao carregar próxima página', async () => {
      mockedProductService.getList
        .mockResolvedValueOnce(createMockResponse([mockProduct1], 1, true))
        .mockRejectedValueOnce(new Error('Erro ao carregar mais'));

      const {result, waitForNextUpdate} = renderHook(() => useProductList());
      await waitForNextUpdate();

      await act(async () => {
        await result.current.fetchNextPage();
      });

      expect(result.current.error).toBe(true);
      expect(result.current.loading).toBe(false);
      expect(result.current.productList).toHaveLength(1);
    });
  });
});
