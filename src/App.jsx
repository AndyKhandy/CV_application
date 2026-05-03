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
    placeholder: "e.g. University of Texas",
    required: true
  },
  {
    label: "Degree",
    name: "degree",
    type: "text",
    placeholder: "e.g. Bachelor of Science",
    required: true
  },
  {
    label: "Field of Study",
    name: "major",
    type: "text",
    placeholder: "e.g. Computer Science",
    required: true
  },
  {
    label: "Graduation Date",
    name: "gradDate",
    type: "text",
    placeholder: "e.g. May 2026",
    required: false
  },
  {
    label: "Extracurriculars",
    name: "extra",
    type: "text",
    placeholder: "Presidential of Chess Club",
    required: false
  }
];

const workFields = [
  {
    label: "Company Name",
    name: "company",
    type: "text",
    placeholder: "e.g. Tech Solutions Inc.",
    required: true
  },
  {
    label: "Job Title",
    name: "position",
    type: "text",
    placeholder: "e.g. Software Engineer",
    required: true
  },
  {
    label: "Start & End Date",
    name: "workDates",
    type: "text",
    placeholder: "e.g. Jan 2022 - Present",
    required: false
  },
  {
    label: "Location",
    name: "workLocation",
    type: "text",
    placeholder: "e.g. Dallas, TX (or Remote)",
    required: true
  },
  {
    label: "Description",
    name: "description",
    type: "textarea",
    placeholder: "Describe your key responsibilities and achievements...",
    required: false
  }
];

const projectFields = [
  {
    label: "Project Title",
    name: "projectTitle",
    type: "text",
    placeholder: "e.g. Personal Portfolio Website",
    required: true
  },
  {
    label: "Tech Stack",
    name: "techStack",
    type: "text",
    placeholder: "e.g. React, Node.js, MongoDB",
    required: true
  },
  {
    label: "Project Date",
    name: "projectDate",
    type: "text",
    placeholder: "e.g. Jan 2024 - Mar 2024",
    required: false
  },
  {
    label: "Project Description",
    name: "description",
    type: "textarea",
    placeholder: "Briefly describe what the project does and what you built...",
    required: true
  },
  {
    label: "GitHub Link",
    name: "github",
    type: "text",
    placeholder: "https://github.com/yourusername/project",
    required: false
  },
];


export default function App() {
  const [personalInfo, setPersonalInfo] = useState({ name: "Jake Ryan", located: "", email: "", phone: "", LinkedIn: ""});
  const [educationInfo, setEducationInfo] = useState([]);
  const [workInfo, setWorkInfo] = useState([]);
  const [projectInfo, setProjectInfo] = useState([]);

  return (
    <div className="grid" id="main-container">
      <div id="edit-section">
          <h1 id="title">POKEME</h1>
          <PersonalDetails data={personalInfo} setData={setPersonalInfo}/>
          <ExperienceDetails title="Education" list={educationInfo} setList={setEducationInfo} fields={educationFields} type="education"/>
          <ExperienceDetails title="Work Experience" list={workInfo} setList={setWorkInfo} fields={workFields} type="work"/>
          <ExperienceDetails title="Projects" list={projectInfo} setList={setProjectInfo} fields={projectFields} type="project"/>
          <h4 id="advice">[Fields marked with a red <span className="required-marker">*</span> as required to be filled]</h4>
      </div>
      <Resume personal={personalInfo} education={educationInfo} work={workInfo} projects={projectInfo} />
    </div>
  );
}
