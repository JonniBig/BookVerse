const switchInput = document.getElementById('switch');
const body = document.body;

switchInput.addEventListener('change', () => {
  if (switchInput.checked) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
});
