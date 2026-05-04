import { useState } from "react";
import "./styles/App.css";
import PersonalDetails from "./components/PersonalDetails";
import ExperienceDetails from "./components/ExperienceDetails";
import Resume from "./Resume";
import { educationFields, workFields, projectFields } from "./data/fields";
import {
  personalData,
  workData,
  educationData,
  projectData,
  lastSavedDate,
} from "./data/initialInfo";
import { changeLocalStorage } from "./data/localStorage";
import { displaySavedText } from "./data/resumeText";

export default function App() {
  const [personalInfo, setPersonalInfo] = useState(personalData);
  const [educationInfo, setEducationInfo] = useState(educationData);
  const [workInfo, setWorkInfo] = useState(workData);
  const [projectInfo, setProjectInfo] = useState(projectData);
  const [messageText, setMessageText] = useState(
    `Signature: ${personalData.name}| last saved resume on ${lastSavedDate}`,
  );

  const saveResume = () => {
    changeLocalStorage("personalInfo", personalInfo);
    changeLocalStorage("educationInfo", educationInfo);
    changeLocalStorage("workInfo", workInfo);
    changeLocalStorage("projectInfo", projectInfo);
    displaySavedText(personalInfo.name, false, setMessageText);
  };

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
        <h3 id="message">{messageText.split("|").map((split)=>{
          return <p>{split}</p>
        })}</h3>
        <button id="save" onClick={saveResume}>
          Save Resume
        </button>
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
