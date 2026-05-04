import "../styles/ResumeInput.css";

export default function ResumeInput({
  label,
  type,
  placeholder,
  onChange,
  value,
  name,
  required,
}) {
  return (
    <div class="input flex flex-col">
      <label htmlFor={label}>
        {label} <span className="required-marker">{required ? "*" : ""}</span>
      </label>
      <input
        id={label}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}
