let countdown;
const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('startButton');

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function calculateTimeRemaining() {
    const now = new Date();
    const targetTime = new Date();
    targetTime.setHours(14, 30, 0, 0); // Set target time to 14:00:00

    const timeDiff = targetTime - now;
    return Math.floor(timeDiff / 1000); // Convert milliseconds to seconds
}

function runOnTimeReached() {
    window.location.href = 'finaltime.html';
}

function startCountdown() {
    if (countdown) clearInterval(countdown);
    const updateCountdown = () => {
        const timeRemaining = calculateTimeRemaining();

        console.log(timeRemaining)
        if (timeRemaining <= 0) {
            timeDisplay.textContent = '00:00';
            clearInterval(countdown);
            runOnTimeReached();
        } else {
            timeDisplay.textContent = formatTime(timeRemaining);
        }
    };

    updateCountdown(); // Update immediately
    countdown = setInterval(updateCountdown, 1000); // Update every second
}

function displaymap() {
    console.log("hi")
    window.location.href = "https://maps.app.goo.gl/EVHrXsA2btxURqjJ6"
}

startCountdown()
