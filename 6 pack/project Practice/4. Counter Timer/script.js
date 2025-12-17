const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");

//converting ms,s,h,m
const second = 1000, minute = 60 * second, hour = 60 * minute, day = 24 * hour;

const timerCounter = () => {
   
    //generating current date by date Function in mm/dd/yyyy
    let dd = String(new Date().getDate()).padStart(2, "0"),//we put string for use of padstart() to add 0 in front
        mm = String(new Date().getMonth() + 1).padStart(2, "0"),//+1 bcoz month starts from 0 
        yyyy = new Date().getFullYear();
    
        
        
        //taking target date from user
        const inputday = prompt("Enter Day").padStart(2, "0");
        const inputmonth = prompt("Enter month").padStart(2, "0");
        
        let targetDate = `${inputmonth}/${inputday}/${yyyy}`;
       // console.log(targetDate);
        let now = `${mm}/${dd}/${yyyy}`;

    // checking if target date is gone or it will count for next year

    if (targetDate < now) {
        targetDate = `${inputmonth}/${inputday}/${yyyy + 1}`;
        //console.log(`${inputmonth}/${inputday}/${yyyy + 1}`);
    }
    const intervalId = setInterval(() => {
      //converting targetdate in milliseconds
        const timer = new Date(targetDate).getTime();
        //taking current date in ms
      const today = new Date().getTime();
      //finding diff in target date and today's date
        const diff = (timer - today);
        const leftDay = Math.floor(diff / day)
        const leftHour = Math.floor((diff % day) / hour)
        const leftMinute = Math.floor((diff % hour) / minute)
        const leftSecond = Math.floor((diff % minute) / second)

        //showing timer in DOM
        days.innerText = leftDay;
        hours.innerText = leftHour;
        minutes.innerText = leftMinute;
        seconds.innerText = leftSecond;

        //stop set Interval for today after reaching the day time
        if (diff < 0) {
            counterTimer.style.display = "none";
            heading.innerText = "Time's Up";
            clearInterval(intervalId);
        }

        // console.log(`${leftDay}:${leftHour}:${leftMinute}:${leftSecond}`);

    }, 1000);
}

timerCounter();