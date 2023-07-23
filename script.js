function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);

let alarmInterval;
let audio = new Audio('sound.wav');

function setAlarm() {
    const alarmTime = document.getElementById('alarm-time').value;
    const [alarmHours, alarmMinutes] = alarmTime.split(':');
    const now = new Date();
    const alarm = new Date(now.getFullYear(), now.getMonth(), now.getDate(), alarmHours, alarmMinutes);

    const difference = alarm - now;
    if (difference < 0) {
        alert('Please choose a time in the future.');
        return;
    }

    alarmInterval = setTimeout(() => {
        alert('Time is up! Wake up!');
        playAlarmSound();
    }, difference);
}

function clearAlarm() {
    clearTimeout(alarmInterval);
    document.getElementById('alarm-message').textContent = ''; // Clear the "Alarm Set" message
    audio.pause(); // Pause the audio in case it was playing
}
function playAlarmSound() {
}