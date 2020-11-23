import initMediaQuery from './media-query';

const loadContactPage = () => {
    // div#content - used to hold other elements
    const contentDiv = document.createElement('div');
    contentDiv.id = 'content';
    contentDiv.style.display = 'grid';
    contentDiv.style.placeItems = 'center';
    contentDiv.style.padding = '2rem';

    // page heading
    const pageHeading = document.createElement('h1');
    pageHeading.textContent = 'Contact us';
    pageHeading.style.marginBottom = '2rem';
    pageHeading.style.fontSize = '3rem';

    // sections grid
    const sectionsGrid = document.createElement('div');
    sectionsGrid.style.display = 'grid';
    sectionsGrid.style.gridGap = '2rem';
    sectionsGrid.style.width = '50%';
    sectionsGrid.style.fontSize = '1.3rem';

    // section opening times
    const openingTimesSection = document.createElement('section');
    const openingTimesTitle = document.createElement('h2');
    const openingTimesP1 = document.createElement('p');
    const openingTimesP2 = document.createElement('p');
    const openingTimesP3 = document.createElement('p');
    openingTimesTitle.textContent = 'Opening Times';
    openingTimesP1.textContent = 'Monday - Saturday';
    openingTimesP2.textContent = '5:00pm - 11:00pm';
    openingTimesP3.textContent = 'Collection or Delivery';
    openingTimesSection.appendChild(openingTimesTitle);
    openingTimesSection.appendChild(openingTimesP1);
    openingTimesSection.appendChild(openingTimesP2);
    openingTimesSection.appendChild(openingTimesP3);

    // section address
    const addressSection = document.createElement('section');
    const addressTitle = document.createElement('h2');
    const addressP1 = document.createElement('p');
    addressTitle.textContent = 'Address';
    addressP1.textContent = '45 Kebab Road, London, KE8 4BS';
    addressSection.appendChild(addressTitle);
    addressSection.appendChild(addressP1);

    // section telephone
    const telephoneSection = document.createElement('section');
    const telephoneTitle = document.createElement('h2');
    const telephoneP1 = document.createElement('p');
    telephoneTitle.textContent = 'Telephone';
    telephoneP1.textContent = '0207 946 0949';
    telephoneSection.appendChild(telephoneTitle);
    telephoneSection.appendChild(telephoneP1);

    // section email
    const emailSection = document.createElement('section');
    const emailTitle = document.createElement('h2');
    const emailP1 = document.createElement('p');
    const emailA = document.createElement('a');
    emailTitle.textContent = 'Email';
    emailA.textContent = 'kaizkebabs@kebab.com';
    emailA.href = 'mailto:kaizkebabs@kebab.com';
    emailA.style.color = 'black';
    emailA.style.textDecoration = 'none';
    emailP1.appendChild(emailA);
    emailSection.appendChild(emailTitle);
    emailSection.appendChild(emailP1);

    sectionsGrid.appendChild(openingTimesSection);
    sectionsGrid.appendChild(addressSection);
    sectionsGrid.appendChild(telephoneSection);
    sectionsGrid.appendChild(emailSection);

    // section styles
    const sections = sectionsGrid.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'grid';
        section.style.gridGap = '1rem';
    });

    // h2 titles styles
    const h2Titles = sectionsGrid.querySelectorAll('h2');
    h2Titles.forEach(h2Title => {
        h2Title.style.fontSize = '2rem';
    });

    contentDiv.appendChild(pageHeading);
    contentDiv.appendChild(sectionsGrid);

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
            pageHeading.style.marginBottom = '1rem';
            h2Titles.forEach(heading => heading.style.fontSize = '1.5rem');
            sectionsGrid.style.width = '100%';
            sectionsGrid.style.fontSize = '1rem';
        } else {
            pageHeading.style.fontSize = '3rem';
            pageHeading.style.marginBottom = '2rem';
            h2Titles.forEach(heading => heading.style.fontSize = '2rem');
            sectionsGrid.style.width = '50%';
            sectionsGrid.style.fontSize = '1.3rem';
        }
    }

    initMediaQuery(maxWidthTabletQuery, handleMaxWidthTablet);
    initMediaQuery(maxWidthMobileQuery, handleMaxWidthMobile);
};

export default loadContactPage;
