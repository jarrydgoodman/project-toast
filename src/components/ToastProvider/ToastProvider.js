import React from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';

const defaultToastContext = {
  toasts: [],
  create: _toast => void 0,
  dismiss: _id => void 0,
}

export const ToastContext = React.createContext(defaultToastContext);

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const create = React.useCallback((toast) => {
    setToasts(toasts => [...toasts, toast]);
  }, []);

  const dismiss = React.useCallback((id) => {
    setToasts(toasts => toasts.filter(toast => toast.id !== id));
  }, []);

  const dismissAll = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(dismissAll);

  const value = React.useMemo(() => ({ toasts, create, dismiss }), [create, dismiss, toasts]);

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
