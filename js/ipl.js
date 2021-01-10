function toggleMenu() {
    const menuElem = document.querySelector('.socials-nav-wrapper');
    const menuState = (menuElem.getAttribute('aria-expanded') == 'true');

    menuElem.setAttribute('aria-expanded', !menuState);
}
