const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const task = input.value.trim();
  if(task !== '') {
    addTask(task);
    input.value = '';
  }
});

function addTask(task) {
  const li = document.createElement('li');
  li.innerHTML = `
    ${task}
    <button class="delete-btn">x</button>
  `;
 todoList.appendChild(li);

  const deleteBtn = li.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', function() {
    li.remove();
  });
}
