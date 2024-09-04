document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInp').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInp = document.getElementById('taskInp');
    const taskVal = taskInp.value.trim();

    if (taskVal === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    li.innerHTML = `
        <span>${taskVal}</span>
        <div class="lidiv">
          <button class="complete">✔</button>
          <button class="delete">❌</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInp.value = '';

    li.querySelector('.complete').addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    li.querySelector('.delete').addEventListener('click', function() {
        taskList.removeChild(li);
    });
}
