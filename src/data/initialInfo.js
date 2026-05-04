import { getLocal } from "./localStorage";

export const personalData = getLocal("personalInfo") ?? {
  name: "Jake Ryan",
  located: "Arlington, TX",
  email: "Jakesuper@gmail.com",
  phone: "682-192-1923",
  LinkedIn: "linkedin.com/in/jakeRy",
};

export const educationData = getLocal("educationInfo") ?? [
  {
    id: crypto.randomUUID(),
    school: "University of Central Florida",
    degree: "Bachelor of Science in Computer Science",
    gpa: "4.0",
    gradDate: "May 2028",
    courseWork: "Data Structures and Algorithms, Object-Oriented Programming, Intermediate Programming, Discrete Structures",
    type: "education",
  },
];

export const workData = getLocal("workInfo") ?? [
  {
    id: crypto.randomUUID(),
    company: "Computing Research Association",
    position: "Undergraduate Researcher",
    workDates: "Present",
    workLocation: "Dallas, TX",
    description:
      "Selected as a participant in the UR2PhD Program, a national CRA-funded initiative designed to bridge undergraduate research and doctoral studies through intensive mentorship. | Prototyping 3 distinct block-based UI/UX designs that map restrictive type and grammar systems to visual components, preventing compilation errors during formula construction",
    type: "work",
  },
];

export const projectData = getLocal("projectInfo") ?? [
  {
    id: crypto.randomUUID(),
    projectTitle: "the bugHouse",
    techStack: "TypeScript, React, Supabase, Tailwind CSS, Python",
    projectDate: "Present",
    description:
      "Developing a web application for the bugHouse at UTA to track student attendance and tutor availability | Implemented Supabase authentication for tutors and administrators, ensuring secure access and role-based authorization. | Designing a responsive, modern UI with Tailwind CSS to enhance user accessibility across devices.",
    type: "project",
  },
  {
    id: crypto.randomUUID(),
    projectTitle: "Skydex",
    techStack: "JavaScript, Webpack, Weather API, HTML/CSS",
    projectDate: "Dec 2025",
    description:
      "Built a responsive weather application featuring a UI inspired by Pokemon’s Pokedex interface. | Integrated the Visual Crossing Weather API to fetch and display real-time conditions and multi-day forecasts. | Managed asynchronous API requests and loading states using JavaScript Promises and async/await. ",
    type: "project",
  },
];

export const lastSavedDate = getLocal("date") ?? "5/4/2026";