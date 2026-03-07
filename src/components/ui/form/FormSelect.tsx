import React, { useState, useRef, useEffect } from 'react';
import FormFieldError from './FormFieldError';

interface Option {
  value: string;
  label: string;
}

interface FormSelectProps {
  name: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  options: Option[];
  error?: string;
  touched?: boolean;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  name,
  placeholder = 'Оберіть варіант',
  value,
  onChange,
  onBlur,
  options,
  error,
  touched,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        onBlur();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onBlur]);

  // Close dropdown on ESC key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        onBlur();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onBlur]);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
    onBlur();
  };

  const selectedOption = options.find(option => option.value === value);

  return (
    <div className="flex flex-col">
      <div ref={selectRef} className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-3 px-8 bg-cardDark rounded-lg text-left flex justify-between items-center"
        >
          <span className={selectedOption ? '' : 'text-gray-400'}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <svg
            className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-cardDark rounded-lg shadow-lg max-h-60 overflow-auto">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className="w-full px-8 py-3 text-left hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
      <FormFieldError error={error} touched={touched} />
    </div>
  );
};

export default FormSelect;