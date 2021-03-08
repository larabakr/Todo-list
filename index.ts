const completed = document.getElementById('completed') as HTMLDivElement;
const completedIcon = document.getElementById('completed-icon') as HTMLImageElement;
const form = document.getElementById('add-task') as HTMLFormElement;

form.onsubmit = (e: Event): void => {
  e.preventDefault();
  if (form.task.value) {
    document.querySelector('.tasks').innerHTML += `
    <div class="task">
      <div id="completed"><img src="./done-white-18dp.svg" id="completed-icon" draggable="false" alt=""></div>
      <p id="task-text">${form.task.value.trim()}  <button id="btn">x</button></p>
    </div>
    `;
    localStorage.todos += `,${form.task.value.trim()}`;
    form.task.value = '';
  } else return;
}


localStorage.getItem('todos').split(',').forEach(todo => {
  if (todo !== "undefined") {
    console.log(todo)
    document.querySelector('.tasks').innerHTML += `
    <div class="task">
      <div id="completed"><img src="./done-white-18dp.svg" id="completed-icon" draggable="false" alt=""></div>
      <p id="task-text">${todo}  <button id="btn">x</button></p>
    </div>
    `;
  }
})

document.querySelector('.tasks').addEventListener('click', (w: Event) => {
  if ((<HTMLDivElement>w.target).id === 'completed') {
    (<HTMLDivElement>w.target).style.backgroundColor = '#8AB4F8';
    (<HTMLDivElement>w.target).querySelector('img').style.display = 'block';
    (<HTMLDivElement>w.target).parentNode.querySelector('p').style.textDecoration = 'line-through';
  } else if ((<HTMLDivElement>w.target).id === "completed-icon") {
    (<HTMLDivElement>w.target).style.display = 'none';
    (<HTMLDivElement>w.target).parentNode.style.backgroundColor = 'transparent';
    (<HTMLDivElement>w.target).parentNode.parentNode.querySelector('p').style.textDecoration = 'none';
  } else if ((<HTMLButtonElement>w.target).id === 'btn') {
    (<HTMLButtonElement>w.target).parentNode.parentNode.remove();
    localStorage.todos = localStorage.todos.split(',').filter(item => item !== (<HTMLButtonElement>w.target).parentNode.innerText.split('  ')[0])
  }
});
