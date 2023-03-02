var input;
export default input;

export function getInput(id) {
return input = document.getElementById(id).value;
}

export function clearInput(id) {
return document.getElementById(id).value = "";
}