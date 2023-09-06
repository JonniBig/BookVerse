const foundations = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: 'https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/found/children.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: 'https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/found/hope.png',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: 'https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/found/medical.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: 'https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/found/razom.png',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: 'https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/found/action.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: 'https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/found/sergiy.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: 'https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/found/medecins.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: 'https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/found/world.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: 'https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/found/united.png',
  },
];

const foundationList = document.querySelector('.found-list');
const downBtn = document.querySelector('.found-down');
const upBtn = document.querySelector('.found-up');

showFoundations();

downBtn.addEventListener('click', handleScrollDown);
upBtn.addEventListener('click', handleScrollUp);

function handleScrollDown() {
  const itemHeight = foundationList.querySelector('.found-item').offsetHeight;
  foundationList.scrollTop += itemHeight;
}

function handleScrollUp() {
  const itemHeight = foundationList.querySelector('.found-item').offsetHeight;
  foundationList.scrollTop -= itemHeight;
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
  }" target="_blank" aria-label="${item.title}">
        <img src="${item.img}" alt="${
    item.title
  }" class="found-logo" style="height: 32px;">
      </a>
    </li>
  `;
}
