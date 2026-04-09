export default function ResumeInput({
  label,
  type,
  placeholder,
  onChange,
  value,
  name,
}) {
  return (
    <div class="input flex flex-col">
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
