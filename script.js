let button = document.getElementById('criar-tarefa')
button.addEventListener('click', addTask);

function addTask() {
  let newTask = document.getElementById('texto-tarefa');
  let taskList = document.getElementById('lista-tarefas');
  let elementNewTask = document.createElement('li');
  elementNewTask.innerText = newTask.value;
  taskList.appendChild(elementNewTask);
  newTask.value = ''; 
}
