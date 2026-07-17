const hamMenu = document.querySelector(".hamburger-menu");
const offScreenMenu = document.querySelector(".ham-menu");
const body = document.body;

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  body.classList.toggle("lock-scroll");
});



/*

hoverImageAppear.forEach((hoverImageAppear) => {
  hoverImageAppear.addEventListener("mouseenter", (e) => {
    let imageUrl = e.target.getAttribute("data-image");
    //boxImageShowcase.style.opacity = '0';
    boxImageShowcase.classList.add("active-display");

    setTimeout(() => {
      boxImageShowcase.style.backgroundImage = `url("${imageUrl}")`;
      //boxImageShowcase.style.opacity = '1';
      boxImageShowcase.classList.add("active");
    }, 150);
  });

  hoverImageAppear.addEventListener("mouseleave", (e) => {
    boxImageShowcase.classList.remove("active");

  });
});*/

const hoverImageAppear = document.querySelectorAll(".hover-image-appear");
const boxImageShowcase = document.querySelector("#box-image-showcase");

hoverImageAppear.forEach((hoverImageAppear) => {
  let target_id = hoverImageAppear.getAttribute("data-id");
  let target_element = document.querySelector(`#${target_id}`);


  let timeout_id = null;

  hoverImageAppear.addEventListener("mouseenter", (e) => {

      clearTimeout(timeout_id);

    timeout_id = setTimeout(() => {
      target_element.classList.add("active");
    }, 150);
  });

  hoverImageAppear.addEventListener("mouseleave", (e) => {
    clearTimeout(timeout_id);

    target_element.classList.remove("active");
  });
});





const pageTransition = () => {
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
}



//page Loading
document.addEventListener('DOMContentLoaded', () => pageTransition());
addEventListener("popstate",() => pageTransition());
