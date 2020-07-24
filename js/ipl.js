const headerElem = document.querySelector('.site-header');
const pageContent = document.querySelector('.page-content');
const sidebarWidth = '55px';

var mobileMenuShown = false;

headerElem.addEventListener('mouseover', () => {
	if (window.innerWidth > 576) {
		let sidebarExpandedWidth = '160px';
		pageContent.style.marginLeft = sidebarExpandedWidth;
	}
});

headerElem.addEventListener('mouseout', () => {
	if (window.innerWidth > 576) {
		pageContent.style.marginLeft = sidebarWidth;
	}
});

window.addEventListener('resize', () => {
	if (window.innerWidth < 576) {
		pageContent.style.marginLeft = '0px';
		if (!mobileMenuShown) {
			headerElem.style.height = '45px';
		}
	} else {
		pageContent.style.marginLeft = sidebarWidth;
		headerElem.style.height = '100%';
	}
});

function toggleMobileMenu() {
	if (!mobileMenuShown) {
		headerElem.style.height = '100%';
		headerElem.style.overflowY = 'visible'
		mobileMenuShown = true;
	} else {
		headerElem.style.height = '45px';
		headerElem.style.overflowY = 'hidden'
		mobileMenuShown = false;
	}
}