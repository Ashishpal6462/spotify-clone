console.log(" hii Ashish");

// intialize the variables:
let songIndex = 0;

let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay")
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem"));


let songs = [
    { songName: "Chlo thik hai", filePath: "songs/2.mp3", coverPath:  "images/cover1.png"},
    { songName: "Bhola Hai Bhandari", filePath: "songs/3.mp3", coverPath: "images/2.jfif" },
    { songName: "Do You know", filePath: "songs/4.mp3", coverPath: "images/4.jfif" },
    { songName: "gulabi ankhen", filePath: "songs/5.mp3", coverPath: "images/5.jfif" },
    { songName: "Mere Mehboob", filePath: "songs/6.mp3", coverPath: "images/6.jfif" },
    { songName: "ye Jo Halka Halka", filePath: "songs/7.mp3", coverPath: "images/7.jfif" },
    { songName: "Chlo thik hai", filePath: "songs/2.mp3", coverPath: "images/cover1.png" },
    { songName: "Gulabi Ankhen", filePath: "songs/5.mp3", coverPath: "images/5.jfif" },
]

songItem.forEach((Element, i) => {
    // console.log(Element,i)
    Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
// audioElement.play();

// handle play/ pausee click

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', () => {

    //console.log("timeupdate") update seekbar:-
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element) => {
        Element.classList.remove("fa-pause-circle");
        Element.classList.add("fa-play-circle");

    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((Element)=> {
    Element.addEventListener("click", (e)=>{
        console.log(e.target);
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
       

    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})