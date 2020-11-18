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
};

export default loadHomePage;