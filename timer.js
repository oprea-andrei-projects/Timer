const timerSection = document.querySelector("#timer");
let btn = document.querySelector("#start");
let cron = document.querySelector("#cronometru");
const pText = document.querySelector("#values");


function getTime() {

    let minutes = cron.value.split(':')[0];
    let seconds = cron.value.split(':')[1];

    let a = +minutes;
    let b = +seconds-1;

    if(b===0 && a>0){
  
        a--;
        b=59;


    }else if(a===0 && b<0){

        a=0;
        b=0;
        
    }

    return `${a}:${b}`;

}

function counter(){

    cron.value = getTime();
}



counter();


btn.addEventListener("click", (e)=>{


    setInterval(counter,1000);

});







