setInterval(setClock,1000)

const hourHand=document.querySelector('[data-hour-hand]')
const minuteHand=document.querySelector('[data-minute-hand]')
const secondHand=document.querySelector('[data-second-hand]')


function setClock(){
    const currentDate= new Date()
    const secondsRation=currentDate.getSeconds()/60
    const mintuesRation=(secondsRation+currentDate.getMinutes())/60
    const hoursRation=(mintuesRation+currentDate.getHours())/12
    setRotation(secondHand,secondsRation)
    setRotation(minuteHand,mintuesRation)
    setRotation(hourHand,hoursRation)

    
}

function setRotation(element,rotationRation){
    element.style.setProperty('--rotation',rotationRation*360)
}

