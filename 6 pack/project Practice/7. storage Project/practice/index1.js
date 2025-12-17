const title = document.getElementById("setTask");
const desc = document.getElementById("setDescription");
const form = document.querySelector("form");
const taskbody = document.querySelector(".container");

// let tasks=[];

const tasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks")) 
    : [];


showAllTasks();
function creatingTask(key,index){
    const newDiv = document.createElement("div")
    newDiv.setAttribute("class", "task");

    const innerDiv = document.createElement("div");
    newDiv.append(innerDiv);

    const p = document.createElement("p");
    p.innerText = key.title;
    innerDiv.append(p);

    const span = document.createElement("span");
    span.innerText = key.desc;
    innerDiv.append(span);

    const btn = document.createElement("button");
    btn.setAttribute("class", "deleteButton");
    btn.innerText = "-";

    btn.addEventListener("click",() => {
        removeTasks();
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify("tasks"));
        showAllTasks();
    });

    newDiv.append(btn);
    taskbody.append(newDiv);
}


function removeTasks() {
    tasks.forEach(() => {
        const div = document.querySelector(".task");
        div.remove();
    })
}

function showAllTasks(){
    tasks.forEach((key,index) => {
        creatingTask(key,index);
    })
}

form.addEventListener("submit",(e) => {
    e.preventDefault();
    removeTasks();
    tasks.push({
        title: title.value,
        desc: desc.value
    });
    localStorage.setItem("tasks", JSON.stringify("tasks"));
    showAllTasks();
})