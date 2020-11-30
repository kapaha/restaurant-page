import loadInitalPage from './load-initial-page';
import loadHomePage from './load-home-page';
import loadMenuPage from './load-menu-page';
import loadContactPage from './load-contact-page';
import { checkMediaQueries } from './media-query';

loadInitalPage();

const tabs = document.querySelectorAll('[data-tab-target]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // remove div#content
        document.getElementById('content').remove();

        // for all tabs
        // reset styles and remove active-tab class
        tabs.forEach(tab => {
            tab.style.backgroundColor = 'rgb(189, 195, 199)';
            tab.style.fontSize = '1rem';
            tab.classList.remove('active-tab');
        });

        // for clicked tab
        // set active-tab styles and add active-tab class
        tab.style.backgroundColor = '#fff'
        tab.style.fontSize = '1.3rem';
        tab.classList.add('active-tab');

        // load the target page
        switch (tab.dataset.tabTarget) {
            case 'home':
                loadHomePage();
                break;
            case 'menu':
                loadMenuPage();
                break;
            case 'contact':
                loadContactPage();
                break;
            default:
                loadHomePage();
                break;
        }

        checkMediaQueries();
    });
});
