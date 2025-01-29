import {UserInterface} from '@domain';
import {storage} from './storageConfig'; // a instância do MMKV

import {USER_STORAGE} from './storageKeys';

export function storageUserSave(user: UserInterface) {
  storage.set(USER_STORAGE, JSON.stringify(user));
}

export function storageUserGet(): UserInterface {
  const data = storage.getString(USER_STORAGE);

  if (!data) {
    return {} as UserInterface;
  }

  return JSON.parse(data);
}

export function storageUserRemove() {
  storage.delete(USER_STORAGE);
}
