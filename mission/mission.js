const themeSelector = document.querySelector('#theme');
const container = document.querySelector('.container'); 
const logo = document.querySelector('#logo');

function changeTheme() {
  const theme = themeSelector.value;

  if (theme === 'dark') {
    container.classList.add('dark'); 
    logo.src = 'byui-logo_white.png';
  } else {
    container.classList.remove('dark');
    logo.src = 'byui-logo_blue.webp';
  }
}

themeSelector.addEventListener('change', changeTheme);

