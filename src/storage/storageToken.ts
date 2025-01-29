import {storage} from './storageConfig';
import {AUTH_TOKEN_STORAGE} from './storageKeys';

type storageAuthTokenProps = {
  token: string;
  refresh_token: string;
};

export function storageAuthTokenSave({
  token,
  refresh_token,
}: storageAuthTokenProps) {
  const data = JSON.stringify({token, refresh_token});

  storage.set(AUTH_TOKEN_STORAGE, data);
}

export function storageAuthTokenGet(): storageAuthTokenProps {
  const jsonString = storage.getString(AUTH_TOKEN_STORAGE);

  if (!jsonString) {
    return {token: '', refresh_token: ''};
  }

  return JSON.parse(jsonString);
}

export function storageAuthTokenRemove() {
  storage.delete(AUTH_TOKEN_STORAGE);
}
