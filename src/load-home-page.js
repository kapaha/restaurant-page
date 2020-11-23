import initMediaQuery from './media-query';

const loadHomePage = () => {
    // div#content - used to hold other elements
    const contentDiv = document.createElement('div');
    contentDiv.id = 'content';
    contentDiv.style.display = 'grid';
    contentDiv.style.placeItems = 'center';
    contentDiv.style.gridGap = '1rem';
    contentDiv.style.padding = '2rem';

    // page heading
    const pageHeading = document.createElement('h1');
    pageHeading.textContent = 'Kai\'s Kebab';
    pageHeading.style.fontSize = '3rem';

    // main image
    const mainImg = document.createElement('img');
    mainImg.id = 'main-img';
    mainImg.src = 'assets/kebab.jpg';
    mainImg.alt = 'Plate of kebab meat with tomatoes, chillies and pitta bread';

    // page subheading
    const pageSubheading = document.createElement('h2');
    pageSubheading.textContent = 'Best kebab in town!';
    pageSubheading.style.fontWeight = '400';

    contentDiv.appendChild(pageHeading);
    contentDiv.appendChild(pageSubheading);
    contentDiv.appendChild(mainImg);

    document.getElementById('container').appendChild(contentDiv);

    // Media queries
    // Create a media condition that targets viewports at most 1000px wide
    const maxWidthTabletQuery = window.matchMedia('(max-width: 1000px)');
    const maxWidthMobileQuery = window.matchMedia('(max-width: 400px)');

    function handleMaxWidthTablet(e) {
        // check if the media query is true
        if (e.matches) {
            contentDiv.style.padding = '1rem';
        } else {
            contentDiv.style.padding = '2rem';
        }
    }

    function handleMaxWidthMobile(e) {
        // check if the media query is true
        if (e.matches) {
            pageHeading.style.fontSize = '2.5rem';
            pageSubheading.style.fontSize = '1rem';
        } else {
            pageHeading.style.fontSize = '3rem';
            pageSubheading.style.fontSize = '1.5rem';
        }
    }

    initMediaQuery(maxWidthTabletQuery, handleMaxWidthTablet);
    initMediaQuery(maxWidthMobileQuery, handleMaxWidthMobile);
};

export default loadHomePage;
