const clock = document.querySelector(".clock");

let min = 0, sec = 0, hour = 0, intervalId;

startStopwatch = () => {
    intervalId = setInterval(() => {
        if (sec < 59) sec++;
        else if (min >= 59) { hr++; min = 0; }
        else { sec = 0; min++; }
        const seconds = (sec.toString()).padStart(2, "0");
        const minutes = (min.toString()).padStart(2, "0");
        const hours = (hour.toString()).padStart(2, "0");

        clock.innerText = `${hours}:${minutes}:${seconds}`;
    }, 1000)
}

stopStopwatch = () => {
    clearInterval(intervalId);
}

resetStopwatch = () => {
    stopStopwatch();
    clock.innerHTML = "00:00:00";

}