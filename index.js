var completed = document.getElementById('completed');
var completedIcon = document.getElementById('completed-icon');
var form = document.getElementById('add-task');
form.onsubmit = function (e) {
    e.preventDefault();
    if (form.task.value) {
        document.querySelector('.tasks').innerHTML += "\n    <div class=\"task\">\n      <div id=\"completed\"><img src=\"./done-white-18dp.svg\" id=\"completed-icon\" draggable=\"false\" alt=\"\"></div>\n      <p id=\"task-text\">" + form.task.value.trim() + "  <button id=\"btn\">x</button></p>\n    </div>\n    ";
        localStorage.todos += "," + form.task.value.trim();
        form.task.value = '';
    }
    else
        return;
};
localStorage.getItem('todos').split(',').forEach(function (todo) {
    if (todo !== "undefined") {
        console.log(todo);
        document.querySelector('.tasks').innerHTML += "\n    <div class=\"task\">\n      <div id=\"completed\"><img src=\"./done-white-18dp.svg\" id=\"completed-icon\" draggable=\"false\" alt=\"\"></div>\n      <p id=\"task-text\">" + todo + "  <button id=\"btn\">x</button></p>\n    </div>\n    ";
    }
});
document.querySelector('.tasks').addEventListener('click', function (w) {
    if (w.target.id === 'completed') {
        w.target.style.backgroundColor = '#8AB4F8';
        w.target.querySelector('img').style.display = 'block';
        w.target.parentNode.querySelector('p').style.textDecoration = 'line-through';
    }
    else if (w.target.id === "completed-icon") {
        w.target.style.display = 'none';
        w.target.parentNode.style.backgroundColor = 'transparent';
        w.target.parentNode.parentNode.querySelector('p').style.textDecoration = 'none';
    }
    else if (w.target.id === 'btn') {
        w.target.parentNode.parentNode.remove();
        localStorage.todos = localStorage.todos.split(',').filter(function (item) { return item !== w.target.parentNode.innerText.split('  ')[0]; });
    }
});
