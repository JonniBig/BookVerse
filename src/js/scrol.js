const goTopBtn = document.querySelector('.go-top');

window.addEventListener('scroll', trackScroll);

goTopBtn.addEventListener('click', goTop);

function trackScroll() {
  const scrolled = document.documentElement.scrollTop;
  const coords = document.documentElement.clientHeight;

  goTopBtn.classList.toggle('show', scrolled > coords);
}

function goTop() {
  if (document.documentElement.scrollTop > 0) {
    window.scrollBy(0, -40);
    requestAnimationFrame(goTop);
  }
}
