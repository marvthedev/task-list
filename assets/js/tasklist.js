//Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.task-list');
const clearTaskButton = document.querySelector('.clear-tasks-btn');
const taskFilter = document.querySelector('#task-filter');
const inputBox = document.querySelector('#input-box');
const addTaskButton = document.querySelector('.add-task-btn');


// Load event listeners
loadEventListeners();

// Function to load event listeners
function loadEventListeners() {
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearTaskButton.addEventListener('click', clearTasks);
    taskFilter.addEventListener('keyup', filterTasks);
}

//Add Task
function addTask(e) {
    if (inputBox.value === '') {
        alert('Please add a task!');
    }

    //Create li element
    const liTag = document.createElement('li');
    liTag.className = 'task-item';

    //Append input from input box into li element
    liTag.appendChild(document.createTextNode(inputBox.value));

    // Create new link element with a class of "delete-item"
    const linkTag = document.createElement('a');
    linkTag.className = 'delete-item';

    // Add icon HTML
    linkTag.innerHTML = '<i class="fas fa-times"></i>';

    // Append link to li
    liTag.appendChild(linkTag);

    // Append li to ul
    taskList.appendChild(liTag);

    // Clear input
    inputBox.value = '';

    e.preventDefault();
}

//Remove Tasks
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentNode.parentNode.remove();
    }
}

//Clear Tasks
function clearTasks() {
    //Alert if there are no tasks (li) inside the task list (ul)
    if (taskList.childNodes.length < 1) {
        alert('No tasks to clear!');
    }
    else {
        taskList.innerHTML = '';
    }
}

//Filter Tasks
function filterTasks(e) {
    const filterInput = taskFilter.value.toLowerCase();
    document.querySelectorAll('.task-item').forEach
    (function(task) {
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(filterInput) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });



}