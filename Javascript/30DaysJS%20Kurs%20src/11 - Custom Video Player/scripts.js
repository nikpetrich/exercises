const player = document.querySelector(".player");// 1 grab the elements
const video = player.querySelector(".viewer");// 1 grab the elements
const progress = player.querySelector(".progress");// 1 grab the elements
const progressBar = player.querySelector(".progress__filled");// 1 grab the elements
const toggle =  player.querySelector(".toggle");// 1 grab the elements
const skipButtons = player.querySelectorAll("[data-skip]");// 1 grab the elements
const ranges = player.querySelectorAll(".player__slider");// 1 grab the elements


function togglePlay() {//2 difine fn for playing and pausing the video
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() {//7 fn to change the button
    const icon = this.paused ? '►' : '❚ ❚';//8 if its paused that add play, if not than add pause
    toggle.textContent = icon;//9 apply it inside that button
}

function skip() {//11 create an fn that does the skip stuff
    video.currentTime += parseFloat(this.dataset.skip);//12 add to the actual time the value of the dataset
}

function handleRangeUpdate() {//13 fn 
    video[this.name] = this.value;//14 video get the range value
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

video.addEventListener("click", togglePlay);//3 listen for click-event when someone chicks on the video window
video.addEventListener("play", updateButton);//5 listen for changing the button
video.addEventListener("pause", updateButton);//6 listen for changing the button
toggle.addEventListener("click", togglePlay);//4 listener on that button
skipButtons.forEach(button => button.addEventListener("click", skip));//10 listen on skipbuttons
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));//12 listen on change at range input
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
video.addEventListener('timeupdate', handleProgress);

let mousedown = false;

progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", ()=> mousedown = false);


