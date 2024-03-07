//Lo scope di questo task è di salvare tutti i dati di un form nel local storage.
//-Fai in modo che nello span venga inserito il testo che si è inserito nell'input nome
//-Fai in modo che questi dati si salvino nel local storage
//-Controlla che al reload il nome nel titolo non scompaia

const btn = document.querySelector(".btn");

function setFirstname(firstname) {
    const titleName = document.querySelector(".title-name");
    titleName.innerText = firstname;
    localStorage.setItem("user-firstname", firstname);
}

btn.addEventListener("click", (event) => {
  const input = document.querySelector(".firstname");
  const value = input.value;

  setFirstname(value)
});

const savedFirstname = localStorage.getItem('user-firstname');

if (savedFirstname) {
    setFirstname(savedFirstname)
}