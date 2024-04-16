const toggleMenuElement = document.getElementById('toggle-menu');
const menuElement = document.getElementById('menu');

function handleMenu() {
  if (menuElement.classList.contains('show')) {
    menuElement.classList.remove('show');
  } else {
    menuElement.classList.add('show');
  }
}

toggleMenuElement.addEventListener('click', handleMenu);
