const openBtn = document.querySelector(".header__nav-btn--open");
const closeBtn = document.querySelector(".header__nav-btn--close");
const navMenu = document.querySelector(".header__modal");
const body = document.querySelector('body');
const links = document.querySelectorAll('.link');


openBtn.onclick = () => {
  handlerClick()
}

closeBtn.onclick = () => {
  handlerClick()
}

for (var i = 0; i < links.length; i++) {
  links[i].onclick = () => {
    handlerClick()
  }
}

function handlerClick() {
  navMenu.classList.toggle('hidden');
  openBtn.classList.toggle('hidden');
  closeBtn.classList.toggle('hidden');
  body.classList.toggle('stop-scroll');
}


