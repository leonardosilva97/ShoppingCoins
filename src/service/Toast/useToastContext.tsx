import {useContext} from 'react';
import {ToastService} from './toastTypes';
import {ToastContext} from './Providers/ToastProvider';

export function useToastContext(): ToastService {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }

  return context;
}
