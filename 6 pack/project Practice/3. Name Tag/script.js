const name = document.getElementById("name")
const nameBody = document.querySelector(".tags");

const addName = () => {
    if (name.value === "") return null;
    const newTag = document.createElement("div");
    newTag.setAttribute("class", "tag");
    newTag.innerHTML=`Hey I am ${name.value}`
    nameBody.append(newTag);
}