let currentSlide = 1;
const totalSlides = 3;

function showSlide(n) {
  for (let i = 1; i <= totalSlides; i++) {
    const slide = document.getElementById('slide' + i);
    if (i === n) {
      // Reset background size to restart the zoom animation
      slide.style.backgroundSize = '100%';
      // Force reflow
      void slide.offsetWidth;
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  }
}

function nextSlide() {
  currentSlide++;
  if (currentSlide > totalSlides) {
    currentSlide = 1;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 1) {
    currentSlide = totalSlides;
  }
  showSlide(currentSlide);
}

// Auto-advance every 5 seconds
setInterval(nextSlide, 5000);
