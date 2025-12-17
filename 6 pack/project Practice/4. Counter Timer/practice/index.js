
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");

const second = 1000, minute = 60 * second, hour = 60 * minute, day = 24 * hour;

const timerCounter = () => {
    
    const mm = String(new Date().getMonth()+1).padStart(2, "0"),
        dd = String(new Date().getDate()).padStart(2, "0");
    yyyy = new Date().getFullYear();

    let currentDate = `${mm}/${dd}/${yyyy}`;
    9
    const enterDay = prompt(`Enter Day`).padStart(2, "0");
    const enterMonth = prompt(`Enter Month`).padStart(2, "0");
    
    let targetDate =  `${enterMonth}/${enterDay}/${yyyy}`;
    if (targetDate < currentDate) {
        targetDate = `${enterMonth}/${enterDay}/${yyyy + 1}`;
    }

    const timerID = setInterval(() => {
        const timer = new Date(targetDate).getTime();
    const today = new Date().getTime();

    const diff = (timer - today);
    const leftDays=Math.floor((diff / day));
    const leftHours=Math.floor((diff % day)/hour);
    const leftMinutes=Math.floor((diff % hour)/minute);
    const leftSeconds = Math.floor((diff % minute) / second);
    
    days.innerText = leftDays;
    hours.innerText = leftHours;
    minutes.innerText = leftMinutes;
    seconds.innerText = leftSeconds;

    if (diff < 0) {
        heading.innerText = "Time's Up";
        counterTimer.innerText = "";
        clearInterval(timerID);
    }
    }, 1000); 
    



}
timerCounter();