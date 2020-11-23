import menu from './menu';
import initMediaQuery from './media-query';

const menuTabLoad = () => {
    // div#content - used to hold other elements
    const contentDiv = document.createElement('div');
    contentDiv.id = 'content';
    contentDiv.style.display = 'grid';
    contentDiv.style.placeItems = 'center';
    contentDiv.style.padding = '2rem';

    // page heading
    const pageHeading = document.createElement('h1');
    pageHeading.textContent = 'Menu';
    pageHeading.style.marginBottom = '2rem';
    pageHeading.style.fontSize = '3rem';

    // sections grid
    const sectionsGrid = document.createElement('div');
    sectionsGrid.style.display = 'grid';
    sectionsGrid.style.gridGap = '2rem';
    sectionsGrid.style.width = '50%';
    sectionsGrid.style.fontSize = '1.3rem';

    for (let category in menu) {
        // category section
        const categorySection = document.createElement('section');
        categorySection.style.display = 'grid';
        categorySection.style.gridGap = '1rem';

        // category heading
        const categoryHeading = document.createElement('h2');
        categoryHeading.classList.add('category-heading');
        categoryHeading.textContent = `${category}`;
        categoryHeading.style.fontSize = '2rem';

        categorySection.appendChild(categoryHeading);

        // get categoryItems
        let items = menu[category];

        items.forEach(item => {
            // item container
            const itemContainer = document.createElement('div');
            itemContainer.style.display = 'flex';

            // item name
            const itemName = document.createElement('p');
            itemName.textContent = item.name;
            itemName.style.width = '50%';

            // item price
            const itemPrice = document.createElement('p');
            itemPrice.textContent = `£${item.price}`;
            itemPrice.style.width = '50%';
            itemPrice.style.textAlign = 'right';
            itemPrice.style.letterSpacing = '3px';

            itemContainer.appendChild(itemName);
            itemContainer.appendChild(itemPrice);
            categorySection.appendChild(itemContainer);
        });

        sectionsGrid.appendChild(categorySection);
    }

    contentDiv.appendChild(pageHeading);
    contentDiv.appendChild(sectionsGrid);

    document.getElementById('container').appendChild(contentDiv);

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
        const categoryHeadings = document.querySelectorAll('.category-heading');

        // check if the media query is true
        if (e.matches) {
            pageHeading.style.fontSize = '2.5rem';
            pageHeading.style.marginBottom = '1rem';
            categoryHeadings.forEach(heading => heading.style.fontSize = '1.5rem');
            sectionsGrid.style.width = '100%';
            sectionsGrid.style.fontSize = '1rem';
        } else {
            pageHeading.style.fontSize = '3rem';
            pageHeading.style.marginBottom = '2rem';
            categoryHeadings.forEach(heading => heading.style.fontSize = '2rem');
            sectionsGrid.style.width = '50%';
            sectionsGrid.style.fontSize = '1.3rem';
        }
    }

    initMediaQuery(maxWidthTabletQuery, handleMaxWidthTablet);
    initMediaQuery(maxWidthMobileQuery, handleMaxWidthMobile);
};

export default menuTabLoad;
