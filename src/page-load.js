const pageLoad = () => {
    // get div#content
    const contentElem = document.getElementById('content');

    // create elements
    const headlineH1Elem = document.createElement('h1');
    const kebabImgElem = document.createElement('img');
    const descriptionPElem = document.createElement('p');

    // edit elements
    headlineH1Elem.textContent = 'Kaiz\'s Kebab';
    kebabImgElem.src = 'assets/kebab.jpg';
    kebabImgElem.alt = 'Plate of kebab meat with tomatoes, chillies and pitta bread';
    descriptionPElem.textContent = 'Best kebab in town!';

    // append elements to div#content
    contentElem.appendChild(headlineH1Elem);
    contentElem.appendChild(kebabImgElem);
    contentElem.appendChild(descriptionPElem);
}

export default pageLoad;
