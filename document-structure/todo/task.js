const btn = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');

btn.addEventListener('click', addTask);

function addTask(event) {

    event.preventDefault();

    let text = document.getElementById('task__input');
    if (text.value === '') return;

    const task = `<div class="task">
                    <div class="task__title">
                    ${text.value}
                    </div>
                    <a href="#" class="task__remove">&times;</a>
                  </div>`;

    taskList.insertAdjacentHTML('beforeEnd', task);

    localTasks = JSON.parse(localStorage.tasks);
    localTasks.push(text.value);
    localStorage.tasks = JSON.stringify(localTasks);

    text.value = '';

    canBeDeleted();
}

function canBeDeleted() {

    const removeList = document.querySelectorAll('.task__remove');

    for (let item of removeList) {
        item.addEventListener('click', removeTask);
    }
}

function removeTask(event) {

    event.preventDefault();
    event.target.closest('.task').remove();

    let key = event.target.closest('.task').querySelector('.task__title').textContent.trim();

    for (let item of JSON.parse(localStorage.tasks)) {
        if (key === item) {

            localTasks = JSON.parse(localStorage.tasks);
            localTasks.splice(localTasks.indexOf(key), 1);
            localStorage.tasks = JSON.stringify(localTasks);
        }
    }

}

function init() {

    if (!localStorage.tasks) {
        localStorage.setItem('tasks', '[]');
        return;
    } else {

        for (let title of JSON.parse(localStorage.tasks)) {

            const task = `<div class="task">
                                <div class="task__title">
                                ${title}
                                </div>
                                <a href="#" class="task__remove">&times;</a>
                              </div>`;

            taskList.insertAdjacentHTML('beforeEnd', task);
        }
        canBeDeleted();
    }
}

init();