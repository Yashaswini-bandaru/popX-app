function InputField({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div className="inputBox">
      <label>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;