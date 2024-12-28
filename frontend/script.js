const taskForm = document.getElementById('taskForm'); 

const taskList = document.getElementById('taskList'); 

 

taskForm.addEventListener('submit', (e) => { 

    e.preventDefault(); 

    const task = document.getElementById('taskInput').value; 

    const li = document.createElement('li'); 

    li.textContent = task; 

    taskList.appendChild(li); 

    document.getElementById('taskInput').value = ''; 

}); 