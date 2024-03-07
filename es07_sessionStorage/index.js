//Lo scope di questo task è di salvare tutti i dati di un form nel session storage. 
//-Fai in modo che nello span venga inserito il testo che si è inserito nell'input nome 
//-Fai in modo che questi dati si salvino nel session storage 

const btn = document.querySelector('.btn');

function setFirstname(firstname) {
    const titleName = document.querySelector('.title-name');
    titleName.innerText = firstname;
    sessionStorage.setItem('user-firstname', firstname)
}


btn.addEventListener('click', event => {
    const input = document.querySelector('.firstname');
    const value = input.value;
    setFirstname(value);
})


const savedFirstname = sessionStorage.getItem('user-firstname')
if (savedFirstname) {
    setFirstname(savedFirstname)
}

