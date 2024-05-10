 let tasks = [];

    function renderTasks() {
        const taskList = document.getElementById("taskList");
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task;
            const deleteButton = document.createElement("span");
            deleteButton.classList.add("delete");
            deleteButton.innerHTML = "&times;";
            deleteButton.onclick = () => deleteTask(index);
            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    }

    function addTask() {
        const taskInput = document.getElementById("taskInput");
        const task = taskInput.value.trim();
        if (task !== "") {
            tasks.push(task);
            renderTasks();
            taskInput.value = "";
        }
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        renderTasks();
    }
