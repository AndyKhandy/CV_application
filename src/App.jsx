import { useState } from "react";
import "./styles/App.css";
import PersonalDetails from "./components/PersonalDetails";
import ExperienceDetails from "./components/ExperienceDetails";
import Resume from "./Resume";

const educationFields = [
  {
    label: "School/University",
    name: "school",
    type: "text",
    placeholder: "e.g. University of Texas"
  },
  {
    label: "Degree",
    name: "degree",
    type: "text",
    placeholder: "e.g. Bachelor of Science"
  },
  {
    label: "Field of Study",
    name: "major",
    type: "text",
    placeholder: "e.g. Computer Science"
  },
  {
    label: "Graduation Date",
    name: "gradDate",
    type: "text",
    placeholder: "e.g. May 2026"
  },
  {
    label: "Extracurriculars",
    name: "extra",
    type: "text",
    placeholder: "Presidential of Chess Club"
  }
];

const workFields = [
  {
    label: "Company Name",
    name: "company",
    type: "text",
    placeholder: "e.g. Tech Solutions Inc."
  },
  {
    label: "Job Title",
    name: "position",
    type: "text",
    placeholder: "e.g. Software Engineer"
  },
  {
    label: "Start & End Date",
    name: "workDates",
    type: "text",
    placeholder: "e.g. Jan 2022 - Present"
  },
  {
    label: "Location",
    name: "workLocation",
    type: "text",
    placeholder: "e.g. Dallas, TX (or Remote)"
  },
  {
    label: "Description",
    name: "description",
    type: "textarea",
    placeholder: "Describe your key responsibilities and achievements..."
  }
];


export default function App() {
  const [personalInfo, setPersonalInfo] = useState({ name: "Jake Ryan", located: "", email: "", phone: "", LinkedIn: ""});
  const [educationInfo, setEducationInfo] = useState([]);
  const [workInfo, setWorkInfo] = useState([]);

  return (
    <div className="grid" id="main-container">
      <div id="edit-section">
          <h1 id="title">POKEME</h1>
          <PersonalDetails data={personalInfo} setData={setPersonalInfo}/>
          <ExperienceDetails title="Education" list={educationInfo} setList={setEducationInfo} fields={educationFields} type="education"/>
          <ExperienceDetails title="Work Experience" list={workInfo} setList={setWorkInfo} fields={workFields} type="work"/>
        </div>
      <Resume personal={personalInfo} education={educationInfo} work={workInfo} />
    </div>
  );
}
