
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const filterBtns = document.querySelectorAll('.filter');


let tasks = [];
let currentFilter = 'all';


function render() {
    taskList.innerHTML = ''; 

    const tasksToRender = tasks.filter(task => {
        if (currentFilter === 'active') return !task.completed;
        if (currentFilter === 'completed') return task.completed;
        return true; 
    });

    tasksToRender.forEach(task => {
        const li = document.createElement('li');
        if (task.completed) {
            li.classList.add('completed');
        }
        
        const completeBtn = document.createElement('button');
        completeBtn.textContent = task.completed ? 'Un-complete' : 'Complete';
        completeBtn.addEventListener('click', () => {
            task.completed = !task.completed;
            render();
        });

        const span = document.createElement('span');
        span.textContent = task.text;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            tasks = tasks.filter(t => t.id !== task.id);
            render();
        });
        
        li.appendChild(completeBtn);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}


function addTask() {
    const text = taskInput.value.trim();
    if (text) {
        tasks.push({ id: Date.now(), text: text, completed: false });
        taskInput.value = '';
        render();
    }
}

addBtn.addEventListener('click', addTask);


filterBtns.forEach(button => {
    button.addEventListener('click', () => {
        currentFilter = button.dataset.filter;
        filterBtns.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        render();
    });
});

render();