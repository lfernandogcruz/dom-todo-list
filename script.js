let botaoAddTask = document.getElementById('criar-tarefa')
botaoAddTask.addEventListener('click', addTask);

let newTask = document.getElementById('texto-tarefa');
let taskList = document.getElementById('lista-tarefas');

function addTask() {
	let elementNewTask = document.createElement('li');
	elementNewTask.innerText = newTask.value;
	elementNewTask.addEventListener('click', highlightItem);
	elementNewTask.addEventListener('dblclick', linethroughItem);
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

function linethroughItem(event) {
		if (event.target.classList.contains('completed')) {
			event.target.classList.remove('completed');
		} else {
			event.target.classList.add('completed');
		};
}

let botaoClearAll = document.getElementById('apaga-tudo');
function clearAll() {
	taskList.innerText = '';
}
botaoClearAll.addEventListener('click', clearAll);



let botaoClearDone = document.getElementById('remover-finalizados');
botaoClearDone.addEventListener('click', function () {
	let elementoDone = document.querySelectorAll('.completed');
	for (let k = 0; k < elementoDone.length; k += 1) {
		elementoDone[k].remove();
	};	
});

