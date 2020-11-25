import * as createElements from './create-elements';
import initMediaQuery from './media-query';

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

    // Media queries
    const maxWidthMobileQuery = window.matchMedia('(max-width: 420px)');

    function handleMaxWidthMobile(e) {
        // check if the media query is true
        if (e.matches) {
            pageHeading.style.fontSize = '2.5rem';
            pageSubheading.style.fontSize = '1.2rem';
        } else {
            pageHeading.style.fontSize = '3rem';
            pageSubheading.style.fontSize = '1.5rem';
        }
    }

    initMediaQuery(maxWidthMobileQuery, handleMaxWidthMobile);
};

export default loadHomePage;
