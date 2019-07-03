$('.reviews .slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    draggable: false
});
$('.reviews .slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    infinite: true,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
});