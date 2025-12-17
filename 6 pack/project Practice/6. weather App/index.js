//initializing the constants
const tempField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const iconField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");

//functions and event listener to find Particular location
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");
form.addEventListener("submit", search);

//initialize default location 
let target = "delhi";

//function to fetch data from weather API
const fetchData = async (target) => {
    try {
    
        const url = `https://api.weatherapi.com/v1/current.json?key=8cca2ac610f54fe9a6c184354241103&q=${target}`;
        const response = await fetch(url);
        const data = await response.json();

        //deStructuring
        const {
            current: { temp_c, condition: { text, icon } },
            location: { localtime, name }
        } = data

        //calling updateDom function
        updateDom(temp_c, name, localtime, icon, text);
    }
    catch (error) {
    alert("Location Not Found")
    }
    
}

//function to update dom
function updateDom(temperature,name,time,icon,text) {
    //spliting time & date
    const exactTime = time.split(" ")[1];
    const exactDate = time.split(" ")[0];
    const exactDay = getDayFullName(new Date(exactDate).getDay());

    tempField.innerText = temperature + `°`;
    cityField.innerText = name;
    dateField.innerText = `${exactTime} - ${exactDay} - ${exactDate}`;
    iconField.src = icon;
    weatherField.innerText = text;

}
//calling fetchdata function
fetchData(target);

//function to search location
function search(e){
    e.preventDefault();
    target = searchField.value;
    fetchData(target);
}

//function to get a day full name
function getDayFullName(num) {
    switch (num) {
        case 0:
            return "Sunday";
        break;
        case 1:
            return "Monday";
        break;
        case 2:
            return "Tuesday";
        break;
        case 3:
            return "Wednesday";
        break;
        case 4:
            return "Thursday";
        break;
        case 5:
            return "Friday";
        break;
        case 6:
            return "Saturday";
        break;
    
        default:
            "Don't Know";
    }
}