function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `${taskText} <button class="delete-btn" onclick="removeTask(this)">X</button>`;

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

function removeTask(btn) {
  btn.parentElement.remove();
}
