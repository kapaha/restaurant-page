import menu from './menu';

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
    sectionsGrid.style.gridGap = '1.5rem';
    sectionsGrid.style.width = '50%';
    sectionsGrid.style.fontSize = '1.3rem';

    for (let category in menu) {
        // category section
        const categorySection = document.createElement('section');
        categorySection.style.display = 'grid';
        categorySection.style.gridGap = '0.5rem';

        // category heading
        const categoryHeading = document.createElement('h2');
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

            itemContainer.appendChild(itemName);
            itemContainer.appendChild(itemPrice);
            categorySection.appendChild(itemContainer);
        });

        sectionsGrid.appendChild(categorySection);
    }

    contentDiv.appendChild(pageHeading);
    contentDiv.appendChild(sectionsGrid);

    document.getElementById('container').appendChild(contentDiv);
};

export default menuTabLoad;
