$(function () {
// banner slider js
$('#banner').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 2,

  });


// feed top slider js
$('.top-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,

});

// feed btm slider js
$('.btm-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0',

});
});