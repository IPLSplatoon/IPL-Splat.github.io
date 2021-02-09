function toggleMenu() {
    const menuElem = document.querySelector('.socials-nav-wrapper');
    const menuState = (menuElem.getAttribute('aria-expanded') == 'true');
    const logoTextElem = document.querySelector('.header-ipl-logo div');
    const menuBtnElem = document.querySelector('.mobile-menu-btn');

    menuElem.setAttribute('aria-expanded', !menuState);
    
    if (menuState) {
        logoTextElem.classList.remove('menu-expanded');
        menuBtnElem.classList.remove('menu-expanded');
    } else {
        logoTextElem.classList.add('menu-expanded');
        menuBtnElem.classList.add('menu-expanded');
    }
}
