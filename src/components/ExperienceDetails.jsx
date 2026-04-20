import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import ResumeInput from "./ResumeInput";

import "../styles/ExperienceDetails.css";

export default function ExperienceDetails({ title, data, onChange, fields }) {
  const [isOpen, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false)

  const handleClick = ()=>{
    setOpen(!isOpen);
    setClicked(true);
  }

  return (
    <div class="experience-container">
      <div className="flex flex-ali experience-dropdown" onClick={handleClick}>
        <h1>{title}</h1>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      <div class={`experience-form ${clicked ? (isOpen ? "open" : "close") : null}`}>
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
    </div>
  );
}
