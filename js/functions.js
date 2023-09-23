headerHeightChange();
imgAutoresize();
window.addEventListener('resize', headerHeightChange);
window.addEventListener('resize', imgAutoresize);

// img-cover class
document.addEventListener('DOMContentLoaded', () => {
  for (const img of document.querySelectorAll('.img-cover img')) {
    img.parentElement.style.backgroundImage = `url(${img.src})`;
  }
})

// Data attribute for adding style for user-defined padding and margin
elementStyle('section', 'padding', 'margin');
elementStyle('.row', 'padding', 'margin');
elementStyle('.column', 'padding', 'margin');

function elementStyle(element, data_attr1, data_attr2) {
	const elements = document.querySelectorAll(element);

	elements.forEach((element_tag) => {
		padding = element_tag.getAttribute(data_attr1);

		if (padding) {
			element_tag.style.padding = padding;
		}

		margin = element_tag.getAttribute(data_attr2);

		if (margin) {
			element_tag.style.margin = margin;
		}
	});
}

// Fixed header & Fullpage hero
function headerHeightChange() {
	const main = document.querySelector('main');
	const header = document.querySelector('header');	
	const nav_menu = document.querySelector('nav');
	const hero = document.querySelector('.fullpage');
	let header_height = header.offsetHeight;

	if (header.classList.contains('fixed') ) {
		main.style.marginTop = header_height + 'px';
	} else {
		main.style.marginTop = '0';
	}

	hero.style.height = 'calc(100vh - ' + header_height + 'px)';
	nav_menu.style.top = header_height + 'px';
}

// Auto-resize image when width exceeded to the size of the screen
function imgAutoresize() {
	const imgs = document.querySelectorAll('.img-cover img');
	let container_width = screen.width * 0.9;

	imgs.forEach((img) => {
		let img_width = img.naturalWidth;
		if (img_width >= container_width) {
			img.style.width = '100%';
		} else {
			img.style.width = 'auto';
		}
	});
}