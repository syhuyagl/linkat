$(document).ready(function () {
  $(".c-use__slider").slick({
    speed: 1100,
    infinite: true,
    autoplay: false,
    arrows: true,
    prevArrow: $(".c-arrow__left"),
    nextArrow: $(".c-arrow__right"),
  });
  $(".c-faq__question").click(function () {
    var answer = $(this).parent().find(".c-faq__answer");
    var icon = $(this).find('.c-faq__icon').attr("src");
    var icon_open = icon.replace("_close.", "_open.");
    var icon_close = icon.replace("_open.", "_close.");

    if (answer.hasClass("c-faq__answer--expand")) {
      answer.removeClass("c-faq__answer--expand");
      $(this).find('.c-faq__icon').attr("src", icon_close);
      answer.slideUp();
      console.log(icon_close);
    } else {
      answer.addClass("c-faq__answer--expand");
      $(this).find('.c-faq__icon').attr("src", icon_open);
      answer.slideDown();

    }
  });
});
