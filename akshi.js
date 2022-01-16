console.log('welcome to spotify');
// initialize the variables
let songIndex = 0;
let audioelement =  new Audio ('1.mp3.m4a');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
//let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songName: 'One Day', filePath: "song/1.mp3.m4a", coverPath: "covers/bg1.jpg.png"},
    {songName: 'One Day', filePath: "song/2.mp3.m4a", coverPath: "covers/bg2.jpg.png"},
    {songName: 'One Day', filePath: "song/3.mp3.m4a", coverPath: "covers/bg3.jpg.png"},
    {songName: 'One Day', filePath: "song/4.mp3.m4a", coverPath: "covers/bg4.jpg.png"},
    {songName: 'One Day', filePath: "song/5.mp3.m4a", coverPath: "covers/bg5.jpg.png"},
    {songName: 'One Day', filePath: "song/6.mp3.m4a", coverPath: "covers/bg6.jpg.png"},
    {songName: 'One Day', filePath: "song/7.mp3.m4a", coverPath: "covers/bg7.jpg.png"},
    {songName: 'One Day', filePath: "song/8.mp3.m4a", coverPath: "covers/bg8.jpg.png"},



]

//songitem.forEach((element, i)=>{
    //element.getElementsByTagName("img")([0].src = songs[i].coverPath;
        //element.getElementsByClassName("songName")([0].innerText = songs[i].songName;


//})
//let audioelement = new Audio ('1.mp3.m4a');
// handle play

masterPlay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else{
        audioelement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 1; 

    }
})
// listen to events
audioelement.addEventListener('timeupdate', ()=>{
 
 //update seekbar
progress = parseInt((audioelement.currentTime/audioelement.duration)*100);

myprogressbar.value = progress;


})
myprogressbar.addEventListener('change', ()=>{
    audioelement.currentTime = myprogressbar.value*audioelement.duration/100;
})

const makeAllplays = ()=>{
    
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.target.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })



}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListner('click',(e)=>  {
        console.log(e.target);
        makeAllplays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');

    })
})