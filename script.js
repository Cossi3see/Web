// Clock Function
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}

// Simple Calendar Function
function generateCalendar() {
    const now = new Date();
    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];

    const calendar = document.getElementById("calendar");
    calendar.innerHTML = `
        <h3>${monthNames[now.getMonth()]} ${now.getFullYear()}</h3>
        <p>Today is ${now.getDate()} ${monthNames[now.getMonth()]}, ${now.getFullYear()}</p>
    `;
}

// Initialize Clock and Calendar
setInterval(updateClock, 1000);
window.onload = generateCalendar;