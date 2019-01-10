$(document).ready(function () {

  $('.spinner').addClass('activate');
})

window.onload = function () {

  setTimeout(function () {

    $('.loading').removeClass('loading');
  },
    5000)
}