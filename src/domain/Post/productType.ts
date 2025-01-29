import {MetaDataPageAPI} from '@api';

export interface ProductAPI {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  quantidade: number;
  imagem_url: string;
  categoria: string;
  data_cadastro: string;
}

/**
 * @description Resposta que vem da rota de produtos, contendo `meta` e `produtos`.
 */
export interface ProductsResponse {
  meta: MetaDataPageAPI;
  produtos: ProductAPI[];
}

/**
 * @description Interface interna (caso queira renomear campos)
 */
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
  category: string;
  registrationDate: string;
}

/**
 * Converte ProductAPI (como vem do backend) para o modelo interno Product.
 */
export function toProduct(apiData: ProductAPI): Product {
  return {
    id: apiData.id,
    name: apiData.nome,
    description: apiData.descricao,
    price: apiData.preco,
    quantity: apiData.quantidade,
    imageUrl: apiData.imagem_url,
    category: apiData.categoria,
    registrationDate: apiData.data_cadastro,
  };
}
