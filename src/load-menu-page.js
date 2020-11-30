import * as createElements from './create-elements';
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
};

export default menuTabLoad;
