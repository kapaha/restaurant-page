import * as createElements from './create-elements';
import initMediaQuery from './media-query';

const loadContactPage = () => {
    const contentDiv = createElements.createContentDiv();
    const pageHeading = createElements.createPageHeading('Contact Us');
    const sectionsGrid = createElements.createSectionsGrid();

    // section opening times
    const openingTimesSection = createElements.createSection();
    const openingTimesHeading = createElements.createSectionHeading('Opening Times');
    const openingTimesP1 = createElements.createParagraph('Monday - Saturday');
    const openingTimesP2 = createElements.createParagraph('5:00pm - 11:00pm');
    const openingTimesP3 = createElements.createParagraph('Collection or Delivery');
    openingTimesSection.appendChild(openingTimesHeading);
    openingTimesSection.appendChild(openingTimesP1);
    openingTimesSection.appendChild(openingTimesP2);
    openingTimesSection.appendChild(openingTimesP3);

    // section address
    const addressSection = createElements.createSection();
    const addressTitle = createElements.createSectionHeading('Address');
    const addressP1 = createElements.createParagraph('45 Kebab Road, London, KE8 4BS');
    addressSection.appendChild(addressTitle);
    addressSection.appendChild(addressP1);

    // section telephone
    const telephoneSection = createElements.createSection();
    const telephoneTitle = createElements.createSectionHeading('Telephone');
    const telephoneP1 = createElements.createParagraph('0207 946 0949');
    telephoneSection.appendChild(telephoneTitle);
    telephoneSection.appendChild(telephoneP1);

    // section email
    const emailSection = createElements.createSection();
    const emailTitle = createElements.createSectionHeading('Email');
    const emailP1 = createElements.createParagraph();
    const emailA = document.createElement('a');
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
        const sectionHeadings = document.querySelectorAll('.section-heading');

        // check if the media query is true
        if (e.matches) {
            pageHeading.style.fontSize = '2.5rem';
            sectionHeadings.forEach(heading => heading.style.fontSize = '1.5rem');
            sectionsGrid.style.width = '100%';
            sectionsGrid.style.fontSize = '1rem';
        } else {
            pageHeading.style.fontSize = '3rem';
            sectionHeadings.forEach(heading => heading.style.fontSize = '2rem');
            sectionsGrid.style.width = '50%';
            sectionsGrid.style.fontSize = '1.3rem';
        }
    }

    initMediaQuery(maxWidthTabletQuery, handleMaxWidthTablet);
    initMediaQuery(maxWidthMobileQuery, handleMaxWidthMobile);
};

export default loadContactPage;
