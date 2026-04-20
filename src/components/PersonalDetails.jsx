import ResumeInput from "./ResumeInput";

const resumeFields = [
  {
    label: "Full Name",
    type: "text",
    name: "name",
    placeholder: "e.g. Alex Rivera",
  },
  {
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "e.g. alex@example.com",
  },
  {
    label: "Phone Number",
    type: "tel",
    name: "phone",
    placeholder: "e.g. +1 (555) 000-0000",
  },
  {
    label: "LinkedIn",
    type: "text",
    name: "LinkedIn",
    placeholder: "https://www.linkedin.com/in/andy-khang-ta/",
  }
];

export default function PersonalDetails({ data, onChange }) {
  return (
    <form>
      {resumeFields.map((field) => (
        <ResumeInput
          key={field.name}
          value={data[field.name]}
          {...field}
          onChange={onChange}
        />
      ))}
    </form>
  );
}
