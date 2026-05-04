export function changeLocalStorage(itemName, object){
    localStorage.setItem(itemName,JSON.stringify(object));
}

export function getLocal(itemName){
    return JSON.parse(localStorage.getItem(itemName));
}