let countdown;
const timeDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");
 

function timer(seconds) {

    clearInterval(countdown); // clear any existing timers

    const now = Date.now();
    const then = now + seconds * 1000;

    desplayTimeLeft(seconds)
    displayEndTime(then);
    
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);   
        if(secondsLeft < 0) { // check if we should stop it
            clearInterval(countdown);
            return;
        }

        desplayTimeLeft(secondsLeft); //display it

    }, 1000);
}

function desplayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${
        remainderSeconds}`;
        document.title = display;
    
    timeDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${hour}:${minutes}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener("click", startTimer));

document.customForm.addEventListener("submit", function(e) {
    e.preventDefault(); // stop refreshing the page
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
})

