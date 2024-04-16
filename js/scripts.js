const toggleMenuElement = document.getElementById('toggle-menu');
const menuElement = document.getElementById('menu');


function handleMenu() {
  if (menuElement.classList.contains('menu')) {
    menuElement.classList.remove('menu');
  } else {
    menuElement.classList.add('menu');
  }
}

toggleMenuElement.addEventListener('click', handleMenu);
