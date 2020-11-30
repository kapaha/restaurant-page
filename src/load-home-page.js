import * as createElements from './create-elements';

const loadHomePage = () => {
    const contentDiv = createElements.createContentDiv();
    contentDiv.style.gridGap = '1rem';

    const pageHeading = createElements.createPageHeading('Kai\'s Kebab');

    // main image
    const mainImg = document.createElement('img');
    mainImg.src = 'assets/kebab.jpg';
    mainImg.alt = 'Plate of kebab meat with tomatoes, chillies and pitta bread';

    // page subheading
    const pageSubheading = document.createElement('h2');
    pageSubheading.textContent = 'The best kebab in town!';
    pageSubheading.style.fontWeight = '400';

    // append elements
    contentDiv.appendChild(pageHeading);
    contentDiv.appendChild(pageSubheading);
    contentDiv.appendChild(mainImg);
    document.getElementById('container').appendChild(contentDiv);
};

export default loadHomePage;
