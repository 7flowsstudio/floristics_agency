interface FormInputProps {
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  name,
  type = 'text',
  placeholder,
  error,
}) => {
  return (
    <div className="flex flex-col">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="py-3 px-5 bg-cardDark rounded-lg"
      />
      {error && (
        <span className="text-red-700 text-xs mt-1 text-right">
          {error}
        </span>
      )}
    </div>
  );
};