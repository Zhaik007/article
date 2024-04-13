let container = document.querySelector("#cont1")
let mainVideo = container.querySelector("#vid1");
let videoTimeline = container.querySelector(".video-timeline")
let progressBar = container.querySelector(".progress-bar")
let volumeBtn = container.querySelector(".volume i")
let volumeSlider = container.querySelector(".left input")
let currentVidTime = container.querySelector(".current-time")
let videoDuration = container.querySelector(".video-duration")
let skipBackward = container.querySelector(".skip-backward i")
let skipForward = container.querySelector(".skip-forward i")
let playPauseBtn = container.querySelector(".play-pause i")
let speedBtn = container.querySelector(".playback-speed span")
let speedOptions = container.querySelector(".speed-options")
let pipBtn = container.querySelector(".pic-in-pic span")
let fullScreenBtn = container.querySelector(".fullscreen i");
let timer;


function checker(container){
    mainVideo = container.querySelector("video");
    videoTimeline = container.querySelector(".video-timeline")
    progressBar = container.querySelector(".progress-bar")
    volumeBtn = container.querySelector(".volume i")
    volumeSlider = container.querySelector(".left input")
    currentVidTime = container.querySelector(".current-time")
    videoDuration = container.querySelector(".video-duration")
    skipBackward = container.querySelector(".skip-backward i")
    skipForward = container.querySelector(".skip-forward i")
    playPauseBtn = container.querySelector(".play-pause i")
    speedBtn = container.querySelector(".playback-speed span")
    speedOptions = container.querySelector(".speed-options")
    pipBtn = container.querySelector(".pic-in-pic span")
    fullScreenBtn = container.querySelector(".fullscreen i");
    const hideControls = () => {
        if(mainVideo.paused) return;
        timer = setTimeout(() => {
            container.classList.remove("show-controls");
        }, 3000);
    }
    hideControls();
    
    container.addEventListener("mousemove", () => {
        container.classList.add("show-controls");
        clearTimeout(timer);
        hideControls();   
    });
    
    const formatTime = time => {
        let seconds = Math.floor(time % 60),
        minutes = Math.floor(time / 60) % 60,
        hours = Math.floor(time / 3600);
    
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        hours = hours < 10 ? `0${hours}` : hours;
    
        if(hours == 0) {
            return `${minutes}:${seconds}`
        }
        return `${hours}:${minutes}:${seconds}`;
    }
    
    videoTimeline.addEventListener("mousemove", e => {
        let timelineWidth = videoTimeline.clientWidth;
        let offsetX = e.offsetX;
        let percent = Math.floor((offsetX / timelineWidth) * mainVideo.duration);
        const progressTime = videoTimeline.querySelector("span");
        offsetX = offsetX < 20 ? 20 : (offsetX > timelineWidth - 20) ? timelineWidth - 20 : offsetX;
        progressTime.style.left = `${offsetX}px`;
        progressTime.innerText = formatTime(percent);
    });
    
    videoTimeline.addEventListener("click", e => {
        let timelineWidth = videoTimeline.clientWidth;
        mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
    });
    
    mainVideo.addEventListener("timeupdate", e => {
        let {currentTime, duration} = e.target;
        let percent = (currentTime / duration) * 100;
        progressBar.style.width = `${percent}%`;
        currentVidTime.innerText = formatTime(currentTime);
    });
    
    mainVideo.addEventListener("loadeddata", () => {
        videoDuration.innerText = formatTime(mainVideo.duration);
    });
    
    let draggableProgressBar = e => {
        let timelineWidth = videoTimeline.clientWidth;
        progressBar.style.width = `${e.offsetX}px`;
        mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
        currentVidTime.innerText = formatTime(mainVideo.currentTime);
    }
    
    volumeBtn.addEventListener("click", () => {
        if(!volumeBtn.classList.contains("fa-volume-high")) {
            mainVideo.volume = 0.5;
            volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
        } else {
            mainVideo.volume = 0.0;
            volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
        }
        volumeSlider.value = mainVideo.volume;
    });
    
    volumeSlider.addEventListener("input", e => {
        mainVideo.volume = e.target.value;
        if(e.target.value == 0) {
            return volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
        }
        volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
    });
    
    speedOptions.querySelectorAll("li").forEach(option => {
        option.addEventListener("click", () => {
            mainVideo.playbackRate = option.dataset.speed;
            speedOptions.querySelector(".active").classList.remove("active");
            option.classList.add("active");
        });
    });
    
    document.addEventListener("click", e => {
        if(e.target.tagName !== "SPAN" || e.target.className !== "material-symbols-rounded") {
            speedOptions.classList.remove("show");
        }
    });
    
    fullScreenBtn.addEventListener("click", () => {
        container.classList.toggle("fullscreen");
        if(document.fullscreenElement) {
            fullScreenBtn.classList.replace("fa-compress", "fa-expand");
            return document.exitFullscreen();
        }
        fullScreenBtn.classList.replace("fa-expand", "fa-compress");
        container.requestFullscreen();
    });
    speedBtn.addEventListener("click", ()=>speedOptions.classList.toggle("show"));
pipBtn.addEventListener("click", () => mainVideo.requestPictureInPicture());
skipBackward.addEventListener("click", () => mainVideo.currentTime -= 5);
skipForward.addEventListener("click", () => mainVideo.currentTime += 5);

videoTimeline.addEventListener("mousedown", () => videoTimeline.addEventListener("mousemove", draggableProgressBar));
document.addEventListener("mouseup", () => videoTimeline.removeEventListener("mousemove", draggableProgressBar));
mainVideo.paused ? mainVideo.play() : mainVideo.pause()
mainVideo.addEventListener("play", () => playPauseBtn.classList.replace("fa-play", "fa-pause"));
mainVideo.addEventListener("pause", () => playPauseBtn.classList.replace("fa-pause", "fa-play"));
}

let play1 = document.querySelector("#play1");
play1.addEventListener("click",
function(){
container = document.querySelector("#cont1");
checker(container);
})

let play2 = document.querySelector("#play2")
play2.addEventListener("click",
function (){
    container = document.querySelector("#cont2");
    checker(container);
})

let play3 = document.querySelector("#play3")
play3.addEventListener("click",()=>{
    container = document.querySelector("#cont3");
    checker(container)
})
let play4 = document.querySelector("#play4")
play4.addEventListener("click",()=>{
    mainVideo = document.querySelector("#vid4");
    container = document.querySelector("#cont4");
    checker(container)
})
let play5 = document.querySelector("#play5")
play5.addEventListener("click",()=>{
    container = document.querySelector("#cont5");
    checker(container)
})
let play6 = document.querySelector("#play6")
play6.addEventListener("click",()=>{
    container = document.querySelector("#cont6")
    checker(container)
})
let play7 = document.querySelector("#play7")
play7.addEventListener("click",()=>{
    container = document.querySelector("#cont7")
    checker(container)
})
let play8 = document.querySelector("#play8")
play8.addEventListener("click",()=>{
    container = document.querySelector("#cont8")
    checker(container)
})
let play9 = document.querySelector("#play9")
play9.addEventListener("click",()=>{
    container = document.querySelector("#cont9")
    checker(container)
})