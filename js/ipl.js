const headerElem = document.querySelector('.site-header');
const pageContent = document.querySelector('.page-content');
const sidebarWidth = '55px';

var mobileMenuShown = false;


headerElem.addEventListener('mouseover', () => {
    // Move over page content if header is hovered on
    // and we're not on mobile

    // I'm like 90% sure this can't be done with css
    if (window.innerWidth > 576) {
        let sidebarExpandedWidth = '160px';
        pageContent.style.marginLeft = sidebarExpandedWidth;
    }
});

headerElem.addEventListener('mouseout', () => {
    // Header closing anim
    if (window.innerWidth > 576) {
        pageContent.style.marginLeft = sidebarWidth;
    }
});

window.addEventListener('resize', () => {
    // When the window gets resized, make sure appropriate styles
    // for the window size are given

    // This is here because CSS media queries don't change styles given out by JavaScript.
    if (window.innerWidth < 576) {
        pageContent.style.marginLeft = '0px';
        if (!mobileMenuShown) {
            headerElem.style.height = '45px';
        }
        document.querySelector('nav').style.display = 'none';
        document.querySelector('.sidebar-socials').style.display = 'none';
    } else {
        pageContent.style.marginLeft = sidebarWidth;
        headerElem.style.height = '100%';
        document.querySelector('nav').style.display = 'flex';
        document.querySelector('.sidebar-socials').style.display = 'flex';
    }
});

function toggleMobileMenu() {
    // Do nothing if we're on desktop
    if (window.innerWidth > 576) return;

    if (!mobileMenuShown) {
        headerElem.style.height = '100%';
        headerElem.style.overflowY = 'visible'

        // Fix for Safari - works fine but could be smoothed out further
        document.querySelector('nav').style.display = 'flex';
        document.querySelector('.sidebar-socials').style.display = 'flex';

        mobileMenuShown = true;
    } else {
        headerElem.style.height = '45px';
        headerElem.style.overflowY = 'hidden'

        document.querySelector('nav').style.display = 'none';
        document.querySelector('.sidebar-socials').style.display = 'none';

        mobileMenuShown = false;
    }
}
