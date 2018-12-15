//Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.task-list');
const clearTaskButton = document.querySelector('.clear-tasks-btn');
const taskInsert = document.querySelector('#task-insert');
const inputBox = document.querySelector('#input-box');
const addTaskButton = document.querySelector('.add-task-btn');

// Load event listeners
loadEventListeners();

// Function to load event listeners
function loadEventListeners() {
    form.addEventListener('submit', addTask);
}

//Add Task
function addTask(e) {
    if (inputBox.value === '') {
        alert('Please add a task!');
    }
//Create li element
const createLi = document.createElement('li');
createLi.className = 'task-item';
//Create text node and append to li
createLi.appendChild(document.createTextNode(inputBox.value));
// Create new link element
const link = document.createElement('a');
// Add class
link.className = 'delete-item';
// Add icon HTML
link.innerHTML = '<i class="fas fa-times"></i>';
// Append link to li
createLi.appendChild(link);

// Append li to ul
taskList.appendChild(createLi);

// Clear input
inputBox.value = '';

e.preventDefault(); 
}

