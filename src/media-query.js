const mediaQueries = {
    tabletQuery: {
        query: window.matchMedia('(max-width: 1000px)'),
        callback: handleMaxWidthTablet
    },
    mobileQuery: {
        query: window.matchMedia('(max-width: 420px)'),
        callback: handleMaxWidthMobile
    }
}

const initMediaQueries = () => {
    for (let object in mediaQueries) {
        let mediaQuery = mediaQueries[object];
        let query = mediaQuery.query;
        let callback = mediaQuery.callback;

        // Register event listener
        query.addListener(callback);

        // Initial check
        callback(query);
    }
};

const checkMediaQueries = () => {
    for (let object in mediaQueries) {
        let mediaQuery = mediaQueries[object];
        let query = mediaQuery.query;
        let callback = mediaQuery.callback;

        callback(query);
    }
}

function handleMaxWidthTablet(e) {
    const mainContainer = document.querySelector('#container');
    const sectionsGrid = document.querySelector('.sections-grid');

    // check if the media query is true
    if (e.matches) {
        mainContainer.style.margin = '0';
        if (sectionsGrid !== null) {
            sectionsGrid.style.width = '75%';
        }
    } else {
        mainContainer.style.margin = '2rem auto';
        if (sectionsGrid !== null) {
            sectionsGrid.style.width = '50%';
        }
    }
}

function handleMaxWidthMobile(e) {
    const sectionsGrid = document.querySelector('.sections-grid');
    const sectionHeadings = document.querySelectorAll('.section-heading');
    const pageHeading = document.querySelector('#page-heading');

    // check if the media query is true
    if (e.matches) {
        if (pageHeading !== null) {
            pageHeading.style.fontSize = '2.5rem';
        }
        if (sectionsGrid !== null) {
            sectionsGrid.style.width = '100%';
            sectionsGrid.style.fontSize = '1rem';
        }
        if (sectionHeadings !== null) {
            sectionHeadings.forEach(heading => heading.style.fontSize = '1.5rem');
        }
    } else {
        if (pageHeading !== null) {
            pageHeading.style.fontSize = '3rem';
        }
        if (sectionsGrid !== null) {
            sectionsGrid.style.width = '75%';
            sectionsGrid.style.fontSize = '1.3rem';
        }
        if (sectionHeadings !== null) {
            sectionHeadings.forEach(heading => heading.style.fontSize = '2rem');
        }
    }
}

export { initMediaQueries, checkMediaQueries };