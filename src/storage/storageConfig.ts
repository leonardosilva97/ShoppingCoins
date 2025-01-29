import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV({
  id: 'myAppStorage', // ID opcional que você quiser
});
