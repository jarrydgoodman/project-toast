import React from 'react';

const useEscapeKey = (callback) => {
  React.useEffect(() => {
    const onKeyDown = e => {
      if (e.code === 'Escape') {
        callback();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [callback]);
};

export default useEscapeKey;
