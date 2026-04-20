export default function Resume({ user }) {
  return (
    <div id="resume-section">
      <div id="resume">
        <h1>Resume</h1>
        <h2>Full Name: {user.name}</h2>
        <h2>Email: {user.email}</h2>
        <h2>LinkedIn: {user.LinkedIn}</h2>
        <h2>Phone Number: {user.phone}</h2>
        <h2>Education: {user.education}</h2>
        <h2>Work: {user.work}</h2>
      </div>
    </div>
  );
}
