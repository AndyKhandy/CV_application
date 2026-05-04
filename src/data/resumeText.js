import { format } from "date-fns"
import { changeLocalStorage, getLocal } from "./localStorage";

let text;
let savedDate;

export function displaySavedText(name, onLoad, setMessage){
    if((onLoad && !getLocal("date"))){
        return;
    }
    savedDate = onLoad ? getLocal("date") : format(new Date(), "MM/dd/yyyy");
    changeLocalStorage("date", savedDate);
    text = `Signature: ${name}| saved resume last on ${savedDate}...`;
    setMessage(text); 
}

