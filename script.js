
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const taskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    const addTask = (event) => {
        event.preventDefault();
        const taskText = taskInput.value.trim();

        if(!taskText) {
            const items = taskList.querySelectorAll("li");

            items.forEach(li => {
                const checkbox = li.querySelector("input[type=checkbox]");
                if(checkbox && checkbox.checked) {
                    taskList.removeChild(li);
                }
            });

            return;
        }
        
        const li = document.createElement('li');
        li.innerHTML = `
        <input type="checkbox" class="checkbox">
        <span>${taskText}</span>
        `

        taskList.appendChild(li);
        taskInput.value = '';
    };

    taskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') {
            addTask(e);
        }
    });
});
