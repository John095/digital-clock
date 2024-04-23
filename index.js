function displayTime() {
    let dateTime = new Date()
    let hours = dateTime.getHours()
    let minutes = dateTime.getMinutes()
    let seconds = dateTime.getSeconds()


    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const currentDayOfTheWeek = daysOfWeek[dateTime.getDay()]

    if(hours >= 12){
        session.innerHTML = "PM"
    }else {
        session.innerHTML = "AM"
    }

    if(hours > 12){
        hours = hours - 12
    }

    if(hours < 10){
        hours = '0' + hours
    }

    if(minutes < 10){
        minutes = '0' + minutes
    }

    if(seconds < 10){
        seconds = '0' + seconds
    }

    document.getElementById('day').innerHTML = currentDayOfTheWeek
    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML = minutes
    document.getElementById('seconds').innerHTML = seconds

}

displayTime()

setInterval(displayTime, 1000);