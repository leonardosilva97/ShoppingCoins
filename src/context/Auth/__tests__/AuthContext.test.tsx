import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import {AuthContext, AuthContextProvider} from '../../AuthContext';
import {api} from '@api';
import {UserInterface} from '@domain';

// Mock da API
jest.mock('@api', () => ({
  api: {
    post: jest.fn(),
    defaults: {
      headers: {
        common: {},
      },
    },
  },
}));

// Mock do MMKV
jest.mock('react-native-mmkv', () => ({
  MMKV: jest.fn().mockImplementation(() => ({
    set: jest.fn(),
    getString: jest.fn(),
    delete: jest.fn(),
  })),
}));

// Mock do Toast
jest.mock('@service', () => ({
  useToast: () => ({
    showToast: jest.fn(),
  }),
}));

const wrapper = ({children}: {children: React.ReactNode}) => (
  <AuthContextProvider>{children}</AuthContextProvider>
);

const mockUser: UserInterface = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  password: '123456',
  profilePicture: 'https://example.com/profile.jpg',
  saldo: 0,
  dataDeCadastro: '2024-01-01',
};

const mockNewUser = {
  name: 'John Doe',
  email: 'john@example.com',
  password: '123456',
  profilePicture: 'https://example.com/profile.jpg',
  saldo: 0,
  dataDeCadastro: '2024-01-01',
};

describe('AuthContext', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Inicialização', () => {
    it('deve começar com estado inicial correto', () => {
      const {result} = renderHook(() => React.useContext(AuthContext), {
        wrapper,
      });

      expect(result.current.user).toEqual({});
      expect(result.current.isLoading).toBe(false);
      expect(result.current.authToken).toBe('');
    });
  });

  describe('Autenticação', () => {
    it('deve realizar login com sucesso', async () => {
      const mockApiResponse = {
        data: {
          user: mockUser,
          token: 'fake-token',
          refresh_token: 'fake-refresh-token',
        },
      };

      (api.post as jest.Mock).mockResolvedValueOnce(mockApiResponse);

      const {result} = renderHook(() => React.useContext(AuthContext), {
        wrapper,
      });

      await act(async () => {
        await result.current.singIn('john@example.com', '123456');
      });

      expect(api.post).toHaveBeenCalledWith('/login', {
        email: 'john@example.com',
        password: '123456',
      });
      expect(result.current.user).toEqual(mockUser);
      expect(result.current.authToken).toBe('fake-token');
      expect(result.current.isLoading).toBe(false);
    });

    it('deve lidar com erro no login', async () => {
      const error = new Error('Credenciais inválidas');
      (api.post as jest.Mock).mockRejectedValueOnce(error);

      const {result} = renderHook(() => React.useContext(AuthContext), {
        wrapper,
      });

      try {
        await act(async () => {
          await result.current.singIn('invalid@example.com', 'wrong');
        });
      } catch (e) {
        expect(e).toBe(error);
      }

      expect(result.current.user).toEqual({});
      expect(result.current.authToken).toBe('');
      expect(result.current.isLoading).toBe(false);
    });

    it('deve realizar cadastro com sucesso', async () => {
      (api.post as jest.Mock).mockResolvedValueOnce({data: mockUser});

      const {result} = renderHook(() => React.useContext(AuthContext), {
        wrapper,
      });

      await act(async () => {
        await result.current.signUp(mockNewUser);
      });

      expect(api.post).toHaveBeenCalledWith('/register', mockNewUser);
      expect(result.current.isLoading).toBe(false);
    });

    it('deve realizar logout com sucesso', async () => {
      const {result} = renderHook(() => React.useContext(AuthContext), {
        wrapper,
      });
      const {storage} = require('@storage/storageConfig');

      await act(async () => {
        await result.current.singOut();
      });

      expect(storage.delete).toHaveBeenCalledTimes(3);
      expect(result.current.user).toEqual({});
      expect(result.current.authToken).toBe('');
      expect(result.current.isLoading).toBe(false);
    });
  });

  describe('Persistência e Storage', () => {
    it('deve carregar dados do usuário do storage', async () => {
      const {storage} = require('@storage/storageConfig');
      storage.getString
        .mockReturnValueOnce(JSON.stringify(mockUser)) // user
        .mockReturnValueOnce(JSON.stringify({token: 'fake-token'})); // token

      const {result, waitForNextUpdate} = renderHook(
        () => React.useContext(AuthContext),
        {wrapper},
      );

      await waitForNextUpdate();

      expect(result.current.user).toEqual(mockUser);
      expect(result.current.authToken).toBe('fake-token');
      expect(result.current.isLoading).toBe(false);
    });

    it('deve salvar dados do sucesso da tela', async () => {
      const {storage} = require('@storage/storageConfig');
      const {result} = renderHook(() => React.useContext(AuthContext), {
        wrapper,
      });

      await act(async () => {
        result.current.successScreenEnter();
      });

      expect(storage.set).toHaveBeenCalledWith(
        '@shoppingCoin3:token',
        JSON.stringify({success: true}),
      );
    });
  });
});
