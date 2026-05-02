import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import ResumeInput from "./ResumeInput";
import CreatedExperience from "./CreatedExperience";

import "../styles/ExperienceDetails.css";

export default function ExperienceDetails({
  title,
  list,
  setList,
  fields,
  type,
}) {
  const [isOpen, setOpen] = useState(false);
  const [isEditing, setEditing] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field] = "";
      return acc;
    }, {}),
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRemove = (idRemove) => {
    setList((prevList)=>prevList.filter((item) => item.id != idRemove));
  }

  const resetForm = () => {
    setFormData(
      fields.reduce((acc, field) => {
        acc[field] = "";
        return acc;
      }, {}),
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = { ...formData, id: crypto.randomUUID(), type };
    setList((prev) => [...prev, newItem]);

    resetForm();
    setEditing(false);
  };

  const handleInitialClick = () => {
    setOpen(!isOpen);
    setClicked(true);
  };

  return (
    <div className="experience-container">
      <div
        className="flex flex-ali experience-dropdown"
        onClick={handleInitialClick}
      >
        <h1 className="header">{title}</h1>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      <div
        className={`experience-form ${clicked ? (isOpen ? "open" : "close") : null}`}
      >
        {(list.length > 0 && !isEditing) ? (
          <>
            {list.map((item) => <CreatedExperience experienceObject={item} removeExperience={handleRemove} />)}
            <button className="add-experience-btn" onClick={()=>setEditing(true)}>Add more</button>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            {fields.map((field) => (
              <ResumeInput
                key={field.name}
                {...field}
                value={formData[field.name] || ""}
                onChange={handleChange}
              />
            ))}
            <div className="form-buttons flex">
              <button type="submit" className="form-add">Add</button>
              <button type="reset" className="form-reset" onClick={resetForm}>Reset</button>
            </div>
            {list.length > 0 && <button type="button" className="form-back" onClick={()=>setEditing(false)}>Go Back</button>}
          </form>
        )}
      </div>
    </div>
  );
}
