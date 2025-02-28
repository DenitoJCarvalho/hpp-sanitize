let menuburger = document.querySelector('div#menuburguer');
let containerMenu = document.querySelector('menu#container-menu');


function showMenu(event) {

  event.stopPropagation();

  if (window.getComputedStyle(containerMenu).display === "none") {
    containerMenu.style.display = "block";
    document.addEventListener('click', hideMenu);
  } else {
    containerMenu.style.display = "none";
    document.removeEventListener('click', hideMenu);
  }
}

function hideMenu(event) {
  if (!containerMenu.contains(event.target) && event.target !== menuburger) {
    containerMenu.style.display = "none";
    document.removeEventListener('click', hideMenu);
  }
}

export async function toogleMenu() {
  menuburger.addEventListener('click', showMenu);
};
