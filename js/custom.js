$(function(){
    $.scrollIt({
      upKey: 38,             // key code to navigate to the next section
      downKey: 40,           // key code to navigate to the previous section
      easing: 'linear',      // the easing function for animation
      scrollTime: 600,       // how long (in ms) the animation takes
      activeClass: 'active', // class given to the active nav element
      onPageChange: null,    // function(pageIndex) that is called when page is changed
      topOffset: -80           // offste (in px) for fixed top navigation
    });
});

// In ScrollIt Page Add This Script For Redirect Page And scrollTo Section
const queryString = window.location.hash.substr(1);
// console.log(queryString);
if (queryString != '') {
    $('.hideclick').attr('data-scroll-goto', queryString);
    setTimeout(function () {
        $('.hideclick').click();

    }, 600);
}
// ScrollIt End

// Navigation Toggle Start
 $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});
// Navigation Toggle End

$(window).scroll(function() {
    if($(this).scrollTop()>150) {
        $( "header" ).addClass("nav-new");
    } else {
        $( "header" ).removeClass("nav-new");
    }
});

/* **** Hero Slider **** */
$(".sponcer-list").slick({
    arrows: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 1500,
    speed: 1500,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll:1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                autoplay: true,
                slidesToScroll: 1,
            },
        },
    ],
});
/* **** End  Hero Slider **** */

/* **** Navbar **** */
$(".navbar-toggler").on("click", function () {
    $(".overlay").toggleClass("open-navigation");
});
$(".navbar-nav .nav-link").on("click", function () {
    $(".overlay").removeClass("open-navigation");
});