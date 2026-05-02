import { GraduationCap } from "lucide-react";
import { Building2 } from "lucide-react";

export default function CreatedExperience({experienceObject, removeExperience}){
    let isEdu = experienceObject.type === "education";
    return (
        <div className="experience-entry flex flex-ali">
            <div className="entry-main flex flex-ali">
                {isEdu ? <GraduationCap/> : <Building2/>};
                <h2>{isEdu ? experienceObject.school : experienceObject.company}</h2>
            </div>
            <div className="entry-operations">
                <button>Edit</button>
                <button onClick={()=>removeExperience(experienceObject.id)}>Remove</button>
            </div>
        </div>
    )
}