// script.js
const clock = document.getElementById("clock");
const namazItems = document.querySelectorAll(".namaz_time");

function updateClockAndHighlight() {
  const now = new Date();

  // Current time ko 24-hour string mein convert (HH:MM)
  const currentTime = now.toTimeString().slice(0, 5); // example: "09:22"

  // Clock update
  clock.innerHTML = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // Pehle saare green dots remove kar do
  namazItems.forEach((item) => {
    const dot = item.querySelector(".green-dot");
    if (dot) dot.remove();
  });

  // Ab har namaz time check karo
  namazItems.forEach((item) => {
    const prayerTime = item.getAttribute("data-time"); // "05:00", "13:00" etc.

    // Agar current time exactly match kare ya 5 minute ke andar ho
    if (currentTime === prayerTime) {
      const greenDot = document.createElement("span");
      greenDot.classList.add("green-dot");
      item.prepend(greenDot); // namaz ke left side pe green dot daal do
    }
  });
}

// Har second update karo
setInterval(updateClockAndHighlight, 1000);

// Pehli baar turant call karo
updateClockAndHighlight();
