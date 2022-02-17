let button = document.getElementById('criar-tarefa')
button.addEventListener('click', addTask);


function addTask() {
	let newTask = document.getElementById('texto-tarefa');
	let taskList = document.getElementById('lista-tarefas');
	let elementNewTask = document.createElement('li');
	elementNewTask.innerText = newTask.value;
	elementNewTask.addEventListener('click', highlightItem);
	taskList.appendChild(elementNewTask);
	newTask.value = '';
}

function highlightItem(event) {
	let highlighted = document.querySelectorAll('li');
	for (let i = 0; i < highlighted.length; i +=1) {
		highlighted[i].classList.remove('selectedItem');
		event.target.classList.add('selectedItem');
	}
}
// resolucao da funcao 'highlightItem' alcancada gracas as intrucoes
// e testes ocorridos na Sala de Estudos junto aos colegas
// Ronan Salvador, Vitor Vieira, Jonathan Jhon e Mariza Paini.
