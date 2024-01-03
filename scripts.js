const input = document.getElementById("input-task");
const listContainer = document.getElementById("list-container");

function addTask() {
  //Check if the space is empty
  if (input.value === "") {
    alert("Please enter a task");
  } else {
    //Create and append the element li
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  keepData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    //If the clicked element clicked is the task, toggle to checked
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      keepData();
    } else if (e.target.tagName === "SPAN") {
      //Remove the parent of the clicked element from the DOM
      e.target.parentElement.remove();
      keepData();
    }
  },
  false
);
function keepData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();
