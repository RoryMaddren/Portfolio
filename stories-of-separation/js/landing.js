
//OVERLAY TUTORIAL CLICKING
document.addEventListener("DOMContentLoaded", () => {
  const walkthroughBtn = document.getElementById("walkthroughButton");
  const tutShroud = document.querySelector(".tut-shroud");
  const explainer = document.getElementById("walkthrough-explainer");

  function lockScroll() {
    document.body.style.overflow = "hidden";
  }

  function unlockScroll() {
    document.body.style.overflow = "";
  }

  function attachCloseButtons() {
 const closeBtns = explainer.querySelectorAll(".close-walk, .cross-img-2");
    closeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        tutShroud.classList.remove("active");
        unlockScroll();
      });
    });
  }

  // Step 1: initial walkthrough
  const stepOne = `
      <div class="walkthough-lines">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      </div>

<a class="cross-img-2" id="close-overlay-btn" aria-label="Close overlay" href="#"><img src="./images/entry-page/x.png" alt="X-image" /></a>


    <p id="layout-of-sep-text">How the entry information is displayed</p>

    <img id="walkthrough-img" class="first-overlay" src="./images/list-view/tut-img-4.png" alt="walkthrough-explainer">
    <div class="button-bottom">
      <button class="close-walk">CLOSE OVERLAY</button>
      <button class="next-btn">NEXT</button>
    </div>
  `;

  // Step 2: sidebar info
  const stepTwo = `


      <div class="walkthough-lines-set-2">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      </div>

<a class="cross-img-2" id="close-overlay-btn" aria-label="Close overlay" href="#"><img src="./images/entry-page/x.png" alt="X-image" /></a>


    <p id="layout-of-sep-text">How to use your sidebars</p>

    <img class="second-overlay" id="walkthrough-img" src="./images/list-view/img-swap-out-3.png" alt="walkthrough-explainer">
    <div class="button-bottom">
      <button class="close-walk">CLOSE OVERLAY</button>
    </div>
  `;

  walkthroughBtn.addEventListener("click", (e) => {
    e.preventDefault();
    explainer.innerHTML = stepOne;
    tutShroud.classList.add("active");
    lockScroll();
    attachCloseButtons();

    const nextBtn = explainer.querySelector(".next-btn");
    nextBtn.addEventListener("click", () => {
      // fade out first screen
      explainer.classList.add("fade-out");
      setTimeout(() => {
        explainer.innerHTML = stepTwo;
        explainer.classList.remove("fade-out");
        explainer.classList.add("fade-in");
        attachCloseButtons();

        // remove fade-in class after animation
        setTimeout(() => {
          explainer.classList.remove("fade-in");
        }, 500);
      }, 500);
    });
  });
});



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






  // Share Button Overlay
  // Get elements
  const addEntryButton = document.querySelector('.nav-main-items a[href="#"]'); // ADD ENTRY +
  const shareOverlay = document.getElementById('share-overlay');
  const backBtn = document.getElementById('back-btn');
  const submitBtn = document.getElementById('submit-btn');
const crossBtn = document.querySelector('.cross-img'); // your X button

  // Open overlay when clicking "ADD ENTRY +"
  addEntryButton.addEventListener('click', (e) => {
    e.preventDefault();
    shareOverlay.classList.add('active');
  });

  // Helper function to close overlay
  function closeOverlay() {
    shareOverlay.classList.remove('active');
  }

  // Close overlay when clicking BACK
  backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeOverlay();
  });

  // Close overlay when clicking SUBMIT ENTRY
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeOverlay();
  });

  // Close overlay when clicking the cross button
  if (crossBtn) {
    crossBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeOverlay();
    });
  }