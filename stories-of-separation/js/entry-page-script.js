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
      <p class="photograph-title">Garry and me — 20.11.1978</p>
      <img class="photograph" src="images/entry-page/entry-photo-click.png" alt="photograph" style="max-width:100%;">
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















/* ===== All audio stuff ========
 *
 *
 *
 */

const update_progress = (e) => {
  let current_time = e.target.currentTime;
  let duration = e.target.duration;
  let progress_bar = document.querySelector("#audio-sidebar-progress");

  let current_time_element = document.querySelector(".time-pocket .current-time");
  let audio_duration_element = document.querySelector(".time-pocket .duration");

  let current_time_values = convert_time_display(current_time);
  let duration_time_values = convert_time_display(duration);

  current_time_element.textContent = `${current_time_values[0]}:${current_time_values[1]}`;
  audio_duration_element.textContent = `${duration_time_values[0]}:${duration_time_values[1]}`;

  //let position_percentage = Math.round(((current_time - duration) / duration) * 100 + 100);

  progress_bar.value = current_time;
  progress_bar.setAttribute("max", e.target.duration);
};

const separate_audio_control = (active_group, target_group) => {
  let music_player = document.querySelector("#music-player");
  let sidebar_play_button = document.querySelector("#sidebar-play-btn");
  let target_audio_source = target_group.querySelector("audio");

  music_player.setAttribute("data-source", target_audio_source.id);

  if (active_group) {
    active_group.removeEventListener("timeupdate", update_progress);
  }

  target_audio_source.addEventListener("timeupdate", update_progress);

  if (target_audio_source.paused) {
    sidebar_play_button.classList.remove("playing");
  } else {
    sidebar_play_button.classList.add("playing");
  }
};

// Check if another audio source is playing, if so stop it
const control_active_group = (target_group) => {
  let active_group = document.querySelector(".active-group");

  // Target Elements
  let target_audio_source = target_group.querySelector("audio");
  let target_audio_button = target_group.querySelector("button");

  // No audio playing
  if (!active_group) {
    target_audio_source.play();

    target_audio_button.classList.add("playing");
    target_group.classList.add("active-group");
  }

  // Playing a different audio element
  else if (active_group != target_group) {
    let active_audio_source = active_group.querySelector("audio");
    let active_audio_button = active_group.querySelector("button");

    active_audio_source.pause();
    active_audio_source.currentTime = 0;

    active_audio_button.classList.remove("playing");
    active_group.classList.remove("active-group");

    target_audio_source.play();
    target_audio_button.classList.add("playing");
    target_group.classList.add("active-group");
  }

  // Pausing the same audio element
  else {
    target_audio_source.pause();
    target_audio_button.classList.remove("playing");
    target_group.classList.remove("active-group");
  }

  // Update separate audio control
  separate_audio_control(active_group, target_group);
};

//  Add event listener to all audio play buttons
document.querySelectorAll(".audio-progress").forEach((audio_group) => {
  let audio_source = audio_group.querySelector("audio");
  let button = audio_group.querySelector("button");

  //Attach event listener to play button
  button.addEventListener("click", (e) => {
    control_active_group(e.currentTarget.parentElement);
  });
});

document.querySelector("#sidebar-play-btn").addEventListener("click", (e) => {
  let music_player = document.querySelector("#music-player");
  let sidebar_play_button = e.currentTarget;

  target_audio_id = music_player.getAttribute("data-source");

  if (target_audio_id) {
    let target_audio_source = document.querySelector(`#${target_audio_id}`);

    let target_audio_button = target_audio_source.previousElementSibling;

    if (target_audio_source.paused) {
      target_audio_source.play();
      target_audio_button.classList.add("playing");
      sidebar_play_button.classList.add("playing");
    } else {
      target_audio_button.classList.remove("playing");
      sidebar_play_button.classList.remove("playing");
      target_audio_source.pause();
    }
  }
});

document.querySelector("#audio-sidebar-progress").addEventListener("input", (e) => {
  let value = e.currentTarget.value;

  let music_player = document.querySelector("#music-player");
  target_audio_id = music_player.getAttribute("data-source");
  let target_audio_source = document.querySelector(`#${target_audio_id}`);

  target_audio_source.currentTime = value;
});

// Restart audio playback

document.querySelector("#restartBtn").addEventListener("click", () => {
  let target_track = document.querySelector("#music-player").getAttribute("data-source");

  let target_audio = document.querySelector(`#${target_track}`);

  if (target_audio) {
    // Restart the audio element from the beginning
    target_audio.currentTime = 0;
  }
});

document.querySelector("#volumeSlider").addEventListener("input", (e) => {
  let target_track = document.querySelector("#music-player").getAttribute("data-source");
  let target_audio = document.querySelector(`#${target_track}`);

  target_audio.volume = e.target.value;
});
