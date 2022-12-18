const burgerIcon = document.querySelector('.burger-icon');
const burgerMenu = document.querySelector('.burger-menu');
const burgerClose = document.querySelector('.burger-close');
const body = document.body;

if (burgerIcon) {
	burgerIcon.addEventListener('click', function () {
		burgerMenu.classList.add('active');
		body.classList.add('scroll');
	});
}

if (burgerClose) {
	burgerClose.addEventListener('click', function () {
		burgerMenu.classList.remove('active');
		body.classList.remove('scroll');
	});
}