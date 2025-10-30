const countdown = document.getElementById('countDown');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('mins');
const secsElement = document.getElementById('secs');

const NewYearDate = new Date().getFullYear() + 1;
const newYearTime = new Date (`january 1 ${NewYearDate} 00:00:00`);

function updatingCountDown() {
    const currentDate = new Date();
    const difference = newYearTime - currentDate;

    const days = Math.floor(difference / 1000 / 60 / 60 /24);
    const hours = Math.floor((difference / 1000 / 60 / 60) % 24);
    const mins = Math.floor((difference / 1000 / 60 ) % 60);
    const secs = Math.floor((difference / 1000) % 60);

    daysElement.innerHTML = `${days} <br> Days`;
    hoursElement.innerHTML = `${hours} <br> Hours`;
    minsElement.innerHTML = `${mins} <br> Minutes`;
    secsElement.innerHTML = `${secs} <br> Seconds`;

    // if its New Year
    if (difference <= 0) {
        clearInterval(updatingCountDown);
        countdown.innerHTML = "<h1>🎊Happy New Year!🎊</h1>";
    }

}
setInterval(updatingCountDown, 1000);
updatingCountDown();







