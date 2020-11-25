import * as createElements from './create-elements';
import initMediaQuery from './media-query';
import menu from './menu';

const menuTabLoad = () => {
    const contentDiv = createElements.createContentDiv();
    const pageHeading = createElements.createPageHeading('Menu');
    const sectionsGrid = createElements.createSectionsGrid();

    // create menu elements
    for (let category in menu) {
        const categorySection = createElements.createSection();
        const categoryHeading = createElements.createSectionHeading(`${category}`);

        categorySection.appendChild(categoryHeading);

        // get categoryItems
        let items = menu[category];

        items.forEach(item => {
            // item container
            const itemContainer = document.createElement('div');
            itemContainer.style.display = 'flex';

            // item name
            const itemName = createElements.createParagraph(item.name);
            itemName.style.width = '50%';

            // item price
            const itemPrice = createElements.createParagraph(`£${item.price}`);
            itemPrice.style.width = '50%';
            itemPrice.style.textAlign = 'right';
            itemPrice.style.letterSpacing = '3px';

            itemContainer.appendChild(itemName);
            itemContainer.appendChild(itemPrice);
            categorySection.appendChild(itemContainer);
        });

        sectionsGrid.appendChild(categorySection);
    }

    // append elements
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
        const categoryHeadings = document.querySelectorAll('.section-heading');

        // check if the media query is true
        if (e.matches) {
            pageHeading.style.fontSize = '2.5rem';
            categoryHeadings.forEach(heading => heading.style.fontSize = '1.5rem');
            sectionsGrid.style.width = '100%';
            sectionsGrid.style.fontSize = '1rem';
        } else {
            pageHeading.style.fontSize = '3rem';
            categoryHeadings.forEach(heading => heading.style.fontSize = '2rem');
            sectionsGrid.style.width = '50%';
            sectionsGrid.style.fontSize = '1.3rem';
        }
    }

    initMediaQuery(maxWidthTabletQuery, handleMaxWidthTablet);
    initMediaQuery(maxWidthMobileQuery, handleMaxWidthMobile);
};

export default menuTabLoad;
