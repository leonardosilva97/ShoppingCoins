import {createContext, useState} from 'react';
import {Toast, ToastService} from '../toastTypes';

export const ToastContext = createContext<ToastService>({
  toast: null,
  showToast: () => {},
  hiddenToast: () => {},
});

export function ToastProvider({children}: React.PropsWithChildren<{}>) {
  const [toast, setToast] = useState<ToastService['toast']>(null);

  function showToast(_toast: Toast) {
    setToast(_toast);
  }

  function hiddenToast() {
    setToast(null);
  }

  return (
    <ToastContext.Provider value={{toast, showToast, hiddenToast}}>
      {children}
    </ToastContext.Provider>
  );
}
