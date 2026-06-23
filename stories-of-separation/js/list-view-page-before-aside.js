const filterBar = document.getElementById("filterBar");
const openFiltersBtn = document.querySelector(".filters-text-click-close");
const closeFiltersBtn = document.getElementById("close-filters-slider");

// Open sidebar
openFiltersBtn.addEventListener("click", () => {
  filterBar.classList.add("active");
});

// Close sidebar
closeFiltersBtn.addEventListener("click", () => {
  filterBar.classList.remove("active");
});

/*
  //carresel 
      document.addEventListener("onload", () => {
        document.querySelector("#entry-carrasel").scrollTo({ top: 0, behavior: "smooth" });
      });

      document.querySelector("#cycle-carrasel").addEventListener("click", (e) => {
        let current_slide = document.querySelector(".active-slide");

        let target_slide = document.querySelector(".active-slide + .entry-container");

        let slide = target_slide != null ? target_slide : document.querySelector("#first-slide");

        current_slide.classList.remove("active-slide");
        slide.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        slide.classList.add("active-slide");

      });
*/

//filtering bars - functioning
const sepYearMin = document.getElementById("sepYearMin");
const sepYearMax = document.getElementById("sepYearMax");
const sepYearMinVal = document.getElementById("sepYearMinVal");
const sepYearMaxVal = document.getElementById("sepYearMaxVal");

const splitMin = document.getElementById("splitMin");
const splitMax = document.getElementById("splitMax");
const splitMinVal = document.getElementById("splitMinVal");
const splitMaxVal = document.getElementById("splitMaxVal");

const audioAdjustMin = document.querySelector("#audioAdjustMin");
const audioAdjustMax = document.querySelector("#audioAdjustMax");
const audioAdjustMinVal = document.querySelector("#audioAdjustMinVal");
const audioAdjustMaxVal = document.querySelector("#audioAdjustMaxVal");

const wordCountMin = document.querySelector("#wordAdjustMin");
const wordCountMax = document.querySelector("#wordAdjustMax");
const wordCountMinVal = document.querySelector("#wordAdjustMinVal");
const wordCountMaxVal = document.querySelector("#wordAdjustMaxVal");

sepYearMin.addEventListener("input", () => {
  if (parseInt(sepYearMin.value) > parseInt(sepYearMax.value)) {
    sepYearMin.value = sepYearMax.value;
  }
  sepYearMinVal.textContent = sepYearMin.value;
});

sepYearMax.addEventListener("input", () => {
  if (parseInt(sepYearMax.value) < parseInt(sepYearMin.value)) {
    sepYearMax.value = sepYearMin.value;
  }
  sepYearMaxVal.textContent = sepYearMax.value;
});

splitMin.addEventListener("input", () => {
  if (parseInt(splitMin.value) > parseInt(splitMax.value)) {
    splitMin.value = splitMax.value;
  }
  splitMinVal.textContent = splitMin.value;
});

splitMax.addEventListener("input", () => {
  if (parseInt(splitMax.value) < parseInt(splitMin.value)) {
    splitMax.value = splitMin.value;
  }
  splitMaxVal.textContent = splitMax.value;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  sepYearMin.value = 1945;
  sepYearMax.value = 1965;
  sepYearMinVal.textContent = 1945;
  sepYearMaxVal.textContent = 1965;

  splitMin.value = 3;
  splitMax.value = 8;
  splitMinVal.textContent = 3;
  splitMaxVal.textContent = 8;
});

//filtering tags - trigger etc
function setupTagToggle(containerId) {
  const container = document.getElementById(containerId);
  const tags = container.querySelectorAll(".filter-tag");

  tags.forEach((tag) => {
    tag.addEventListener("click", () => {
      // Toggle "All" behavior
      if (tag.textContent === "All") {
        tags.forEach((t) => t.classList.remove("active"));
        tag.classList.add("active");
      } else {
        tag.classList.toggle("active");
        // If any non-All tag is active, remove All
        if (Array.from(tags).some((t) => t !== tag && t.classList.contains("active"))) {
          tags[0].classList.remove("active"); // remove All
        }
        // If no non-All tags active, set All active
        if (!Array.from(tags).some((t) => t !== tags[0] && t.classList.contains("active"))) {
          tags[0].classList.add("active"); // add All
        }
      }
    });
  });
}

document.getElementById("resetBtn-3").addEventListener("click", () => {
  audioAdjustMin.value = 1945;
  audioAdjustMax.value = 1965;
  audioAdjustMinVal.textContent = 1945;
  audioAdjustMaxVal.textContent = 1965;

  wordCountMin.value = 3;
  wordCountMax.value = 8;
  wordCountMinVal.textContent = 3;
  wordCountMaxVal.textContent = 8;
});

document.addEventListener("DOMContentLoaded", () => {
  setupTagToggle("separation-tags");
  setupTagToggle("trigger-tags");
});

/*
//Disable scroll
const filterToggle = document.querySelector('.filters-text'); // button/text that opens it
filterToggle.addEventListener('click', () => {
  filterBar.classList.toggle('active');
  document.body.classList.toggle('filter-active'); // freeze/unfreeze background
});

*/

/* Silly code
//Audio Player
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playPauseBtn = document.querySelector('.play-pause-btn');
    const progressBar = document.querySelector('.progress-bar');
    const currentTimeElem = document.querySelector('.current-time');
    const durationElem = document.querySelector('.duration');
    const restartBtn = document.getElementById('restartBtn');
    
    function updateProgress() {
        const currentTime = audio.currentTime;
        const duration = audio.duration || 0;
        const progressPercent = (currentTime / duration) * 100;
        progressBar.value = progressPercent;
        currentTimeElem.textContent = formatTime(currentTime);
        durationElem.textContent = formatTime(duration);
    }
  
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
  
    function togglePlayPause() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = "PAUSE AUDIO";  // change text
            playPauseBtn.classList.add('paused');
        } else {
            audio.pause();
            playPauseBtn.textContent = "PLAY AUDIO";   // change text
            playPauseBtn.classList.remove('paused');
        }
    }

    // Restart playback
    restartBtn.addEventListener('click', function() {
        audio.currentTime = 0;
        audio.play();
        playPauseBtn.textContent = "PAUSE AUDIO"; // show pause since it's playing
        playPauseBtn.classList.add('paused');
    });
  
    playPauseBtn.addEventListener('click', togglePlayPause);
    progressBar.addEventListener('input', function() {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    });
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', function() {
        durationElem.textContent = formatTime(audio.duration);
    });

    // Reset play button text when audio finishes
    audio.addEventListener('ended', function() {
        playPauseBtn.textContent = "PLAY AUDIO";
        playPauseBtn.classList.remove('paused');
    });
});
*/

// mouse changing
const outer = document.querySelector(".cursor-outer");
const inner = document.querySelector(".cursor-inner");
let mouseX = 0,
  mouseY = 0;
let outerX = 0,
  outerY = 0;

// Track mouse
window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  inner.style.left = mouseX + "px";
  inner.style.top = mouseY + "px";
});

// Smooth trailing effect for outer ball
function animate() {
  outerX += (mouseX - outerX) * 0.15; // easing factor (lower = smoother/slower)
  outerY += (mouseY - outerY) * 0.15;

  outer.style.left = outerX + "px";
  outer.style.top = outerY + "px";

  requestAnimationFrame(animate);
}
animate();

// Hover effect
const interactives = document.querySelectorAll(
  'a, button, .filters-overlay-panel div, nav, .audio-text, #filteringButtonClicking, #close-audio-slider, .progress-container, .open-entry-button, .audio-button-on, #close-filters-slider, #shroud, input[type="range"]::-moz-range-thumb'
);
interactives.forEach((el) => {
  el.addEventListener("mouseenter", () => outer.classList.add("hovered"));
  el.addEventListener("mouseleave", () => outer.classList.remove("hovered"));
});

/* ====== CHANGE AREA===== */

const convert_time_display = (ms_value) => {
  let ms = ms_value * 1000;
  let dateObject = new Date(ms);

  let minutes =
    dateObject.getMinutes() < 10 ? "0" + dateObject.getMinutes() : dateObject.getMinutes();

  let seconds =
    dateObject.getSeconds() < 10 ? "0" + dateObject.getSeconds() : dateObject.getSeconds();

  return [minutes, seconds];
};

audioAdjustMin.addEventListener("input", () => {
  if (parseInt(audioAdjustMin.value) > parseInt(audioAdjustMax.value)) {
    audioAdjustMin.value = audioAdjustMax.value;
  }

  let time_values = convert_time_display(audioAdjustMin.value);

  audioAdjustMinVal.textContent = `${time_values[0]}:${time_values[1]}`;
});

audioAdjustMax.addEventListener("input", () => {
  if (parseInt(audioAdjustMax.value) < parseInt(audioAdjustMin.value)) {
    audioAdjustMax.value = audioAdjustMin.value;
  }

  let time_values = convert_time_display(audioAdjustMax.value);

  audioAdjustMaxVal.textContent = `${time_values[0]}:${time_values[1]}`;
});

wordCountMin.addEventListener("input", () => {
  if (parseInt(wordCountMin.value) > parseInt(wordCountMax.value)) {
    wordCountMin.value = wordCountMax.value;
  }
  wordCountMinVal.textContent = wordCountMin.value;
});

wordCountMax.addEventListener("input", () => {
  if (parseInt(wordCountMax.value) < parseInt(wordCountMin.value)) {
    wordCountMax.value = wordCountMin.value;
  }
  wordCountMaxVal.textContent = wordCountMax.value;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  sepYearMin.value = 1945;
  sepYearMax.value = 1965;
  sepYearMinVal.textContent = 1945;
  sepYearMaxVal.textContent = 1965;

  splitMin.value = 3;
  splitMax.value = 8;
  splitMinVal.textContent = 3;
  splitMaxVal.textContent = 8;
});

// Entry general section
document.querySelector("#resetBtn").addEventListener("click", () => {
  document.querySelectorAll("#entry-general .active-tab input").forEach((input_element) => {
    let default_value = input_element.getAttribute("placeholder");

    input_element.value = default_value;
  });
});

// Separation Info
document.querySelector("#resetBtn-2").addEventListener("click", () => {
  document.querySelectorAll("#separation-info .active-tab .filter-tag").forEach((filter) => {
    filter.classList.remove("active");
  });
});

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

//smooth scroll

// Prevent Lenis from hijacking scroll inside these elements
document.querySelectorAll(".audio-sidebar, .fullbar-all-elements").forEach((el) => {
  el.addEventListener("wheel", (e) => e.stopPropagation());
  el.addEventListener("touchmove", (e) => e.stopPropagation());
});

const lenis = new Lenis({
  duration: 1.8, // scroll speed — higher = slower glide //Was 0.2 before slowing
  easing: (t) => Math.min(1, 1.001 - Math.pow(1.8, -10 * t)), // smooth ease-out curve
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  smoothTouch: false, // optional — enable if you want smooth on mobile too
  touchMultiplier: 0.2, // controls scroll intensity
});

// RAF loop for consistent animation sync
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);





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



// Audio Fade in

const fadeInAudio = (target, duration) => {
  let volume = 0;
  const interval = 50;
  const steps = duration / interval;
  const volumeIncrement = 1 / steps;

  target.volume = 0;
  target.play();

  const fadeInterval = setInterval(() => {
    if (volume < 1) {
      volume += volumeIncrement;

      if (volume > 1) volume = 1;
      target.volume = volume;

    }
     else {
      clearInterval(fadeInterval);
    }
  }, interval);
};

document.querySelectorAll("audio").forEach((audio) => {
  audio.addEventListener("play", (e) => {
    fadeInAudio(e.currentTarget, 2000);
  });
});


  /*
  // FIRST FILTER BOX SECTION
  document.querySelectorAll("article .tab-menu .tab-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const container = e.target.closest("article"); // scope only to this article
      const activeTab = container.querySelector(".active-tab");
      const activeLink = container.querySelector(".active-link");
      const linkIndex = e.target.getAttribute("data-tab");
  
      if (activeTab) activeTab.classList.remove("active-tab");
      if (activeLink) activeLink.classList.remove("active-link");
  
      e.target.classList.add("active-link");
      const newTab = container.querySelector(`.tab[data-index='${linkIndex}']`);
      if (newTab) newTab.classList.add("active-tab");
    });
  });
  
  
  // SECOND SWITCH PANEL SECTION
  document.querySelectorAll(".switch-panel-2-section .tab-menu .tab-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const container = e.target.closest(".switch-panel-2-section"); // scope only here
      const activeTab = container.querySelector(".active-tab-2");
      const activeLink = container.querySelector(".active-link-2");
      const linkIndex = e.target.getAttribute("data-tab");
  
      if (activeTab) activeTab.classList.remove("active-tab-2");
      if (activeLink) activeLink.classList.remove("active-link-2");
  
      e.target.classList.add("active-link-2");
      const newTab = container.querySelector(`.tab[data-index='${linkIndex}']`);
      if (newTab) newTab.classList.add("active-tab-2");
    });
  });
  */



    document.querySelectorAll('.tab-control').forEach((tab_control) => {

      tab_control.querySelectorAll('.tab-link').forEach((tab_link) => {

        tab_link.addEventListener('click', (e) => {

          // Remove current active tab
          tab_control.querySelector('.active-link').classList.remove('active-link');
          tab_control.querySelector(".active-tab").classList.remove("active-tab");

          // Add active link class to clicked element
          e.target.classList.add('active-link');


          // Get data-tab attribute from click
          let link_index = e.target.getAttribute("data-tab");

          // Add active class to tab
          document.querySelector(`.tab[data-index='${link_index}']`).classList.add("active-tab");


        })

      })

    });






  // Shroud
      document.addEventListener("DOMContentLoaded", () => {
      const filterBar = document.querySelector("#filterBar");
      const shroud = document.querySelector("#shroud");

      // Buttons that open the sidebar & shroud
      const openBtns = [
        document.querySelector(".filters-text-click-close"),
        document.querySelector(".audio-text")
      ];

      // Buttons that close the sidebar & shroud
      const closeBtns = [
        document.querySelector("#close-filters-slider"),
        document.querySelector("#close-audio-slider")
      ];

      // Function to open sidebar & shroud
      function openFilterBar() {
        filterBar.classList.add("open");
        shroud.classList.add("open");
      }

      // Function to close sidebar & shroud
      function closeFilterBar() {
        filterBar.classList.remove("open");
        shroud.classList.remove("open");
      }

      // Add click listeners to open buttons
      openBtns.forEach(btn => {
        if (btn) btn.addEventListener("click", openFilterBar);
      });

      // Add click listeners to close buttons
      closeBtns.forEach(btn => {
        if (btn) btn.addEventListener("click", closeFilterBar);
      });
    });








    // Audio sidebar Clicking
    const audioSidebar = document.querySelector('.audio-sidebar');
    const audioTextBtn = document.querySelector('.audio-text');
    const toggleButtons = document.querySelectorAll('#close-audio-slider'); // all buttons

    // Toggle sidebar when clicking the vertical label
    audioTextBtn.addEventListener('click', () => {
      audioSidebar.classList.toggle('active');
    });

    // Close sidebar when clicking any button-stylings button
    toggleButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        audioSidebar.classList.remove('active');
      });
    });


    const button = document.getElementById('soundButton');
    const audio = document.getElementById('audio');
    let fadeInterval;

    function fadeAudio(targetVolume, duration = 1500) {
      clearInterval(fadeInterval);
      const stepTime = 50; // interval in ms
      const steps = duration / stepTime;
      const volumeStep = (targetVolume - audio.volume) / steps;

      fadeInterval = setInterval(() => {
        audio.volume = Math.min(1, Math.max(0, audio.volume + volumeStep));
        if ((volumeStep > 0 && audio.volume >= targetVolume) ||
          (volumeStep < 0 && audio.volume <= targetVolume)) {
          audio.volume = targetVolume;
          clearInterval(fadeInterval);
          if (targetVolume === 0) audio.pause();
        }
      }, stepTime);
    }

    button.addEventListener('click', (e) => {
      e.preventDefault(); // prevent default link behavior
      if (audio.paused) {
        audio.volume = 0;
        audio.play();
        fadeAudio(1); // fade in
        button.classList.remove('paused');
        button.textContent = '🔊 SOUND';
      } else {
        fadeAudio(0); // fade out
        button.classList.add('paused');
        button.textContent = '🔇 SOUND';
      }
    });




// Shroud Again?
        document.querySelector('#shroud').addEventListener('click', (e) => {

      let shroud = e.target.classList;

      if (shroud.contains('open')) {
        shroud.remove('open');
        document.querySelector('#filterBar').classList.remove('active');
        document.querySelector('.audio-sidebar').classList.remove('active');
      }


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








  




