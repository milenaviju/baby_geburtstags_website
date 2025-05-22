const slideshow = document.getElementById("slideshow");

for (let i = 1; i <= 40; i++) {
  const img = document.createElement("img");
  img.src = `images/bild_${i}.jpg`;
  img.className = "mySlides";
  slideshow.appendChild(img);
}

let slideIndex = 0;
let timer;

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

// Automatischer Slide-Wechsel
function autoSlides() {
  slideIndex++;
  showSlides(slideIndex);
  timer = setTimeout(autoSlides, 3000);
}

// Manuelle Steuerung + Timer resetten
function plusSlides(n) {
  clearTimeout(timer);  // Timer stoppen
  slideIndex += n;
  showSlides(slideIndex);
  timer = setTimeout(autoSlides, 3000);  // Timer neu starten
}

// Start
showSlides(slideIndex);
timer = setTimeout(autoSlides, 3000);
// Countdown bis 25.06. um 17:00 Uhr (lokale Zeit)
function startCountdown() {
    const countdownTarget = new Date("2025-06-25T17:00:00");
    const timerElement = document.getElementById("timer");
  
    function updateCountdown() {
      const now = new Date();
      const diff = countdownTarget - now;
  
      if (diff <= 0) {
        timerElement.innerText = "Endlich! 💞";
        clearInterval(interval);
        return;
      }
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      
      timerElement.innerText = `${days} Tage und ${hours} Stunden`;
    }
  
    updateCountdown();
    const interval = setInterval(updateCountdown, 60 * 1000); // minütlich aktualisieren
  }
  
  startCountdown();

  window.onload = () => {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 }
    });
  };
  