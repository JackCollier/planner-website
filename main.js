//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//event listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//functions

function addTodo(e) {
  //prevent form submit
  e.preventDefault();
  //todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //check btn
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("completed-btn");
  todoDiv.appendChild(completedButton);
  //remove btn
  const removeButton = document.createElement("button");
  removeButton.innerHTML = '<i class="fas fa-trash"></i>';
  removeButton.classList.add("remove-btn");
  todoDiv.appendChild(removeButton);
  //append to list
  todoList.appendChild(todoDiv);
  //clear input value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //delete item
  if (item.classList[0] === "remove-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall-animation");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }

  if (item.classList[0] === "completed-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
