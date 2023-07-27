console.log("Welcome to spotify");
 
let songindex=0;
let audioElement = new Audio('songs/song.mp3');
let masterPlay= document.getElementById('masterPlay');
let myprogressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');

//audio play
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
    
})
//seek bar update
audioElement.addEventListener('timeupdate',()=>{
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressBar.value=progress;
})

myprogressBar.addEventListener('change', ()=>{
    audioElement.currentTime= myprogressBar.value * audioElement.duration/100;
})
    
    
