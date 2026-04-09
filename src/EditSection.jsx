import ExperienceDetails from "./components/ExperienceDetails"
import PersonalDetails from "./components/PersonalDetails"

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


export default function EditSection(props){

    return (
        <div>
            <PersonalDetails {...props}/>
            <ExperienceDetails title="Education" {...props} fields={educationFields}/>
            <ExperienceDetails title="Work Experience" {...props} fields={workFields}/>
        </div>
    )
}
