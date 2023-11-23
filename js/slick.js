$('.team-slick').slick({
	arrows: false,
	autoplay: true,
	mobileFirst: true,
	slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [
		{
			breakpont: 768,
			settings: {
				slidesToShow: 2,
			},
		},
	],
})
