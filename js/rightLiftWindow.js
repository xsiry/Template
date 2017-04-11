var num = 0;
var sec = 6;
var interval;


$(document).ready(function() {
  init();
  loadUpload();
});

function init() {
  var width = $(window).width();
  var height = $(window).height();
  templateSource.imgConfig = {
    width: width,
    height: height
  };
  var html = template('lift_win_template', templateSource);
  $('.content').html(html);
  interval = setInterval(queueingArr, sec * 1000);

  $('.progress_bottom_win').css('-webkit-animation', 'progress_bottom_act ' + sec + 's infinite linear');
  $('.progress_bottom_win').css('-moz-animation', 'progress_bottom_act ' + sec + 's infinite linear');
  $('.progress_bottom_win').css('-o-animation', 'progress_bottom_act ' + sec + 's infinite linear');
  $('.progress_bottom_win').css('-ms-animation', 'progress_bottom_act ' + sec + 's infinite linear');
  $('.progress_bottom_win').css('animation', 'progress_bottom_act ' + sec + 's infinite linear');

  $('.lift_win').hover(function() {
    clearInterval(interval);
    $('.progress_bottom_win').css('-webkit-animation', '');
    $('.progress_bottom_win').css('-moz-animation', '');
    $('.progress_bottom_win').css('-o-animation', '');
    $('.progress_bottom_win').css('-ms-animation', '');
    $('.progress_bottom_win').css('animation', '');
  }, function() {
    interval = setInterval(queueingArr, sec * 1000);
    $('.progress_bottom_win').css('-webkit-animation', 'progress_bottom_act ' + sec + 's infinite linear');
    $('.progress_bottom_win').css('-moz-animation', 'progress_bottom_act ' + sec + 's infinite linear');
    $('.progress_bottom_win').css('-o-animation', 'progress_bottom_act ' + sec + 's infinite linear');
    $('.progress_bottom_win').css('-ms-animation', 'progress_bottom_act ' + sec + 's infinite linear');
    $('.progress_bottom_win').css('animation', 'progress_bottom_act ' + sec + 's infinite linear');
  });
}

function queueingArr() {
  num++;
  if (num >= templateSource.list.length) num = 0;
  $('.img_a').hide();
  $('.img_a').css('-webkit-animation', '');
  $('.img_a_' + num).show();
  $('.img_a_' + num).css('-webkit-animation', 'img_act 1s linear forwards');
}