let seconds = 11;
let el = document.getElementById("seconds-counter");
let dot = document.getElementById("dot");
dot.style.display = "none";

function decrementSeconds(){
    if(seconds <= 0){
       seconds = 0;
       dot.style.display = "block";
       el.style.display = "none";
    }else{
       seconds -= 1;
       el.innerText = seconds;
       dot.style.display = "none";
    }
}

let oneSecondAtATime = setInterval(decrementSeconds, 1000);