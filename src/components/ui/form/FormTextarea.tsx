interface FormTextareaProps {
  name: string;
  placeholder?: string;
  error?: string;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  name,
  placeholder,
  error,
}) => {
  return (
    <div className="flex flex-col">
      <textarea
        name={name}
        placeholder={placeholder}
        className="py-3 px-5 bg-cardDark rounded-lg resize-none"
        rows={3}
      />
      {error && (
        <span className="text-red-700 text-xs mt-1">
          {error}
        </span>
      )}
    </div>
  );
};