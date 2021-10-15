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
	threshold: 0.25,
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
