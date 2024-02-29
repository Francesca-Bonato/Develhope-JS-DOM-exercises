//l'elemento padre di ul.
const body = document.documentElement.children[1];
console.log(body);

//il secondo elemento figlio di ul.
const ul = body.children[0];
const secondLi = ul.children[1];
console.log(secondLi);

// l'elemento fratello successivo del secondo li.
const firstLi = secondLi.previousElementSibling
console.log(firstLi);

// l'elemento fratello precedente del secondo li.
const thirdLi = secondLi.nextElementSibling
console.log(thirdLi);
