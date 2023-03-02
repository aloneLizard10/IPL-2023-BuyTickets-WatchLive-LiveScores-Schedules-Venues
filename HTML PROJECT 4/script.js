// Smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

// Table of Contents
const toc = document.createElement('div');
toc.id = 'toc';

const tocTitle = document.createElement('h1');
tocTitle.textContent = 'Table of Contents';

const tocList = document.createElement('ul');

const headings = document.querySelectorAll('h1');
headings.forEach((heading, index) => {
	const id = `section-${index}`;

	heading.id = id;

	const tocItem = document.createElement('li');
	const tocLink = document.createElement('a');
	tocLink.textContent = heading.textContent;
	tocLink.href = `#${id}`;
	tocLink.addEventListener('click', () => {
		toc.classList.remove('show');
	});

	tocItem.appendChild(tocLink);
	tocList.appendChild(tocItem);
});

toc.appendChild(tocTitle);
toc.appendChild(tocList);
document.body.appendChild(toc);
// Points Table button animation
const pointsTableButton = document.querySelector('#Points-Table');

pointsTableButton.addEventListener('mouseover', () => {
	pointsTableButton.classList.add('animated', 'shake');
});

pointsTableButton.addEventListener('animationend', () => {
	pointsTableButton.classList.remove('animated', 'shake');
});
// Buy Tickets button animation
const buyTicketsButton = document.querySelector('#buy-tickets');

buyTicketsButton.addEventListener('mouseover', () => {
	buyTicketsButton.classList.add('animated', 'shake');
});

buyTicketsButton.addEventListener('animationend', () => {
	buyTicketsButton.classList.remove('animated', 'shake');
});

// Live Score button animation
const liveScoreButton = document.querySelector('#live-score');

liveScoreButton.addEventListener('mouseover', () => {
	liveScoreButton.classList.add('animated', 'rotate');
});

liveScoreButton.addEventListener('animationend', () => {
	liveScoreButton.classList.remove('animated', 'rotate');
});