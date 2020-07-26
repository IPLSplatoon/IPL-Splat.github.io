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

const tournaments = [
	{
		title: 'Low Ink',
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae assumenda placeat harum repellat quaerat optio quidem nostrum voluptas tenetur, laboriosam, voluptatibus laborum eveniet, praesentium debitis?',
		imagePath: 'images/logo-low-ink.png'
	},
	{
		title: 'Low Ink',
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae assumenda placeat harum repellat quaerat optio quidem nostrum voluptas tenetur, laboriosam, voluptatibus laborum eveniet, praesentium debitis?',
		imagePath: 'images/logo-low-ink.png'
	},
	{
		title: 'Low Ink',
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae assumenda placeat harum repellat quaerat optio quidem nostrum voluptas tenetur, laboriosam, voluptatibus laborum eveniet, praesentium debitis?',
		imagePath: 'images/logo-low-ink.png'
	},
	{
		title: 'Low Ink',
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae assumenda placeat harum repellat quaerat optio quidem nostrum voluptas tenetur, laboriosam, voluptatibus laborum eveniet, praesentium debitis?',
		imagePath: 'images/logo-low-ink.png'
	},
	{
		title: 'Low Ink',
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae assumenda placeat harum repellat quaerat optio quidem nostrum voluptas tenetur, laboriosam, voluptatibus laborum eveniet, praesentium debitis?',
		imagePath: 'images/logo-low-ink.png'
	}
];

// Let EJS create the HTML for each element in the above array for us
let tourneyElements = ejs.render(`
	<% tournaments.forEach(tournament => { %>
	<div class="tournament">
		<img src="<%=tournament.imagePath%>">
		<div class="tournament-description">
			<h3><%=tournament.title%></h3>
			<p><%=tournament.description%></p>
		</div>
	</div>
	<% }) %>
`, {tournaments: tournaments});

document.querySelector('.tournaments-grid').innerHTML = tourneyElements;