$('.reviews .slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    draggable: false,
    swipe: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                adaptiveHeight: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                swipe: true,
                adaptiveHeight: true,
                prevArrow: '<button class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="40" viewBox="0 0 18 40"><path d="M7.983 0h2.034v.586L18 8.435l-1.439 1.414-6.544-6.435V40H7.983V3.414L1.438 9.849 0 8.435 7.983.585z"/></svg></button>',
                nextArrow: '<button class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="40" viewBox="0 0 18 40"><path d="M7.983 0h2.034v.586L18 8.435l-1.439 1.414-6.544-6.435V40H7.983V3.414L1.438 9.849 0 8.435 7.983.585z"/></svg></button>'
            }
        }
    ]
});
$('.reviews .slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    infinite: true,
    asNavFor: '.slider-for',
    dots: true,
    swipe: false,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: '<button class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="40" viewBox="0 0 18 40"><path d="M7.983 0h2.034v.586L18 8.435l-1.439 1.414-6.544-6.435V40H7.983V3.414L1.438 9.849 0 8.435 7.983.585z"/></svg></button>',
    nextArrow: '<button class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="40" viewBox="0 0 18 40"><path d="M7.983 0h2.034v.586L18 8.435l-1.439 1.414-6.544-6.435V40H7.983V3.414L1.438 9.849 0 8.435 7.983.585z"/></svg></button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                vertical: false
            }
        }
    ]
});