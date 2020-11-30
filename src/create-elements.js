const createContentDiv = () => {
    // div#content - used to hold other elements
    const contentDiv = document.createElement('div');

    // properties
    contentDiv.id = 'content';

    // styles
    contentDiv.style.display = 'grid';
    contentDiv.style.placeItems = 'center';
    contentDiv.style.gridGap = '2rem';
    contentDiv.style.padding = '2rem';

    return contentDiv;
};

const createPageHeading = (text) => {
    const pageHeading = document.createElement('h1');

    // properties
    pageHeading.id = 'page-heading';

    // text
    pageHeading.textContent = text;

    // styles
    pageHeading.style.fontSize = '3rem';

    return pageHeading;
};

const createSectionsGrid = () => {
    const sectionsGrid = document.createElement('div');

    // properties
    sectionsGrid.classList.add('sections-grid');

    // styles
    sectionsGrid.style.display = 'grid';
    sectionsGrid.style.gridGap = '2rem';
    sectionsGrid.style.width = '50%';
    sectionsGrid.style.fontSize = '1.3rem';

    return sectionsGrid;
};

const createSection = () => {
    const section = document.createElement('section');

    // styles
    section.style.display = 'grid';
    section.style.gridGap = '1rem';

    return section;
};

const createSectionHeading = (text) => {
    const sectionHeading = document.createElement('h2');

    // classes
    sectionHeading.classList.add('section-heading');

    // text
    sectionHeading.textContent = text;

    // styles
    sectionHeading.style.fontSize = '2rem';

    return sectionHeading;
};

const createParagraph = (text) => {
    const paragraph = document.createElement('p');

    // text
    paragraph.textContent = text;

    return paragraph;
};

export {
    createContentDiv,
    createPageHeading,
    createSectionsGrid,
    createSection,
    createSectionHeading,
    createParagraph
};