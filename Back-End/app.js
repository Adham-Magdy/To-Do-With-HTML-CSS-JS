
const categories = [
  {
    title: 'Personal',
    img: '../images/boy.png',
  },
  {
    title: 'Work',
    img: '../images/briefcase.png',
  },
  {
    title: 'Shopping',
    img: '../images/shopping.png',
  },
  {
    title: 'Coding',
    img: '../images/web-design.png',
  },
  {
    title: 'Health',
    img: '../images/healthcare.png',
  },
  {
    title: 'Fitness',
    img: '../images/dumbbell.png',
  },
  {
    title: 'Education',
    img: '../images/education.png',
  },
  {
    title: 'Finance',
    img: '../images/saving.png',
  },
];

let tasks = [

  {
    id: 1,
    task: 'Go to market',
    category: 'Shopping',
    completed: false,
  },
  {
    id: 2,
    task: 'Read a chapter of a book',
    category: 'Personal',
    completed: false,
  },
  {
    id: 3,
    task: 'Prepare presentation for meeting',
    category: 'Work',
    completed: false,
  },
  {
    id: 4,
    task: 'Complete coding challenge',
    category: 'Coding',
    completed: false,
  },
  {
    id: 5,
    task: 'Take a 30-minute walk',
    category: 'Health',
    completed: false,
  },
  {
    id: 6,
    task: 'Do a 20-minute HIIT workout',
    category: 'Fitness',
    completed: false,
  },
  {
    id: 7,
    task: 'Watch an educational video online',
    category: 'Education',
    completed: false,
  },
  {
    id: 8,
    task: 'Review monthly budget',
    category: 'Finance',
    completed: false,
  },
  {
    id: 9,
    task: 'Buy groceries for the week',
    category: 'Shopping',
    completed: false,
  },
  {
    id: 10,
    task: 'Write in a journal',
    category: 'Personal',
    completed: false,
  },
  {
    id: 11,
    task: 'Send follow-up emails',
    category: 'Work',
    completed: false,
  },
  {
    id: 12,
    task: 'Work on a coding side project',
    category: 'Coding',
    completed: false,
  },
  {
    id: 13,
    task: 'Try a new healthy recipe',
    category: 'Health',
    completed: false,
  },
  {
    id: 14,
    task: 'Attend a yoga class',
    category: 'Fitness',
    completed: false,
  },
  {
    id: 15,
    task: 'Read an article about a new topic',
    category: 'Education',
    completed: false,
  },
  {
    id: 16,
    task: 'Set up automatic bill payments',
    category: 'Finance',
    completed: false,
  },
  // Additional tasks for each category
  {
    id: 17,
    task: 'Buy new clothes',
    category: 'Shopping',
    completed: false,
  },
  {
    id: 18,
    task: 'Meditate for 10 minutes',
    category: 'Personal',
    completed: false,
  },
  {
    id: 19,
    task: 'Prepare agenda for team meeting',
    category: 'Work',
    completed: false,
  },
  {
    id: 20,
    task: 'Debug a software issue',
    category: 'Coding',
    completed: false,
  },
  {
    id: 21,
    task: 'Try a new recipe for lunch',
    category: 'Health',
    completed: false,
  },
  {
    id: 22,
    task: 'Go for a run',
    category: 'Fitness',
    completed: false,
  },
  {
    id: 23,
    task: 'Learn a new language online',
    category: 'Education',
    completed: false,
  },
  {
    id: 24,
    task: 'Read about history',
    category: 'Education',
    completed: false,
  },
  {
    id: 25,
    task: 'Review investment portfolio',
    category: 'Finance',
    completed: false,
  },
];


// Global Elements
let wrapper = document.querySelector('.wrapper');
let menuBtn = document.querySelector('.menu-btn');
let backBtn = document.querySelector('.back-btn');
let addTaskBtn = document.querySelector('.add-task-btn');
let taskFrom = document.querySelector('.add-task-form');
let backDropScreen = document.querySelector('.backDrop-Screen');
let categoriesContainer = document.querySelector('.categories');
let selectedCategory = categories[0];
let categoryTitle = document.querySelector('.category-title');
let categoryTask = document.querySelector('.category-tasks');
let categoryImg = document.querySelector('#category-img');
let totalTasks = document.querySelector('.totalTasks');
let tasksContainer = document.querySelector('.tasks');
let categorySelected = document.querySelector('#category-select');
let cancelButton = document.querySelector('.cancel-btn');
let addButton = document.querySelector('.add-btn');
let taskInput = document.querySelector('#task-input');


// function to toggle class show-category on wrapper screen
const toggleScreen = () => {
  wrapper.classList.toggle('show-category');
};

// function to toggle class active for add task form and backDrop Screen
const toggleAddTaskForm = () => {
  taskFrom.classList.toggle('active');
  backDropScreen.classList.toggle('active');
  addTaskBtn.classList.toggle('active');
};

// function to get total tasks of specific category
const getTotalTasks = () => {
  const categoryTotalTasks = tasks.filter(
      (task) =>
          task.category.toLowerCase() === selectedCategory.title.toLowerCase());
  categoryTask.innerHTML = `${categoryTotalTasks.length} Tasks`;
  totalTasks.innerHTML = tasks.length;
};

// Function to render categories
const renderCategories = () => {
  categoriesContainer.innerHTML = '';
  categories.forEach((category) => {
    const categoryTask = tasks.filter(
        (task) => task.category.toLowerCase() === category.title.toLowerCase());

    // // create div to render category
    const div = document.createElement('div');
    div.classList.add('category');
    div.addEventListener('click', () => {
      wrapper.classList.add('show-category');
      selectedCategory = category;
      console.log(selectedCategory);
      categoryTitle.innerHTML = category.title;
      categoryImg.src = category.img;
      getTotalTasks();
      // render tasks when category selected
      renderTasks();
    });
    div.innerHTML = `
                  <div class="left">
                <img src=${category.img}
                 alt="${category.title}"
                  />
                <div class="content">
                  <h1>${category.title}</h1>
                  <p>${categoryTask.length} Tasks</p>
                </div>
              </div>
              <div class="options">
                <div class="toggle-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                  </svg>
                </div>
              </div>
    `;
    categoriesContainer.appendChild(div);
  })  // end ForEach
};    // end function

// Function to render tasks
const renderTasks = () => {
  tasksContainer.innerHTML = '';
  const categoryTask = tasks.filter(
      (task) =>
          task.category.toLowerCase() === selectedCategory.title.toLowerCase());
  // if there is tasks in this category
  if (categoryTask.length === 0) {
    tasksContainer.innerHTML = `
    <p class="no-task"> No Tasks For This Category</p>
    `;
  } else {
    // there is tasks in category
    categoryTask.forEach((task) => {
      const div = document.createElement('div');
      div.classList.add('task-wrapper');
      const label = document.createElement('label');
      label.classList.add('task');
      label.setAttribute('for', task.id);
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      checkBox.id = task.id;
      checkBox.checked = task.completed;
      // add completion functionality on click on checkbox
      checkBox.addEventListener('change', () => {
        const index = tasks.findIndex((t) => t.id === task.id);

        // change to true to false or vice versa
        tasks[index].completed = !tasks[index].completed;
        saveToLocalStorage();
      });
      div.innerHTML = `
      <div class="delete">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
      `;
      label.innerHTML = `
       <span class="checkMark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <p>${task.task}</p>
      `;
      label.prepend(checkBox);
      div.prepend(label);
      tasksContainer.appendChild(div);

      // delete functionality
      const deletedBtn = div.querySelector('.delete');
      deletedBtn.addEventListener('click', () => {
        const index = tasks.findIndex((t) => t.id === task.id);
        tasks.splice(index, 1);
        saveToLocalStorage();
        renderTasks();
      });
    });
    renderCategories();
    getTotalTasks();
  }
};  // end function

// save tasks in local storage
const saveToLocalStorage = () => {
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
};

// get tasks from local storage
const getFromLocalStorage = () => {
  let localStorageTasks = JSON.parse(window.localStorage.getItem('tasks'));
  if (localStorageTasks) {
    tasks = localStorageTasks;
  }
};

// render all categories in select options

categories.forEach((category) => {
  const option = document.createElement('option');
  option.value = category.title.toLowerCase();
  option.textContent = category.title;
  categorySelected.appendChild(option);
});

// Add Functionality to adding task or cancel form
cancelButton.addEventListener('click', toggleAddTaskForm);
addButton.addEventListener('click', () => {
  const task = taskInput.value;
  const category = categorySelected.value;
  if (task === ' ') {
    alert('Please Enter Your Task !');
  } else {
    const newTask = {id: tasks.length + 1, task, category, completed: false};
    tasks.push(newTask);
    taskInput.value = '';
    saveToLocalStorage();
    toggleAddTaskForm();
    renderTasks();
  }
});

// Trigger Functions
getFromLocalStorage();
// add Click Listener on menu btn to to toggle wrapper screen
menuBtn.addEventListener('click', toggleScreen);

// add Click Listener on back btn to to toggle wrapper screen
backBtn.addEventListener('click', toggleScreen);
addTaskBtn.addEventListener('click', toggleAddTaskForm);
backDropScreen.addEventListener('click', toggleAddTaskForm);
renderCategories();
