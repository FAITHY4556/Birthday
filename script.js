const messageEl = document.getElementById("message");
const notifEl = document.getElementById("notification");
const openBtn = document.getElementById("openBtn");

const message = "🎉 Happy Birthday, Baby! 🎉";


let i = 0;
let tapCount = 0;

// Function to type the message
function typeWriter() {
  if (i < message.length) {
    messageEl.textContent += message.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  } else {
    // Show notif after typing ends
    setTimeout(() => {
      notifEl.classList.remove("hidden");
    }, 1000);
  }
}

// Wait for the window to load, then start typing the message
window.onload = () => {
  typeWriter();
};

// Event listener for clicks on the message container
messageEl.addEventListener("click", () => {
  tapCount++;

  if (tapCount === 1) {
    // Show the song lyrics after one tap
    messageEl.innerHTML = songLyrics;
  } else if (tapCount === 2) {
    // Show the notification after the second tap
    setTimeout(() => {
      notifEl.classList.remove("hidden");
    }, 500); // Delay the notification a bit
  }
});

// Event listener for when the user clicks the "Open" button
openBtn.addEventListener("click", () => {
  window.location.href = "envelope.html"; // Redirect to another page
});