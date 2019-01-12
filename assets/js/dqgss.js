$(document).ready(function () {
  $('.spinner').addClass('activate');
})

var lastScrollTop = 0;
var scrollInAction = false;
$(window).scroll(function (event) {
  var st = $(this).scrollTop();
  
  if (scrollInAction) { return; }

  if (st > lastScrollTop) {
    // downscroll code

    if ($(window).scrollTop() < $('main').position().top) {
      scrollInAction = true;
      $('html').animate({ scrollTop: $('main').position().top }, 400, 'swing', function () {
        scrollInAction = false;
      });
    }

  } else {
    // upscroll code

    if ($(window).scrollTop() < $('main').position().top) {
      scrollInAction = true;
      $('html').animate({ scrollTop: 0 }, 400, 'swing', function () {
        scrollInAction = false;
      });
    }
  }
  lastScrollTop = st;
});

window.onload = function () {

  setTimeout(function () {

    $('.loading').removeClass('loading');
  },
    5000)
}