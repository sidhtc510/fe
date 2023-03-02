const form = document.querySelector(".add-task");
const tasks = document.querySelector(".tasks");

let tasksArray = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const { title, priority } = event.target;
  //   const title = event.target.title;
  //   const priority = event.target.priority;
  tasksArray.push({
    id: Date.now(),
    title: title.value,
    priority: priority.value,
  });

  const newElem = createTask(title.value, priority.value);
  tasks.append(newElem);

  rerender();
  event.target.reset();
});

function createTask(id, title, priority) {
  const container = document.createElement("div");
  const pTitle = document.createElement("p");
  //   const pPriority = document.createElement("p");

  pTitle.innerText = title;
  const removeBtn = document.createElement("button");
  removeBtn.innerText = "delete Task";

  container.append(pTitle, removeBtn);

  if (+priority === 1) {
    container.style.backgroundColor = "#e74c3c";
  } else {
    container.style.backgroundColor = "#ecf0f1";
  }

  removeBtn.addEventListener("click", function () {
    tasksArray = tasksArray.filter(function (item) {
      return item.id !== id;
    });
    rerender();
  });


  return container;
}

function rerender() {
  tasks.innerHTML = "";
  tasksArray.forEach(function ({ id, title, priority }) {
    const newElem = createTask(id, title, priority);
    tasks.append(newElem);
  });
}
