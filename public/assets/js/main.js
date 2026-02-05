/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close');

/* Menu show */
if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	});
}

/* Menu hidden */
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	});
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
	const navMenu = document.getElementById('nav-menu');
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove('show-menu');
};
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.getElementById('header');
const bgHeader = () => {
	window.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
};

/*=============== SWIPER SERVICES ===============*/
const swiperServices = new Swiper('.services__swiper', {
	loop: true,
	grabCursor: true,
	centeredSlides: true,
	autoHeight: false,
	spaceBetween: 24,
	slidesPerView: '1',

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// Additional Swiper settings
	autoplay: {
		delay: 8000,
		disableOnInteraction: true,
	},
	effect: 'slide', // 'slide', 'fade', 'flip'
	speed: 500,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
	// mousewheel: {
	// 	mousewheel: false,
	// },
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	breakpoints: {
		// 450: {
		// 	slidesPerView: 1,
		// 	spaceBetween: 0,
		// },
		540: {
			slidesPerView: 1.5,
			spaceBetween: 0,
		},
		768: {
			slidesPerView: 2.5,
			spaceBetween: 0,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 0,
		},
	},
});

/*=============== SWIPER 2 SERVICES ===============*/
const swiperPortfolio = new Swiper('.portfolio__swiper', {
	loop: true,
	grabCursor: true,
	centeredSlides: true,
	spaceBetween: 20,
	slidesPerView: '1.25',

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	mousewheel: false,
	// Additional Swiper settings
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
		reverseDirection: true,
	},
	effect: 'slide', // 'slide', 'fade', 'flip'
	speed: 500,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
	// mousewheel: {
	// 	invert: false,
	// },
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},

	breakpoints: {
		450: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		540: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		650: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 6,
			spaceBetween: 20,
		},
	},
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUpEl = document.getElementById('scroll-up');
const scrollUp = () => {
	window.scrollY >= 350 ? scrollUpEl.classList.add('show-scroll') : scrollUpEl.classList.remove('show-scroll');
};

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
	const scrollDown = window.scrollY;

	// Batch all layout reads first
	const sectionData = [];
	sections.forEach((current) => {
		const sectionId = current.getAttribute('id');
		const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
		if (link) {
			sectionData.push({
				top: current.offsetTop - 58,
				height: current.offsetHeight,
				link: link,
			});
		}
	});

	// Batch all DOM writes after
	sectionData.forEach((data) => {
		if (scrollDown > data.top && scrollDown <= data.top + data.height) {
			data.link.classList.add('active-link');
		} else {
			data.link.classList.remove('active-link');
		}
	});
};

/*=============== UNIFIED SCROLL HANDLER (rAF throttled) ===============*/
let scrollTicking = false;
const onScroll = () => {
	if (!scrollTicking) {
		scrollTicking = true;
		requestAnimationFrame(() => {
			bgHeader();
			scrollUp();
			scrollActive();
			scrollTicking = false;
		});
	}
};
window.addEventListener('scroll', onScroll, { passive: true });
bgHeader();
scrollUp();

