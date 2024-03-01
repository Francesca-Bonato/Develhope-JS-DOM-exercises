const addProduct = () => {
  const ul = document.querySelector('#my-todo-list');
  const input = document.querySelector('[name="my-input"]')

  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');

  li.innerText = input.value;
  li.append(checkbox);
  ul.appendChild(li);
};
