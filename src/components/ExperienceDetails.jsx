import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import ResumeInput from "./ResumeInput";

export default function ExperienceDetails({ title, data, onChange, fields }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setOpen(!isOpen)}>
        <h1>{title}</h1>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      {isOpen && (
        <div>
          <h1>What do you mean I can't check my experience bruhhh</h1>
          <form>
            {fields.map((field) => (
              <ResumeInput
                key={field.name}
                {...field}
                value={data[field.name]}
                onChange={onChange}
              />
            ))}
            <button onClick={() => setOpen(!isOpen)}>Done</button>
          </form>
        </div>
      )}
    </div>
  );
}
