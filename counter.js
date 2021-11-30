const counter = () => {
    //set our date
    //get current date
    //calculating the gap in ms
    const futureDate = new Date('30 March, 2022 00:00:00');
    const nowDate = new Date().getTime();
    const difference = futureDate - nowDate;

    //setting time items
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculating time in DD:HH:MM:SS
    let myDay = (Math.floor(difference / day));
    let myHour = (Math.floor((difference % day) / hour));
    let myMinute = (Math.floor((difference % hour) / minute));
    let mySecond = (Math.floor((difference % minute) / second));    

    //add 0 when need
    myDay = (myDay >= 10) ? myDay : `0${myDay}`;
    myHour = (myHour >= 10) ? myHour : `0${myHour}`;    
    myMinute = (myMinute >= 10) ? myMinute : `0${myMinute}`;
    mySecond = (mySecond >= 10) ? mySecond : `0${mySecond}`;

    //changing text in HTML
    document.querySelector('.day-text').innerText = myDay;
    document.querySelector('.hour-text').innerText = myHour;
    document.querySelector('.minute-text').innerText = myMinute;
    document.querySelector('.second-text').innerText = mySecond;
}

//launch the upate time function every second
setInterval(counter, 1000);