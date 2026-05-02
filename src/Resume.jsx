export default function Resume({ personal, education, work }) {
  return (
    <div id="resume-section">
      <div id="resume">
        <h2>Full Name: {personal.name}</h2>
        <h2>Location: {personal.located}</h2>
        <h2>Email: {personal.email}</h2>
        <h2>LinkedIn: {personal.LinkedIn}</h2>
        <h2>Phone Number: {personal.phone}</h2>
        <h2>Education</h2>
        {education.length > 0 ? education.map((educ)=>{
          return (
          <div>
            <h2>Education: {educ.school}</h2>
            <h2>Degree: {educ.degree || "Bachelor's Of Science"}</h2>
          </div>
          )
        }) : <p>No Education Listed</p>}
        <h2>Work Experience</h2>
        {work.length > 0 ? work.map((work)=>{
          return (
          <div>
            <h2>Company: {work.company}</h2>
            <h2>Position: {work.position}</h2>
          </div>
          )
        }) : <p>No Work Experience Listed</p>}
      </div>
    </div>
  );
}
