const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.social-divs');
const menuNav = document.querySelector('.social-links');
const navItems = document.querySelectorAll('.nav-item');
const workLink = document.querySelector('.work-link');
const dividers = document.querySelectorAll('.hamburger-divide-line');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
/*
function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        
        // Disable scrolling
        document.body.classList.add('no-scroll');

        // Delay the reveal to match the nav animation
        setTimeout(() => {
            navItems.forEach(item => item.classList.add('show'));
            workLink.classList.add('show');
            dividers.forEach(divider => divider.classList.add('show'));
        }, 400); // Match your transition timing

        showMenu = true;
    } else {
        // Instantly hide everything
        navItems.forEach(item => item.classList.remove('show'));
        workLink.classList.remove('show');
        dividers.forEach(divider => divider.classList.remove('show'));

        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');

        // Enable scrolling again
        document.body.classList.remove('no-scroll');

        showMenu = false;
    }
} */

function toggleMenu() {
    if (window.innerWidth > 600) return; // Don't run toggle on desktop

    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        document.body.classList.add('no-scroll');

        setTimeout(() => {
            navItems.forEach(item => item.classList.add('show'));
            workLink.classList.add('show');
            dividers.forEach(divider => divider.classList.add('show'));
        }, 400);

        showMenu = true;
    } else {
        navItems.forEach(item => item.classList.remove('show'));
        workLink.classList.remove('show');
        dividers.forEach(divider => divider.classList.remove('show'));

        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        document.body.classList.remove('no-scroll');

        showMenu = false;
    }
}








    function updateClock() {
      const now = new Date();
  
      // Convert to Auckland time (uses IANA time zone "Pacific/Auckland")
      const options = {
        timeZone: 'Pacific/Auckland',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
  
      const timeString = new Intl.DateTimeFormat('en-NZ', options).format(now);
      document.getElementById('clock').textContent = timeString;
    }
  
    // Update clock every second
    setInterval(updateClock, 1000);
    updateClock(); // Initial call
    // Get the current date





    function scrollToBottom() {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      }


      function scrollToTop() {
     window.scrollTo({ top: 0, behavior: 'smooth' 

     });
      }

      document.querySelector('#work-link-id-click').addEventListener("click",() =>{
        toggleMenu();
      }) //work button clicking scrolls to works space


      








  