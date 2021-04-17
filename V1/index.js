window.addEventListener("DOMContentLoaded", () => {
function get_date() {
  let dateHeader = document.getElementById("date");
  let today = new Date();
  let date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  dateHeader.innerText += ' ' + date;
}
get_date();

function add_list() {
  const taskList = [];
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    let task = document.getElementById("taskDesc").value;
    taskList.push(task);
    const taskDate = document.getElementById("taskDate").value;
    const li = document.createElement("li");
    const list = document.getElementById("TaskList");
    li.textContent = task + " " + taskDate;
    list.appendChild(li);
    form.reset();
    e.preventDefault();
  });
  let p = document.createElement("p")
  if (taskList.length === 0){
    p.innerText= `You don't have any tasks!`
    document.getElementById("lists").appendChild(p)
    }
    else {
      p.remove()
}

}
add_list();

function moveBetweenEl() {
  let f = document.getElementsByTagName("form");
  for (let i = 0; i < f.length; i++) {
    document.addEventListener("keypress", function (ev) {
      if (ev.key === 9) {
        f[i + 1].focus();
      }
    });
  }
}
moveBetweenEl();
});
