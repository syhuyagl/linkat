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
    var icon = $(this).find(".c-faq__icon").attr("src");
    var icon_open = icon.replace("_close.", "_open.");
    var icon_close = icon.replace("_open.", "_close.");

    if (answer.hasClass("c-faq__answer--expand")) {
      answer.removeClass("c-faq__answer--expand");
      $(this).find(".c-faq__icon").attr("src", icon_close);
      answer.slideUp();
      console.log(icon_close);
    } else {
      answer.addClass("c-faq__answer--expand");
      $(this).find(".c-faq__icon").attr("src", icon_open);
      answer.slideDown();
    }
  });
  function disableScroll() {
    var ycoord = $(window).scrollTop();
    $(".c-header__overlay").data("ycoord", ycoord);
    ycoord = ycoord * -1;
    $("body")
      .css("position", "fixed")
      .css("left", "0px")
      .css("right", "0px")
      .css("top", ycoord + "px");
  }
  function enableScroll() {
    $("body")
      .css("position", "")
      .css("left", "auto")
      .css("right", "auto")
      .css("top", "auto");
    $(window).scrollTop($(".c-header__overlay").data("ycoord"));
  }
  $(".c-header__menuicon").click(function () {
    if (!$(".c-header__overlay").hasClass("c-header__overlay--active")) {
      $(".c-header__overlay").addClass("c-header__overlay--active");
      disableScroll();
    } else {
      $(".c-header__overlay").removeClass("c-header__overlay--active");
      enableScroll();
    }
  });
  $(".c-header__navlink a").click(function () {
    var href = $(this).attr("href");
    $(".c-header__overlay").removeClass("c-header__overlay--active");
    enableScroll()
    $("html, body").animate(
      {
        scrollTop: $(href).offset().top,
      },
      "1000"
    );
  });
  $(".c-footer__link").click(function () {
    var href = $(this).attr("href");
    $(".c-header__overlay").removeClass("c-header__overlay--active");
    enableScroll()
    $("html, body").animate(
      {
        scrollTop: $(href).offset().top,
      },
      "1000"
    );
  });
  const $checkbox = $('#accept');
  const $link = $('.c-notes__home');

  $checkbox.on('change', function() {
    if ($checkbox.prop('checked')) {
      $link.removeClass('disabled');
    } else {
      $link.addClass('disabled');
    }
  });
});
