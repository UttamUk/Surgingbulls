$(window).on('scroll', function () {
	if ($(window).scrollTop()) {
		$('.navbar').addClass('blackto');
	} else {
		$('.navbar').removeClass('blackto');
	}
})
$(document).ready(function () {
	$('.navbar-nav>li>a:not(.dropdown-toggle)').on('click', function () {
		$('.navbar-collapse').collapse('hide');
	});
});

const roadMapSec = document.querySelectorAll('.rd-bx');

const options = {
	root: null,
	threshold: 0,
	rootMargin: '-130px'
}
const observer = new IntersectionObserver(function (entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('anim');
		} else if (entry.boundingClientRect.top > 12) {
			entry.target.classList.remove('anim');
		}
		// console.log(entry.target);
		// entry.target.classList.toggle('anim');
		// observer.unobserve(entry.target);
	})
}, options);
// observer.observe(roadMapSec);
roadMapSec.forEach(section => {
	observer.observe(section);
})


const container = document.querySelector('#home-rt');
const homeCircle = document.querySelector('#home-cirlce');
const homeCircleImg = document.querySelector('.main-imp');

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.clientX) / 20;
    let yAxis = (window.innerHeight / 2 - e.clientY) / 20;
    homeCircle.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// ANIMATION IN
container.addEventListener('mouseenter', (e) => {
    homeCircle.style.transition = `none`;
    // homeCircleImg.style.transform = `translateZ(150px)`;
    // homeCircleImg.style.transform = `translateZ(200px) rotateZ(-45deg)`;
});

// STOP ANIMATION
container.addEventListener('mouseleave', (e) => {
    homeCircle.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`;
    homeCircle.style.transition = `all 400ms ease`;
    // homeCircleImg.style.transform = `translateZ(0px)`;
});