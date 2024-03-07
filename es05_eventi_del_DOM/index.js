//Crea uno script che al click del bottone inserisce la modalità dark

document.querySelector('button').addEventListener('click', event => {
    document.querySelector('body').classList.toggle('theme');
})