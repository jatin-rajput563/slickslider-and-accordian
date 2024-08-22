$('.one-time').slick({
    dots: true,
    infinite: true,
    autoPlay: true,
    speed: 300,
    slidesToShow: 1.7,
    slidesToScroll: 1,
    centerMode: false,
    autoplayspeed: 2000,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),

    responsive: [

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 786,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

});

$('.multiple-items').slick({
    infinite: true,
    autoPlay: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    // autoplayspeed: 2000,
    // autoplay: true,
    centerpadding: '60px',

    responsive: [

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 786,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.show-three').slick({
    dots: true,
    infinite: true,
    centerMode: true,
    centerpadding: '60px',
    autoPlay: true,
    autoplayspeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 786,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});