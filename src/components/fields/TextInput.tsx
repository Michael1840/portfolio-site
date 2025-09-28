const TextInput = ({
  title,
  name,
  value,
  onChange,
  placeholder = '',
}: {
  title: string;
  name: string;
  value: string;
  onChange: any;
  placeholder?: string;
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-light text-sm">
        {title}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        placeholder={placeholder}
        className="w-full py-3 px-5 mt-2 border rounded-lg text-sm"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
