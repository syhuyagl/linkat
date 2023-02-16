$(document).ready(function () {
  $(".c-use__slider").slick({
    speed: 1100,
    infinite: true,
    autoplay: true,
    arrows: true,
    prevArrow: $(".c-arrow__left"),
    nextArrow: $(".c-arrow__right"),
  });
});
