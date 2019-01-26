$(document).ready(function () {
  $('html').scrollTop(0);
  //$('.spinner').addClass('activate');
})

var lastScrollTop = 0;
var scrollInAction = false;
$(document).on('scrollstop', function (event) {
  // event.preventDefault();

  var st = $(this).scrollTop();
  // console.log('scrolling event trigerred...');
  if (scrollInAction) { console.log('scrolling event ignored...'); lastScrollTop = st; return; }
  scrollInAction = true;
  if (st > lastScrollTop) {
    // downscroll code

    if ($(window).scrollTop() < $('main').position().top) {
      scrollInAction = true;
      // console.log('scrolling downwards...');
      // $('html').css('overflow-y', 'hidden');
      $('html').animate({ scrollTop: $('main').position().top }, 200, 'linear', function () {
        // console.log('scroll finished');
        setTimeout(function () {
          scrollInAction = false;
          $('nav').css('top', '0px');
        }, 100);

      });
    }
    else {
      scrollInAction = false;
    }

  } else {
    // upscroll code

    if ($(window).scrollTop() < $('main').position().top) {
      scrollInAction = true;
      // console.log('scrolling upwards...');
      // $('html').css('overflow-y', 'hidden');

      $('html').animate({ scrollTop: 0 }, 200, 'linear', function () {
        // console.log('scroll finished');
        setTimeout(function () {
          scrollInAction = false;
          $('nav').css('top', '-60px');
        }, 100);
      });
    }
    else {
      scrollInAction = false;
    }
  }


  lastScrollTop = st;
});

window.onload = function () {
  
  setTimeout(function () {
    $('html').scrollTop(0);
    if ($(window).scrollTop() >= $('main').position().top){
      $('nav').css('top', '0px');

    }
    $('.loading').removeClass('loading');
  },
    5000)
}