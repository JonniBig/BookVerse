

const isLocalhost =
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1';

const foundations = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    // img: new URL('../../images/found/children.png', import.meta.url),
    img: isLocalhost
      ? '../../images/found/save-the-children.png'
      : 'https://github.com/JonniBig/BookVerse/blob/main/src/images/found/children.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: 'https://github.com/JonniBig/BookVerse/blob/main/src/images/found/hope.png',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: 'https://jonnibig.github.io/BookVerse/images/found/medical.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: 'https://jonnibig.github.io/BookVerse/images/found/razom.png',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: 'https://jonnibig.github.io/BookVerse/images/found/action.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: 'https://jonnibig.github.io/BookVerse/images/found/sergiy.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: 'https://jonnibig.github.io/BookVerse/images/found/medecins.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: 'https://jonnibig.github.io/BookVerse/images/found/world.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: 'https://jonnibig.github.io/BookVerse/images/found/united.png',
  },
];

const foundationList = document.querySelector('.found-list');
const downBtn = document.querySelector('.found-down');

showFoundations();

downBtn.addEventListener('click', handleScrollFoundations);

function handleScrollFoundations() {
  if (downBtn.matches('.found-down')) {
    foundationList.scrollTo({ top: 500, behavior: 'smooth' });
  } else {
    foundationList.scrollTo({ top: 0, behavior: 'smooth' });
  }
  downBtn.classList.toggle('found-down');
  downBtn.classList.toggle('found-up');
}

function showFoundations() {
  foundationList.innerHTML = createMarkupListItems();
}

function createMarkupListItems() {
  return foundations.map(createMarkupListItem).join('');
}

function createMarkupListItem(item, i) {
  return `
    <li class="found-item" value="${i + 1}">
        <a href="${item.url}" class="found-link" title="${
    item.title
  }" target="_blank"> 

                <img src="${item.img}" alt="${item.title}" class="found-logo">
            </a>
        </li>
    `;

}
