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



/*
const linkedInHover = document.querySelector('#linked-in-hover');
const photoOfMe = document.querySelector('#photo-of-me');
    console.log('logged')

// hover in
linkedInHover.addEventListener('mouseenter', () => {
    photoOfMe.style.opacity = '0';

    setTimeout(() => {
    photoOfMe.src = '/images/landing-page/photo-of-me.jpg'; // your hover image
        photoOfMe.style.opacity = '1';
    }, 150);

      console.log('hover')
});

// hover out
linkedInHover.addEventListener('mouseleave', () => {
    photoOfMe.style.opacity = '0';

    setTimeout(() => {
   // your hover image') = 'none';
        photoOfMe.style.opacity = '0';
    }, 150);
        console.log('stop')
});
*/

const debounce = (func,wait) => {
  let timeout;
  return function(...args){
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this,args),wait);
  } 
}

const handleMouseEnter = () => {

}

const handleMouseLeave = () => {
  
}

const hoverImageAppear = document.querySelectorAll('.hover-image-appear');
const boxImageShowcase = document.querySelector('#box-image-showcase');


hoverImageAppear.forEach(hoverImageAppear => {
  hoverImageAppear.addEventListener('mouseenter', (e) => {
    let imageUrl = e.target.getAttribute('data-image');
    boxImageShowcase.style.opacity = '0';
    boxImageShowcase.classList.add('active-display');
    

    setTimeout(() => {
      boxImageShowcase.style.backgroundImage = `url("${imageUrl}")`
      boxImageShowcase.style.opacity = '1';
    }, 150);
       

  });

  hoverImageAppear.addEventListener('mouseleave', (e) => {
    boxImageShowcase.style.opacity = '0';
  });


});
