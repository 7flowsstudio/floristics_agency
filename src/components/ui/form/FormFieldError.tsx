import React from 'react';

interface FormFieldErrorProps {
  error?: string;
  touched?: boolean;
}

const FormFieldError: React.FC<FormFieldErrorProps> = ({ error, touched }) => {
  if (!error || !touched) return null;

  return (
    <span className="text-red-500 text-sm mt-1">
      {error}
    </span>
  );
};

export default FormFieldError;