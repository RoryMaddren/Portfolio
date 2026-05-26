  function updateClock() {
    const now = new Date();

    const formatter = new Intl.DateTimeFormat("en-NZ", {
      timeZone: "Pacific/Auckland",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZoneName: "short"
    });

    document.getElementById("clock").textContent =
      formatter.format(now).toUpperCase();
  }

  updateClock();
  setInterval(updateClock, 1000);



    const selectDesginWorkBtn = document.querySelector('#select-design-work');
    const selectPhotoWorkBtn = document.querySelector('#select-photography-work');

    const designAwards = document.querySelector('#awards-container-design-strict');
    const photographyAwards = document.querySelector('#photography-awards');

    console.log("const working")

    // Show Uni Work
    selectDesginWorkBtn.addEventListener('click', () => {
        designAwards.classList.add('active');
        photographyAwards.classList.remove('active');

        designAwards.classList.add('active');
        photographyAwards.classList.remove('active');

        selectPhotoWorkBtn.classList.remove('active')
        selectDesginWorkBtn.classList.add('active');
        console.log("working-1");

    });


    // Show Industry Work
    selectPhotoWorkBtn.addEventListener('click', () => {
        photographyAwards.classList.add('active');
        designAwards.classList.remove('active');

        selectPhotoWorkBtn.classList.add('active')
        selectDesginWorkBtn.classList.remove('active');

        photographyAwards.classList.add('active');
        designAwards.classList.remove('active');
        console.log("working-2");
    });