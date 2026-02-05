document.addEventListener("DOMContentLoaded",() => {
    const todoInput = document.getElementById("todo-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        renderTask(task);
    })
    addTaskBtn.addEventListener("click", () => {
      const taskText = todoInput.value.trim();
      if (taskText === "") return;
      const newTask = {
        id: Date.now(),
        isCompleted: false,
        text: taskText,
      };
      tasks.push(newTask);
      saveTasks();
      renderTask(newTask);
      todoInput.value = ""; //clear input
    });

    function renderTask(task) {
      /* Each time renderTask(task) is called:
          A new function scope is created
          A new task variable is captured
          A new li element is created
          A new event handler is created and attached to that li
          This is the core mechanism.

        JavaScript remembers:
          Which task object was passed
          Which li element was created
          Which function references them
        This is called a closure. 
      */
      const li = document.createElement("li");
      li.setAttribute("data-id", task.id); //links DOM element to task object
      if (task.isCompleted) li.classList.add("completed");
      li.innerHTML = `
        <span>${task.text}</span>
        <button>delete</button>
      `;

      li.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") return;
        task.isCompleted = !task.isCompleted;
        li.classList.toggle("completed");
        saveTasks();
      });

      li.querySelector("button").addEventListener("click", (e) => {
        e.stopPropagation(); //Prevent Event Bubbling : Clicking delete would also toggle completion
        tasks = tasks.filter((t) => t.id !== task.id);
        li.remove();
        saveTasks();
      });

      todoList.appendChild(li);
    }

    function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
})