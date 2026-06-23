document.addEventListener("DOMContentLoaded", () => {
  const writtenSection = document.querySelector(".content-port");

  // Buttons
  //const connectingBtn = document.querySelector(".connecting-effects");
  const viewPhotoBtn = document.querySelector(".chapter-selector .view-photo");
  const relatedBtn = document.querySelector(".related-entries");
  const chapterSplitterBtn = document.querySelector(".chapter-splitter");
  const chapterSplitterText = chapterSplitterBtn.querySelector("p"); // <p> inside chapter-splitter

  const allButtons = [viewPhotoBtn, relatedBtn, chapterSplitterBtn];
  const originalContent = writtenSection.innerHTML;

  let activeButton = null; // currently active button

  // --- Fade content ---
  function fadeSwap(element, newContent) {
    element.classList.remove("show"); // fade out
    setTimeout(() => {
      element.innerHTML = newContent;
      requestAnimationFrame(() => {
        element.classList.add("show"); // fade back in
      });
    }, 800);
  }

  // --- Button active/grey logic ---
  function setActiveButton(button) {
    allButtons.forEach(btn => {
      if (btn === chapterSplitterBtn) {
        chapterSplitterText.style.color = btn === button ? "white" : "grey";
      } else {
        btn.style.color = btn === button ? "white" : "grey";
      }
    });
    activeButton = button;
  }

  function resetButtons() {
    allButtons.forEach(btn => {
      if (btn === chapterSplitterBtn) {
        chapterSplitterText.style.color = "";
      } else {
        btn.style.color = "";
      }
    });
    activeButton = null;
  }

  // --- Button behaviours ---
 

  viewPhotoBtn.addEventListener("click", () => {
    fadeSwap(writtenSection, `
      <p class="photograph-title">Lewis and Me — 01.11.2005</p>
 <img class="photograph" src="images/Entry-imgs-full/full-img/eilish-full.png" alt="photograph" style="max-width:100%;">
    `);
    setActiveButton(viewPhotoBtn);
  });

  relatedBtn.addEventListener("click", () => {
    fadeSwap(writtenSection, ` <div class="change-all">
      <div class="individual-entry">
        <p class="text-entry">
        I live away from my dad, he lives a few hours away from me. After my parents split a few years ago, he realised that he wasn’t in the right place for him, so he’s gone off in his own journey to find his place in the world I suppose. At first I felt really upset and not sure what to do with my emotions...
      
        </p>


        <div class="triggers">

        </div>
        <div class="categories-entry">
          <p>PARENTAL SEPARATION</p>
          <p>WRITTEN ENTRY</p>
          <p>WORD COUNT — 389</p>
          <p>SEPARATION - 2 YEARS</p>
        </div>

        <div class="entry-info">
          <p class="entry-number-text">Entry 08</p>
          <p class="date-of-entry">08.08.25</p>
        </div>

        <div class="entry-buttons">

          <div class="audio-button-off">
            <p>PLAY AUDIO</p>
          </div>
                    <div class="open-entry-button button-stylings">
            <p>OPEN FULL ENTRY</p>
          </div>
        </div>
      </div>



          <div class="individual-entry" id="i-e-spacing">
        <p class="text-entry">
         I have moved away from my dad, because he’s unhealthy for me. Whenever I get close to him, every time I try, as much as I want to, he damages me. Unfortunately I have just come to the conclusion that having any type relationship with him at all is impossible, at least for me.
As much as I want to have a relationship with him, that...
        </p>


        <div class="triggers">
          <p class="triggers-off">ABUSE</p>
                    <p class="triggers-off">GRIEF</p>
        </div>
        <div class="categories-entry">
          <p>PARENTAL SEPARATION</p>
          <p>WRITTEN ENTRY</p>
          <p>WORD COUNT — 487</p>
          <p>SEPARATION - 5 YEARS</p>
        </div>

        <div class="entry-info">
          <p class="entry-number-text">Entry 09</p>
          <p class="date-of-entry">11.09.25</p>
        </div>

        <div class="entry-buttons">

          <div class="audio-button-off">
            <p>PLAY AUDIO</p>
          </div>
                    <div class="open-entry-button button-stylings">
            <p>OPEN FULL ENTRY</p>
          </div>
        </div>
      </div>
      </div>

      <div>
</div>
</div>
</div>
</div>`);
    setActiveButton(relatedBtn);
  });

  chapterSplitterBtn.addEventListener("click", () => {
    if (activeButton === chapterSplitterBtn) {
      fadeSwap(writtenSection, originalContent);
      resetButtons();
    } else {
      fadeSwap(writtenSection, originalContent);
      setActiveButton(chapterSplitterBtn);
    }
  });

  // --- Initial state ---
  writtenSection.classList.add("fade", "show");
  allButtons.forEach(btn => btn.classList.add("fade", "show"));
  chapterSplitterText.classList.add("fade", "show");

  // --- Hover effect for all buttons ---
  allButtons.forEach(btn => {
    const target = btn === chapterSplitterBtn ? chapterSplitterText : btn;
    btn.addEventListener("mouseenter", () => {
      target.style.color = "white";
    });
    btn.addEventListener("mouseleave", () => {
      // revert to active/grey
      if (btn === activeButton) {
        target.style.color = "white";
      } else {
        target.style.color = btn === chapterSplitterBtn ? "grey" : "grey";
      }
    });
  });

  // --- Custom cursor ---
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
    outerX += (mouseX - outerX) * 0.15;
    outerY += (mouseY - outerY) * 0.15;
    outer.style.left = outerX + 'px';
    outer.style.top = outerY + 'px';
    requestAnimationFrame(animate);
  }
  animate();

  // Hover effect for cursor
  const interactives = document.querySelectorAll('a, button, .chapter-selector');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => outer.classList.add('hovered'));
    el.addEventListener('mouseleave', () => outer.classList.remove('hovered'));
  });
});

