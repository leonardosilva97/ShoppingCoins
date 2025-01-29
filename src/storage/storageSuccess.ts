import {storage} from './storageConfig';
import {IS_SUCCESS} from './storageKeys';

type storageSuccessProps = {
  success: boolean;
};

export function storageSuccessSave({success}: storageSuccessProps) {
  const data = JSON.stringify({success});

  storage.set(IS_SUCCESS, data);
}

export function storageSuccessGet(): storageSuccessProps {
  const jsonString = storage.getString(IS_SUCCESS);

  if (!jsonString) {
    return {success: false};
  }

  return JSON.parse(jsonString);
}

export function storageSuccessRemove() {
  storage.delete(IS_SUCCESS);
}
