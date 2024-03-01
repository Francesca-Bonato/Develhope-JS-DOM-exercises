//recuperare il valore di ciascun campo di input.

const firstName = document.getElementById('firstName').value;
const lastName = document.getElementById('lastName').value;
const age = document.getElementById('age').value;

//creare un oggetto person contenente le proprietà: firstName, lastName e age.

let person = {
    firstName : firstName,
    lastName : lastName,
    age : age,
}

//recuperare l'elemento form e aggiungere l'attributo data-person contenente l'oggetto person in formato json.

const form = document.querySelector('form')
form.setAttribute('data-person', JSON.stringify(person))

console.log(form);





