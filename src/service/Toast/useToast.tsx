import {useContext} from 'react';
import {ToastService} from './toastTypes';

import {ToastContext} from './Providers/ToastProvider';

export function useToast(): ToastService {
  return useContext(ToastContext);
}
