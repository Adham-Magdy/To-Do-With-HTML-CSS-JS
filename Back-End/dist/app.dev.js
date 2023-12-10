"use strict";

// select elements
var input = document.querySelector('.input');
var submit = document.querySelector('.add');
var tasksDiv = document.querySelector('.tasks'); // Array To Store The Task

var arrayOfTasks = [];

if (localStorage.getItem('tasks')) {
  arrayOfTasks = JSON.parse(localStorage.getItem('tasks'));
}

getDataFromStorage(); // add task

submit.onclick = function () {
  if (input.value != '') {
    addTasksToArray(input.value);
    input.value = '';
  }
}; // end submit function
// Add Tasks To Array Function


function addTasksToArray(taskValue) {
  // Task Data
  var Task = {
    id: Date.now(),
    tittle: taskValue,
    completed: false
  };
  arrayOfTasks.push(Task); // Add Tasks To Page

  addElementsToPage(arrayOfTasks); // Add Tasks To Local Storage

  addTaskToLocalStorage(arrayOfTasks);
  console.log(arrayOfTasks);
  console.log(JSON.stringify(arrayOfTasks));
} // end addTasksToArray Function
// Adding Task To Page


function addElementsToPage(arrayOfTasks) {
  // Clean Tasks Div
  tasksDiv.innerHTML = ''; // Looping on Array of tasks

  arrayOfTasks.forEach(function (task) {
    // Create Main Div
    var div = document.createElement('div');
    div.className = 'task'; // check if task is completed

    if (task.completed) {
      div.className = 'task done';
    }

    div.setAttribute('data-id', task.id);
    div.appendChild(document.createTextNode(task.tittle)); // Create Delete Button

    var span = document.createElement('span');
    span.className = 'del';
    span.appendChild(document.createTextNode('DELETE')); // add button to main div

    div.appendChild(span);
    tasksDiv.appendChild(div);
  });
} // End Function
// Adding Task Data to Local Storage


function addTaskToLocalStorage(arrayOfTasks) {
  window.localStorage.setItem('tasks', JSON.stringify(arrayOfTasks));
} // Get Tasks Data From Local Storage


function getDataFromStorage() {
  var data = window.localStorage.getItem('tasks');

  if (data) {
    var tasks = JSON.parse(data);
    addElementsToPage(tasks);
  }
} // end Function
// Delete Button Function


tasksDiv.addEventListener('click', function (e) {
  if (e.target.classList.contains('del')) {
    // delete task from local storage
    deleteTaskFromStorage(e.target.parentElement.getAttribute('data-id')); // delete task from main page

    e.target.parentElement.remove();
  }
});