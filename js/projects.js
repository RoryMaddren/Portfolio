const hamMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('.ham-menu');
const body = document.body;

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
    body.classList.toggle('lock-scroll');
  
});




//page Loading
document.addEventListener('DOMContentLoaded', () => {
  const transition = document.querySelector('#page-transition');

  // Fade OUT when page loads
  setTimeout(() => {
    transition.classList.add('loaded');
  }, 1000);

  // Fade IN before changing page
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {

      const href = link.getAttribute('href');

      // Ignore external links, anchors, etc
      if (
        !href ||
        href.startsWith('#') ||
        href.startsWith('http') ||
        link.target === '_blank'
      ) return;

      e.preventDefault();

      transition.classList.remove('loaded');
      transition.classList.add('active');

      setTimeout(() => {
        window.location.href = href;
      }, 800); // match CSS transition time
    });
  });
});