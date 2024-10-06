const buttonEl = document.querySelector("#button");
const todoList = document.querySelector("#todoList");

function addTodo() {
  // Creating list Item
  const li = document.createElement("li");
  let inputValue = document.querySelector(".input").value;
  const text = document.createTextNode(inputValue);
  li.appendChild(text);

  // Cheack input validation
  if (inputValue === "") {
    alert("Please enter a valid value");
  } else {
    todoList.appendChild(li);
  }
  console.log(inputValue);
  document.querySelector(".input").value = "";
}

buttonEl.addEventListener("click", addTodo);
