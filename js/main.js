document.addEventListener('scroll', makeMenuSticky)

let menu = document.getElementById("hamburger");
menu.addEventListener("click", hamburgerMenu);

let fullMenu = document.getElementById("full-menu");
let hiddenMenu = document.getElementById("hidden-menu");
const sticky = fullMenu.offsetTop;

function hamburgerMenu(e) {
  let menu = e.target;

  if (menu.classList.contains('hamburger-closed')) {
    menu.classList.toggle('hamburger-closed');
    menu.classList.toggle('bi-list');
    menu.classList.toggle('bi-x-lg')
    hiddenMenu.classList.toggle('hidden')
    fullMenu.classList.toggle('background');
  } else {
    menu.classList.toggle('bi-x-lg')
    menu.classList.toggle('hamburger-closed');
    menu.classList.toggle('bi-list');
    hiddenMenu.classList.toggle('hidden')
    fullMenu.classList.toggle('background');
  }
}

function makeMenuSticky() {
  if (window.pageYOffset > sticky) {
    fullMenu.classList.add("sticky");
  } else {
    fullMenu.classList.remove("sticky");
  }
}