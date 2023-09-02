const switchElement = document.getElementById('switch');
const bodyElement = document.body;

function saveThemeChoice(isDark) {
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function loadSavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    bodyElement.classList.add('dark-theme');
    switchElement.checked = true;
  } else {
    bodyElement.classList.remove('dark-theme');
    switchElement.checked = false;
  }
}

loadSavedTheme();

switchElement.addEventListener('change', function () {
  if (switchElement.checked) {
    bodyElement.classList.add('dark-theme');
    saveThemeChoice(true);
  } else {
    bodyElement.classList.remove('dark-theme');
    saveThemeChoice(false);
  }
});
