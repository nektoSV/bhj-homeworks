const tasksList = document.getElementById("tasks__list");
const input = document.getElementById("task__input");
const addButton = document.getElementById("tasks__add");

function taskCreator() {
  tasksList.insertAdjacentHTML(
    "afterEnd",
    `<div class="task"><div class="task__title">${input.value}</div><a href="#" class="task__remove">&times;</a></div>`
  );

  input.value = "";

  const closeBtn = document.querySelector(".task__remove");

  closeBtn.addEventListener("click", (event) => {
    console.log(event);
    event.target.closest(".task").remove();
  });
}

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (input.value.trim() !== "") {
    taskCreator();
  }
});