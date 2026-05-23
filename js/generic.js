const hamMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('.ham-menu');
const body = document.body;

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
    body.classList.toggle('lock-scroll');
  
});

/*
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.href;

    // Ignore empty links, anchors, or new tabs
    if (
      href &&
      !href.includes('#') &&
      this.target !== '_blank'
    ) {
      e.preventDefault();

      document.body.classList.add('fade-out');

      setTimeout(() => {
        window.location.href = href;
      }, 500); // match CSS duration
    }
  });
});

// Handle page refresh/reload
window.addEventListener('beforeunload', () => {
  document.body.classList.add('fade-out');
});
*/