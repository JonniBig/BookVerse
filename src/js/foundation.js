import { createMarkupBookShelf } from "./bestSellers"

const foundations = [
    {
        title: 'Save the Children',
        url:
            'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
        img: 'children.png',
    },
    {
        title: 'Project HOPE',
        url: 'https://www.projecthope.org/country/ukraine/',
        img: 'hope.png',
    },
    {
        title: 'UNITED24',
        url: 'https://u24.gov.ua/uk',
        img: 'united.png',
    },
    {
        title: 'International Medical Corps',
        url: 'https://internationalmedicalcorps.org/country/ukraine/',
        img: 'medical.png',
    },
    {
        title: 'Medicins Sans Frontieres',
        url: 'https://www.msf.org/ukraine',
        img: 'medecins.png',
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
        title: 'World vision',
        url: 'https://www.wvi.org/emergencies/ukraine',
        img: 'world.png',
    },
    {
        title: 'Serhiy Prytula Charity Foundation',
        url: 'https://prytulafoundation.org/en',
        img: 'sergiy.png',
    },
]

showFoundations()

function showFoundations() {
    const foundationList = document.querySelector(".found-list")
    
    foundationList.innerHTML = createMarkupListItems()
}

function createMarkupListItems() {
    return foundations.map(createMarkupListItem).join("")
}

function createMarkupListItem(item, i) {
    return `
        <li class="found-item" value="${i + 1}">
            <a href="${item.url}" class="found-link" title="${item.title}" target="_blank"> 
                <img src="../images/found/${item.img}" alt="${item.title}" class="found-logo">
            </a>
        </li>
    `
}