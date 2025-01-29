import {api} from '@api';
import {UserInterface} from '@domain';
import {useToast} from '@service';
import React, {useState, useEffect, createContext, ReactNode} from 'react';
import {
  storageAuthTokenGet,
  storageAuthTokenRemove,
  storageAuthTokenSave,
} from '@storage';
import {storageUserGet, storageUserRemove, storageUserSave} from '@storage';

import {storageSuccessRemove, storageSuccessSave} from '@storage';

type AuthContextDataProps = {
  user: UserInterface;
  authToken: string;
  isLoading: boolean;
  successScreenEnter: () => void;
  signUp: (userData: Omit<UserInterface, 'id'>) => Promise<void>;
  singIn: (email: string, password: string) => Promise<void>;
  singOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
);

type AuthContextProviderProps = {
  children: ReactNode;
};

export function AuthContextProvider({children}: AuthContextProviderProps) {
  const [user, setUser] = useState<UserInterface>({} as UserInterface);
  const [authToken, setAuthToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {showToast} = useToast();

  async function contextStorageTokenAndUserUpdate(
    userData: UserInterface,
    token: string,
  ) {
    setUser(userData);
    setAuthToken(token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  async function contextStorageUserAndToken(
    userData: UserInterface,
    token: string,
    refresh_token: string,
  ) {
    try {
      storageUserSave(userData);
      storageAuthTokenSave({token, refresh_token});
      await contextStorageTokenAndUserUpdate(userData, token);
    } catch (error) {
      throw error;
    }
  }

  async function signUp(userData: Omit<UserInterface, 'id'>) {
    setIsLoading(true);
    try {
      await api.post('/register', userData);
    } catch (error) {
      console.log('error', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  async function singIn(email: string, password: string) {
    setIsLoading(true);
    try {
      const response = await api.post('/login', {email, password});
      const {token, user, refresh_token} = response.data;

      if (token && user) {
        showToast({message: 'Bem vindo ao ShoppingCoins'});
        await contextStorageUserAndToken(user, token, refresh_token ?? '');
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  async function singOut() {
    setIsLoading(true);
    try {
      setUser({} as UserInterface);
      setAuthToken('');
      storageUserRemove();
      storageAuthTokenRemove();
      storageSuccessRemove();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function loadUserData() {
    setIsLoading(true);
    try {
      const userLogged = storageUserGet();
      const {token} = storageAuthTokenGet();

      if (userLogged && token) {
        contextStorageTokenAndUserUpdate(userLogged, token);
      }
    } catch (error) {
      console.log('Não foi possível pegar as informções do storage', error);
    } finally {
      setIsLoading(false);
    }
  }

  function successScreenEnter() {
    storageSuccessSave({success: true});
  }

  useEffect(() => {
    loadUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        authToken,
        isLoading,
        signUp,
        singIn,
        singOut,
        successScreenEnter,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
