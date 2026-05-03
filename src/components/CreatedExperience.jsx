import { GraduationCap, Building2, Book } from "lucide-react";

export default function CreatedExperience({experienceObject, removeExperience, editExperience}){
    let title;
    let icon;

    if(experienceObject.type === "education"){
        title = experienceObject.school;
        icon = <GraduationCap/>;
    }else if(experienceObject.type === "work"){
        title = experienceObject.company;
        icon = <Building2/>;
    }else{
        title = experienceObject.projectTitle;
        icon = <Book/>;
    }

    return (
        <div className="experience-entry flex flex-ali">
            <div className="entry-main flex flex-ali">
                {icon}
                <h2>{title}</h2>
            </div>
            <div className="entry-operations flex">
                <button onClick={()=>editExperience(experienceObject)}>Edit</button>
                <button onClick={()=>removeExperience(experienceObject.id)}>Remove</button>
            </div>
        </div>
    )
}