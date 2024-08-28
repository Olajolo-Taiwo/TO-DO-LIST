const todoList = [{
  name: 'You Can delete this task.',
  dueDate: '2000-01-01'
}, {
  name: 'You can as many as possible task.',
  dueDate: '2000-01-01'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div class="task-name">${name}</div>
      <div class="task-name">${dueDate}</div>
      <button class="delete-button">Delete</button> 
    `;
    todoListHTML += html;
  });

  document.querySelector('.todo-list')
    .innerHTML = todoListHTML;

  document.querySelectorAll('.delete-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

document.querySelector('.add-button')
  .addEventListener('click', () => {
    addTodo();
  });

function addTodo() {
  const inputElement = document.querySelector('.task-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.date-input');
  const dueDate = dateInputElement.value;

  todoList.push({ 
    name,
    dueDate
  });

  inputElement.value = '';

  renderTodoList();
}