import loadInitalPage from './load-initial-page';
import loadHomePage from './load-home-page';
import loadMenuPage from './load-menu-page';
import loadContactPage from './load-contact-page';

loadInitalPage();

const tabs = document.querySelectorAll('[data-tab-target]');

tabs.foreach(tab => {
    tab.addeventlistener('click', () => {
        // remove div#content
        document.getelementbyid('content').remove();

        // reset styles and remove active-tab class
        tabs.foreach(tab => {
            tab.style.csstext = 'width: 200px; display: grid; place-items: center; background-color: rgb(189, 195, 199); cursor: pointer;';
            tab.classlist.remove('active-tab');
        });

        tab.classlist.add('active-tab');

        // set active-tab styles
        tab.style.backgroundcolor = '#fff'
        tab.style.fontsize = '1.3rem';

        // load the target page
        switch (tab.dataset.tabtarget) {
            case 'home':
                loadhomepage();
                break;
            case 'menu':
                loadmenupage();
                break;
            case 'contact':
                loadcontactpage();
                break;
            default:
                loadhomepage();
                break;
        }
    });
});
