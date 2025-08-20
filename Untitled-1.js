// Smooth scroll
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Typing effect for name
const typingText = document.querySelector(".typing-text");
const text = "Pratik Gelal_";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    typingText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 150);
  }
}
window.onload = typeEffect;

// Hacker logo glow effect
const logo = document.querySelector(".logo");
setInterval(() => {
  logo.style.textShadow =
    Math.random() > 0.5
      ? "0 0 10px #00ff88, 0 0 20px #00aaff"
      : "0 0 5px #00aaff";
}, 400);

