

const foundations = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: 'children.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: 'hope.png',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: 'medical.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: 'razom.png',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: 'action.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: 'sergiy.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: 'medecins.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: 'world.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: 'united.png',
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
            <img src="./images/found/${item.img}" alt="${
    item.title
  }" class="found-logo">
        </a>
    </li>
`;
}
