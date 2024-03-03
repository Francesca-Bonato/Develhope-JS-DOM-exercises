//Crea uno script che al click del bottone inserisce la modalità dark

const btn = document.querySelector("button");
const body = document.querySelector('body');

btn.addEventListener('click', event => {
    body.classList.toggle('theme');
})