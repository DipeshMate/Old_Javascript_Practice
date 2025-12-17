const btn = document.querySelector("stopwatch-btn")
let seconds = 0, minutes = 0, hours = 0, intervalId = 0;

startStopwatch = () => {
    intervalId =  setInterval(() => {
        let sec = (seconds.toString()).padStart(2, "0");
        let min = (minutes.toString()).padStart(2, "0");
        let hour = (hours.toString()).padStart(2, "0");
        if (seconds < 59) {
            seconds++;
        }
        else if (minutes >= 59) {
            hours++;
            minutes=0
        }
        else { minutes++; seconds=0; }
        
       document.querySelector(".clock").innerText = `${hour}:${min}:${sec}`;
    },1000)
    
}

stopStopwatch = () => {
    clearInterval(intervalId);
}
resetStopwatch = () => {
    clearInterval(intervalId);
    document.querySelector(".clock").innerHTML = "00:00:00";
}