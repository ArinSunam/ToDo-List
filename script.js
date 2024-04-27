

const inputBox = document.getElementById('input-box')
console.log('input', inputBox)
const listContainer = document.getElementById('list-container')

function addTask() {
  if (inputBox.value === '') {
    alert('Write something')
  } else {
    let li = document.createElement("li")
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7'; //\u00d7 means cross icon
    li.appendChild(span)
  }
  inputBox.value = '';
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle("checked");
    saveData();
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false)

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();