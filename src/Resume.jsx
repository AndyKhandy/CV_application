import "./styles/Resume.css";

export default function Resume({ personal, education, work, projects }) {
  return (
    <div id="resume-section">
      <div id="resume">
        <div className="resume-header center">
          <h1>{personal.name}</h1>
          <div className="resume-header-info flex flex-ali">
            <h3>{personal.located}</h3>
            <h3>{personal.email}</h3>
            <h3>{personal.phone}</h3>
            <h3>{personal?.LinkedIn}</h3>
          </div>
        </div>
        <h2>Education</h2>
        {education.length > 0 && education.map((educ)=>{
          return (
          <div>
            <h2>Education: {educ.school}</h2>
            <h2>Degree: {educ.degree || "Bachelor's Of Science"}</h2>
          </div>
          )
        })}
        <h2>Work Experience</h2>
        {work.length > 0 && work.map((work)=>{
          return (
          <div>
            <h2>Company: {work.company}</h2>
            <h2>Position: {work.position}</h2>
          </div>
          )
        })}
        <h2>Projects</h2>
        {projects.length > 0 && projects.map((project)=>{
          return (
          <div>
            <h2>Title: {project.projectTitle}</h2>
            <h2>Tech Stack: {project.techStack}</h2>
          </div>
          )
        })}
      </div>
    </div>
  );
}
