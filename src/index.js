import loadInitalPage from './load-initial-page';
import loadHomePage from './load-home-page';
import loadMenuPage from './load-menu-page';
import loadContactPage from './load-contact-page';

loadInitalPage();

const tabs = document.querySelectorAll('[data-tab-target]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // remove div#content
        document.getElementById('content').remove();

        // reset styles and remove active-tab class
        tabs.forEach(tab => {
            tab.style.cssText = 'width: 200px; display: grid; place-items: center; background-color: rgb(189, 195, 199); cursor: pointer;';
            tab.classList.remove('active-tab');
        });

        tab.classList.add('active-tab');

        // set active-tab styles
        tab.style.backgroundColor = '#fff'
        tab.style.fontSize = '1.3rem';

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
    });
});
