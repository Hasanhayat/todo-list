let tasks = [];

function addTask() {
  let inputField = document.getElementById("taskInput");
  let taskText = inputField.value;

  if (taskText !== "") {
    tasks.push(taskText);
    inputField.value = "";
    displayTasks();
  } else {
    alert("Please enter a task!");
  }
}

function displayTasks() {
  let ul = document.getElementById("taskList");
  ul.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    li.innerHTML =
      tasks[i] +
      ' <button class="delete-btn" onclick="deleteTask(' +
      i +
      ')">Delete</button>';
    ul.appendChild(li);
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}
