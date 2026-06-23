  // mouse changing
  const outer = document.querySelector('.cursor-outer');
    const inner = document.querySelector('.cursor-inner');
    let mouseX = 0, mouseY = 0;
    let outerX = 0, outerY = 0;

    // Track mouse
    window.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      inner.style.left = mouseX + 'px';
      inner.style.top = mouseY + 'px';
    });

    // Smooth trailing effect for outer ball
    function animate() {
      outerX += (mouseX - outerX) * 0.15; // easing factor (lower = smoother/slower)
      outerY += (mouseY - outerY) * 0.15;

      outer.style.left = outerX + 'px';
      outer.style.top = outerY + 'px';

      requestAnimationFrame(animate);
    }
    animate();

    // Hover effect
    const interactives = document.querySelectorAll('a, button');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => outer.classList.add('hovered'));
      el.addEventListener('mouseleave', () => outer.classList.remove('hovered'));
    });





  
//SOUND BUTTON ON NAV HIT
document.addEventListener("DOMContentLoaded", () => {
  const soundButton = document.getElementById("soundButton");
  const audio = document.getElementById("audio-page-sound");

  audio.volume = 0;
  let isPlaying = false;
  let fadeInterval;

  function fadeIn(audio) {
    clearInterval(fadeInterval);
    audio.play();
    fadeInterval = setInterval(() => {
      if (audio.volume < 0.95) {
        audio.volume = Math.min(1, audio.volume + 0.05);
      } else {
        audio.volume = 1;
        clearInterval(fadeInterval);
      }
    }, 100);
  }

  function fadeOut(audio) {
    clearInterval(fadeInterval);
    fadeInterval = setInterval(() => {
      if (audio.volume > 0.05) {
        audio.volume = Math.max(0, audio.volume - 0.05);
      } else {
        audio.volume = 0;
        audio.pause();
        clearInterval(fadeInterval);
      }
    }, 100);
  }

  function animateTextChange(newText) {
    soundButton.classList.add("blur");
    setTimeout(() => {
      soundButton.textContent = newText;
      soundButton.classList.remove("blur");
    }, 300); // matches transition time
  }

  soundButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (!isPlaying) {
      fadeIn(audio);
      animateTextChange("SOUND OFF");
      isPlaying = true;
    } else {
      fadeOut(audio);
      animateTextChange("SOUND ON");
      isPlaying = false;
    }
  });
});
