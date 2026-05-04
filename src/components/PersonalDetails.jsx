import { personalFields } from "../data/fields";
import ResumeInput from "./ResumeInput";

export default function PersonalDetails({ data, setData }) {
  const handlePersonalInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <form>
        {personalFields.map((field) => (
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
