function includeHTML(url, elementId) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const addPage = new XMLHttpRequest();
  addPage.onreadystatechange = function () {
    if (addPage.readyState === 4 && addPage.status === 200) {
      element.innerHTML = addPage.responseText;
    }
  };
  addPage.open('GET', url, true);
  addPage.send();
}

includeHTML('./partials/categories-book.html', 'leftWrapper');
includeHTML('./partials/foundation.html', 'leftWrapper');
