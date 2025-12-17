const title = document.getElementById("setTask");
const desc = document.getElementById("setDescription");
const form = document.querySelector("form");
const taskbody = document.querySelector(".container");

//all task we write are stored in ARRAY OF Object so initial their will be empty[] array
// const tasks = [];

//if page get reload all tasks will get deleted so to overcome from it we store the data in local store

const tasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];// at time reload the task data must get rendered from local storage
    
showAllTasks();//if get reload it will show on display
function creatingTask (key,index) {
    const newDiv = document.createElement("div")
    newDiv.setAttribute("class", "task");

        const innerDiv = document.createElement("div")
        newDiv.append(innerDiv);

        const p = document.createElement("p")
        p.innerText = key.title;
        innerDiv.append(p);
        
        const span = document.createElement("span")
        span.innerText = key.desc;
        innerDiv.append(span);

        const btn = document.createElement("button")
        btn.setAttribute("class", "deleteButton");
        btn.innerText = "-";
    
    btn.addEventListener("click", () => {
        removeTasks();//past have to delete
        tasks.splice(index, 1);//splice help removing the elements from an array, index which n how many no. to delete
        localStorage.setItem("tasks", JSON.stringify("tasks"))//it is necessary  to set tasks to get delete from local storage
        showAllTasks();//rendered task by removing past task
    })


        newDiv.append(btn);
        taskbody.append(newDiv)
}

//this function remove the past created div
function removeTasks() {
    tasks.forEach(() => {
        const div = document.querySelector(".task");//select the div we create 
        div.remove();
    })
}

//when submitting form all tasks will loop in an array
function showAllTasks(){
    tasks.forEach((key,index)=> {
        creatingTask(key,index);
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault();//page no reload
    removeTasks();//before task also come in array that's why past task should be remove
    tasks.push({//iterate on task
        title: title.value,
        desc: desc.value,
    });
    localStorage.setItem("tasks", JSON.stringify("tasks"))//at the time of push we set tasks to local storage
    showAllTasks();//when form get submit it get call at last
});

