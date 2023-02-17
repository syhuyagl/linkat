$(document).ready(function () {
  $(".c-use__slider").slick({
    speed: 1100,
    infinite: true,
    autoplay: true,
    arrows: true,
    prevArrow: $(".c-arrow__left"),
    nextArrow: $(".c-arrow__right"),
  });
  $(".c-faq__question").click(function () {
    var answer = $(this).parent().find(".c-faq__answer");
    var icon_close = $(this).find('.c-faq__icon').attr("src");
    var icon_open = icon_close.replace("_close.", "_open.");

    if (answer.hasClass("c-faq__answer--expand")) {
      answer.removeClass("c-faq__answer--expand");
      $(this).find('.c-faq__icon').attr("src", icon_open);
      answer.slideUp();
    } else {
      answer.addClass("c-faq__answer--expand");
      $(this).find('.c-faq__icon').attr("src", icon_close);
      answer.slideDown();
    }
  });
});
