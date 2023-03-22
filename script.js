const newTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

function highlightItem(event) {
  const highlighted = document.querySelectorAll('li');
  for (let i = 0; i < highlighted.length; i += 1) {
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
  }
}

function addTask() {
  const elementNewTask = document.createElement('li');
  elementNewTask.innerText = newTask.value;
  elementNewTask.addEventListener('click', highlightItem);
  elementNewTask.addEventListener('dblclick', linethroughItem);
  taskList.appendChild(elementNewTask);
  newTask.value = '';
}

const botaoAddTask = document.getElementById('criar-tarefa');
botaoAddTask.addEventListener('click', addTask);

const botaoClearAll = document.getElementById('apaga-tudo');
function clearAll() {
  taskList.innerText = '';
}
botaoClearAll.addEventListener('click', clearAll);

const botaoClearDone = document.getElementById('remover-finalizados');
botaoClearDone.addEventListener('click', () => {
  const elementoDone = document.querySelectorAll('.completed');
  for (let k = 0; k < elementoDone.length; k += 1) {
    elementoDone[k].remove();
  }
});

const botaoClearSelected = document.getElementById('remover-selecionado');
botaoClearSelected.addEventListener('click', () => {
  const elementoSelected = document.querySelector('.selectedItem');
  elementoSelected.remove();
});

const botaoSave = document.getElementById('salvar-tarefas');
botaoSave.addEventListener('click', () => {
  const elementoLis = document.querySelector('ol').outerHTML;
  localStorage.setItem('listas', elementoLis);
});

function carregaPagina() {
  const storaged = localStorage.getItem('listas');
  if (storaged.length > 0) {
    const elementoSecao = document.getElementById('secaoDaLista');
    elementoSecao.innerHTML = storaged;
  }
}

window.onload = () => carregaPagina();
