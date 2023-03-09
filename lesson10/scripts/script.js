const form = document.querySelector(".add-task");
const tasks = document.querySelector(".tasks");

let tasksArray = JSON.parse(localStorage.getItem("tasks")) ?? [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const { title, priority } = event.target;
  //   const title = event.target.title;
  //   const priority = event.target.priority;
  tasksArray.push({
    id: Date.now(),
    title: title.value,
    priority: +priority.value,
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

  container.addEventListener("dblclick", function () {
    const task = tasksArray.find(function (item) {
      return item.id === id;
    });
    task.priority = task.priority === 1 ? 2 : 1;
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

  localStorage.setItem("tasks", JSON.stringify(tasksArray));
  calculate();
}

function calculate() {
  const impSpan = document.querySelector(".imp");
  const unimpSpan = document.querySelector(".unimp");
  const amountSpan = document.querySelector(".amount");

  // const importantTasks = tasksArray.filter(function ({ priority }) {
  //   return priority === 1;
  // }).length;

  // const unimportantTasks = tasksArray.filter(function ({ priority }) {
  //   return priority === 2;
  // }).length;

  const { imp, unimp } = tasksArray.reduce(
    function (acc, { priority }) {
      // if (priority === 1) {
      //   acc.imp++;
      // } else {
      //   acc.unimp++;
      // }
      // return acc;

      acc.imp += priority === 1 ? 1 : 0;
      acc.unimp += priority === 2 ? 1 : 0;
      return acc;
    },
    { imp: 0, unimp: 0 }
  );

  impSpan.innerText = imp;
  unimpSpan.innerText = unimp;
  amountSpan.innerText = imp + unimp;
}

rerender();
