
let seconds = 0
let minutes = 0
let hours = 0
function start() {
    myInterval = setInterval(() => { timer() }, 1000);
}

function stop() {
    clearInterval(myInterval)
} 



function timer() {
    seconds++
    
    if (seconds == 60){
        seconds = 0
        minutes++
        
    }
    if (minutes == 60){
        minutes = 0
        hours++
        
    }
    setInnerHtml()
}


function formatTime(value){
    return value < 10 ? `0${value}` : value

}


function setInnerHtml(){
    document.getElementById('seconds').innerHTML = formatTime(seconds)
    document.getElementById('minutes').innerHTML = formatTime(minutes)
    document.getElementById('hour').innerHTML = formatTime(hours)
}

function clearr() {
    seconds = 0
    minutes = 0
    hours = 0
    setInnerHtml()
}