import loadHomePage from './load-home-page';
import initMediaQuery from './media-query';

const loadInitialPage = () => {
    initPage();
    loadHomePage();
}

const initPage = () => {
    // main#container
    const mainContainer = document.createElement('main');
    mainContainer.id = 'container';
    mainContainer.style.margin = '2rem auto';
    mainContainer.style.maxWidth = '1000px';
    mainContainer.style.backgroundColor = '#fff';

    // tab bar
    const tabBar = document.createElement('ul');
    tabBar.style.display = 'flex';
    tabBar.style.listStyleType = 'none';
    tabBar.style.height = '50px';
    tabBar.style.backgroundColor = '#2c3e50';

    // home tab
    const homeTab = document.createElement('li');
    homeTab.classList.add('active-tab');
    homeTab.dataset.tabTarget = 'home';
    homeTab.textContent = 'Home';

    // menu tab
    const menuTab = document.createElement('li');
    menuTab.dataset.tabTarget = 'menu';
    menuTab.textContent = 'Menu';

    // contact tab
    const contactTab = document.createElement('li');
    contactTab.dataset.tabTarget = 'contact';
    contactTab.textContent = 'Contact';

    tabBar.appendChild(homeTab);
    tabBar.appendChild(menuTab);
    tabBar.appendChild(contactTab);

    // tab styles
    tabBar.querySelectorAll('li').forEach(tab => {
        tab.style.width = '200px';
        tab.style.display = 'grid';
        tab.style.placeItems = 'center';
        tab.style.backgroundColor = '#bdc3c7';
        tab.style.cursor = 'pointer';
        tab.style.transition = 'all 0.3s';
        if (tab.classList.contains('active-tab')) {
            homeTab.style.backgroundColor = '#fff'
            homeTab.style.fontSize = '1.3rem';
        }
    });

    mainContainer.appendChild(tabBar);

    document.body.prepend(mainContainer);

    // Media queries
    const mediaQuery = window.matchMedia('(max-width: 1000px)');

    function handleScreenWidthChange(e) {
        // check if the media query is true
        if (e.matches) {
            mainContainer.style.margin = '0';
        } else {
            mainContainer.style.margin = '2rem auto';
        }
    }

    initMediaQuery(mediaQuery, handleScreenWidthChange);
};

export default loadInitialPage;
