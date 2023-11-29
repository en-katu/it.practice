const kl =document.getElementById("text");
const countDown = document.getElementById("countDown");
const audio = document.getElementById("myAudio");
function push(){
    console.log("push");
    console.log(kl.value);
    countDown.textContent = kl.value;
    if(kl.value=="Enkatu"){
        console.log("Enkatu");
        audio.play();
    }
    else{
        console.log("404");
    }
    
    
}