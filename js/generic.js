const hamMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('.ham-menu');
const body = document.body;

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
    body.classList.toggle('lock-scroll');
  
});

