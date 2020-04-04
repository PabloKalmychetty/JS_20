'use strict';
function countTimer(deadline) {
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds'),
        timeIntervar = setInterval(updateClock, 1000);

    function getTimeRemaining() {
        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60);
        return {
            timeRemaining,
            hours,
            minutes,
            seconds,
        };
    }

    function updateClock() {
        let timer = getTimeRemaining();

        timerHours.textContent = zero(timer.hours);
        timerMinutes.textContent = zero(timer.minutes);
        timerSeconds.textContent = zero(timer.seconds);

        if (timer.timeRemaining > 0) {
           
        } else if (timer.timeRemaining < 0) {
            clearInterval(timeIntervar);
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }

    }

    updateClock();
}

const zero = (a) => {
    if (a < 10) {
        a = '0' + a;
    }
    return a;
};

export default countTimer;