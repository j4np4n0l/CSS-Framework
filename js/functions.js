// Data attribute for adding inline style for user-defined padding and margin
// Custom inline style (padding="value", margin="value") 
// const inlineStyle = (element, data_attr1, data_attr2) => {
// 	const elements = document.querySelectorAll(element);
	
// 	let element_count = 0;

// 	elements.forEach((element_tag) => {
// 		element_count++;

// 		padding = element_tag.getAttribute(data_attr1);
// 		margin = element_tag.getAttribute(data_attr2);

// 		if (padding) {
// 			element_tag.style.padding = padding;	
// 		}

// 		if (margin) {
// 			element_tag.style.margin = margin;	
// 		}

// 	});
// }

const inlineStyle = () => {
	const elements = document.querySelectorAll( 'body *' );

	element_array = 0;
	
	elements.forEach((element) => {
		element_array++;

		if (element.hasAttributes()) {
			let output = "";
			for (const attr of element.attributes) {
	        	output += `${attr.name} -> ${attr.value}\n`;	        	
	        	element.style.setProperty(attr.name, attr.value);
	        }
		}
	});
}


// Fixed header (header.fixed) & Fullpage hero (#hero.fullpage)
const headerHeightChange = () => {
	const main = document.querySelector('main');
	const header = document.querySelector('header');	
	const nav_menu = document.querySelector('nav');
	const hero = document.querySelector('.fullpage');
	const header_height = header.offsetHeight;

	if (header.classList.contains('fixed') ) {
		main.style.marginTop = `${header_height}px`;
	} else {
		main.style.marginTop = '0';
	}

	hero.style.height = `calc(100vh - ${header_height}px)`;
	nav_menu.style.top = `${header_height}px`;
}

// If .img-cover added to .img-container (.image-container.img-cover),
// it will convert the image as background of the container and
// auto-resize image when width exceeded to the size of the screen
const imgAutoresize = () => {
	const imgs = document.querySelectorAll('.img-cover img');
	const container_width = screen.width * 0.9;

	imgs.forEach((img) => {
		//convert the image as a background of the .img-container
		img.parentElement.style.backgroundImage = `url(${img.src})`;

		let img_width = img.naturalWidth;
		if (img_width >= container_width) {
			img.style.width = '100%';
		} else {
			img.style.width = 'auto';
		}
	});
}

const clog = (logtext) => {
	console.log(logtext);
}

window.addEventListener('DOMContentLoaded', headerHeightChange);
window.addEventListener('DOMContentLoaded', imgAutoresize);
window.addEventListener('DOMContentLoaded', inlineStyle);

window.addEventListener('resize', headerHeightChange);
window.addEventListener('resize', imgAutoresize);