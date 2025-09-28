const TextAreaInput = ({
  value,
  onChange,
  title,
  name,
  placeholder = '',
}: {
  value: string;
  onChange: any;
  title: string;
  name: string;
  placeholder: string;
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-light text-sm">
        {title}
      </label>
      <textarea
        id={name}
        name={name}
        className="w-full py-3 px-5 mt-2 border rounded-lg text-sm"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextAreaInput;
