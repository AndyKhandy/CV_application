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
    label: "Located",
    type: "text",
    name: "located",
    placeholder: "e.g. Euless, TX",
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

export default function PersonalDetails({ data, setData }) {

  const handlePersonalInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <form>
      {resumeFields.map((field) => (
        <ResumeInput
          key={field.name}
          value={data[field.name]}
          {...field}
          onChange={handlePersonalInputChange}
        />
      ))}
    </form>
    </div>
  );
}
