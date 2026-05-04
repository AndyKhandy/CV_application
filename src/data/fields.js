export const personalFields = [
  {
    label: "Full Name",
    type: "text",
    name: "name",
    placeholder: "e.g. Alex Rivera",
    required: true
  },
  {
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "e.g. alex@example.com",
    required: true
  },
  {
    label: "Located",
    type: "text",
    name: "located",
    placeholder: "e.g. Euless, TX",
    required: false
  },
  {
    label: "Phone Number",
    type: "tel",
    name: "phone",
    placeholder: "e.g. +1 (555) 000-0000",
    required: true
  },
  {
    label: "LinkedIn",
    type: "text",
    name: "LinkedIn",
    placeholder: "linkedin.com/in/janedoe",
    required: false
  }
];

export const educationFields = [
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
    label: "GPA",
    name: "gpa",
    type: "text",
    placeholder: "eg 3.75",
    required: false
  },
  {
    label: "Graduation Date",
    name: "gradDate",
    type: "text",
    placeholder: "e.g. May 2026",
    required: false
  },
  {
    label: "Relevent Coursework",
    name: "courseWork",
    type: "text",
    placeholder: "Intro to Programming",
    required: false
  }
];

export const workFields = [
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

export const projectFields = [
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