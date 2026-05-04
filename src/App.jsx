import { useState } from "react";
import "./styles/App.css";
import PersonalDetails from "./components/PersonalDetails";
import ExperienceDetails from "./components/ExperienceDetails";
import Resume from "./Resume";
import { educationFields, workFields, projectFields } from "./data/fields";
import {
  personalMock,
  educationMock,
  workMock,
  projectMock,
} from "./data/initialInfo";

export default function App() {
  const [personalInfo, setPersonalInfo] = useState(personalMock);
  const [educationInfo, setEducationInfo] = useState(educationMock);
  const [workInfo, setWorkInfo] = useState(workMock);
  const [projectInfo, setProjectInfo] = useState(projectMock);


  return (
    <div className="grid" id="main-container">
      <div id="edit-section">
        <h1 id="title">EvoTrack</h1>
        <PersonalDetails data={personalInfo} setData={setPersonalInfo} />
        <ExperienceDetails
          title="Education"
          list={educationInfo}
          setList={setEducationInfo}
          fields={educationFields}
          type="education"
        />
        <ExperienceDetails
          title="Work Experience"
          list={workInfo}
          setList={setWorkInfo}
          fields={workFields}
          type="work"
        />
        <ExperienceDetails
          title="Projects"
          list={projectInfo}
          setList={setProjectInfo}
          fields={projectFields}
          type="project"
        />
        <h4 id="advice">
          {" "}
          [*Add | to seperate descriptions into bullet points for description
          fields*]
        </h4>
      </div>
      <div id="resume-section">
        <Resume
          personal={personalInfo}
          education={educationInfo}
          work={workInfo}
          projects={projectInfo}
        />
      </div>
    </div>
  );
}
