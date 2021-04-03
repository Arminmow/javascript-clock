setInterval(setClock , 1000)
setInterval(digitalShow, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock (){
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;

    setRotation (secondHand , secondRatio);
    setRotation(minuteHand , minuteRatio);
    setRotation(hourHand , hourRatio);

}

function setRotation (element , rotation){
    element.style.setProperty('--rotation' , rotation * 360);
}


// digital clock


function digitalShow() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("digitalClock").innerHTML = t;
}


setClock()
digitalShow()