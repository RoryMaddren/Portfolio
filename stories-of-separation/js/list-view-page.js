





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
    const sepYearMin = document.getElementById('sepYearMin');
    const sepYearMax = document.getElementById('sepYearMax');
    const sepYearMinVal = document.getElementById('sepYearMinVal');
    const sepYearMaxVal = document.getElementById('sepYearMaxVal');

    const splitMin = document.getElementById('splitMin');
    const splitMax = document.getElementById('splitMax');
    const splitMinVal = document.getElementById('splitMinVal');
    const splitMaxVal = document.getElementById('splitMaxVal');

    sepYearMin.addEventListener('input', () => {
      if (parseInt(sepYearMin.value) > parseInt(sepYearMax.value)) {
        sepYearMin.value = sepYearMax.value;
      }
      sepYearMinVal.textContent = sepYearMin.value;
    });

    sepYearMax.addEventListener('input', () => {
      if (parseInt(sepYearMax.value) < parseInt(sepYearMin.value)) {
        sepYearMax.value = sepYearMin.value;
      }
      sepYearMaxVal.textContent = sepYearMax.value;
    });

    splitMin.addEventListener('input', () => {
      if (parseInt(splitMin.value) > parseInt(splitMax.value)) {
        splitMin.value = splitMax.value;
      }
      splitMinVal.textContent = splitMin.value;
    });

    splitMax.addEventListener('input', () => {
      if (parseInt(splitMax.value) < parseInt(splitMin.value)) {
        splitMax.value = splitMin.value;
      }
      splitMaxVal.textContent = splitMax.value;
    });

    document.getElementById('resetBtn').addEventListener('click', () => {
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
  const tags = container.querySelectorAll('.filter-tag');

  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      // Toggle "All" behavior
      if (tag.textContent === 'All') {
        tags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
      } else {
        tag.classList.toggle('active');
        // If any non-All tag is active, remove All
        if (Array.from(tags).some(t => t !== tag && t.classList.contains('active'))) {
          tags[0].classList.remove('active'); // remove All
        }
        // If no non-All tags active, set All active
        if (!Array.from(tags).some(t => t !== tags[0] && t.classList.contains('active'))) {
          tags[0].classList.add('active'); // add All
        }
      }
    });
  });
}


      document.getElementById('resetBtn-2').addEventListener('click', () => {
      sepYearMin.value = 1945;
      sepYearMax.value = 1965;
      sepYearMinVal.textContent = 1945;
      sepYearMaxVal.textContent = 1965;

      splitMin.value = 3;
      splitMax.value = 8;
      splitMinVal.textContent = 3;
      splitMaxVal.textContent = 8;
    });





// Initialize both sections
setupTagToggle('separation-tags');
setupTagToggle('trigger-tags');




//Disable scroll
const filterToggle = document.querySelector('.filters-text'); // button/text that opens it
filterToggle.addEventListener('click', () => {
  filterBar.classList.toggle('active');
  document.body.classList.toggle('filter-active'); // freeze/unfreeze background
});









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
        playPauseBtn.textContent = "PAUSE AUDIO"; // now pause since it's playing
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























