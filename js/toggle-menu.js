function togglemenu() {
	const nav = document.getElementById("nav");
	addClass(nav);

	function addClass(nav) {
		if (nav.className === "nav") {
			nav.className += " nav--open";
		}
	}
	
	function mobileMenu() {
		const menu_toggle = document.getElementById("menu-toggle");
		menu_toggle.classList.toggle("menu-toggle--open");

		if (menu_toggle.className === "menu-toggle--open") {
			nav_open = document.querySelector(".nav--open");
			nav_open.style.transform = "scale(1)";
			nav.style.transformOrigin = "center";
		} else {
			nav.style.transform = "scale(0)";
			nav.style.transformOrigin = "top right";
		}
	}
	
	function mediaQuery(screen) {
		if (screen.matches) {
			nav_open.style.transform = "scale(1)";
		} else {
			mobileMenu();
		}
	}

	const screen = window.matchMedia("(min-width: 768px)")
	mediaQuery(screen);
	screen.addListener(mediaQuery);
}