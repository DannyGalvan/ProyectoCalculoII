import { useState } from 'react';

export const useModals = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [final, setFinal] = useState(false);

  const toggleSuccess = () => {
    setSuccess(!success);
  };

  const toggleError = () => {
    setError(!error);
  };

  const toggleFinal = () => {
    setFinal(!final);
  };

  return {
    success,
    error,
    final,
    toggleSuccess,
    toggleError,
    toggleFinal,
  };
};
