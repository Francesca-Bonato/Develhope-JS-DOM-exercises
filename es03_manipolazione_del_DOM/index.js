const addProduct = () => {
  const ul = document.querySelector('#my-todo-list');
  const li = document.createElement('li');
  const input = document.querySelector('[name="my-input"]')
  li.innerText = input.value;
  ul.appendChild(li);
};
