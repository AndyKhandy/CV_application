import "./styles/Resume.css";

export default function Resume({ personal, education, work, projects }) {
  return (
    <div id="resume">
      {/* HEADER */}
      <div className="resume-header center">
        <h1 id="resume-name">
          <strong>{personal.name}</strong>
        </h1>

        <div className="resume-header-info flex flex-ali">
          <p className="resume-personal-info">{personal.located}</p>
          <p className="resume-personal-info">{personal.email}</p>
          <p className="resume-personal-info">{personal.phone}</p>
          <p className="resume-personal-info">{personal?.LinkedIn}</p>
        </div>
      </div>

      {/* EDUCATION */}
      <h2 className="resume-section-header">Education</h2>
      <hr />

      {education.length > 0 &&
        education.map((educ) => (
          <div className="resume-section" key={educ.id}>
            <div className="education-main flex flex-ali">
              <h2 className="resume-experience-title">
                <strong>{educ.school}</strong>
              </h2>
              <p>{educ?.gradDate}</p>
            </div>

            <p
              className="resume-experience-subtitle"
              style={{ fontStyle: "italic" }}
            >
              {educ.degree || "Bachelor's Of Science"}
            </p>

            <ul>
              <li>
                <p>
                  <strong>Relevant Coursework:</strong> {educ.courseWork}
                </p>
              </li>
            </ul>
          </div>
        ))}

      {/* EXPERIENCE */}
      <h2 className="resume-section-header">Experience</h2>
      <hr />

      {work.length > 0 &&
        work.map((job) => (
          <div className="resume-section" key={job.id}>
            <div className="work-main flex flex-ali">
              <h2 className="resume-experience-title">
                <strong>{job.company}</strong>
              </h2>
              <p>{job.workLocation}</p>
            </div>

            <p
              className="italic resume-experience-subtitle"
              style={{ fontStyle: "italic" }}
            >
              {job.position}
            </p>

            <ul>
              {job.description.split("|").map((bulletPoint) => {
                return <li>{bulletPoint}</li>;
              })}
            </ul>
          </div>
        ))}

      {/* PROJECTS */}
      <h2 className="resume-section-header">Projects</h2>
      <hr />

      {projects.length > 0 &&
        projects.map((project) => (
          <div className="resume-section" key={project.id}>
            <div className="project-main flex flex-ali">
              <div className="project-main-left flex flex-ali">
                <p className="resume-experience-title">
                  <strong>{project.projectTitle}</strong> |{" "}
                  <span
                    className="italic resume-experience-title non-bold"
                    style={{ fontStyle: "italic" }}
                  >
                    {project.techStack}
                  </span>
                </p>
              </div>

              <p>{project?.projectDate}</p>
            </div>

            <ul>
              {project.description.split("|").map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}
