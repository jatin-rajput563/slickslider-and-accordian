$('.one-time').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1.7,
    adaptiveHeight: true
});

$('.multiple-items').slick({
    infinite: true,
    dots:true,
    slidesToShow: 3,
    slidesToScroll: 3
});

$('.show-three').slick({
    dots: true,
    arrows:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
});