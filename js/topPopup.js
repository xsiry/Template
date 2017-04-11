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
  var html = template('top_popup_template', templateSource);
  $('.content').html(html);
  $('.num').text(templateSource.list.length);
  interval = setInterval(queueingArr, sec * 1000);

  $('.progress_bottom_win').css('-webkit-animation', 'progress_bottom_act ' + sec + 's infinite linear');
  $('.progress_bottom_win').css('-moz-animation', 'progress_bottom_act ' + sec + 's infinite linear');
  $('.progress_bottom_win').css('-o-animation', 'progress_bottom_act ' + sec + 's infinite linear');
  $('.progress_bottom_win').css('-ms-animation', 'progress_bottom_act ' + sec + 's infinite linear');
  $('.progress_bottom_win').css('animation', 'progress_bottom_act ' + sec + 's infinite linear');

  $('.top_popup').hover(function() {
    clearInterval(interval);
    $('.left_btn').css('transform', 'translate(0px,0px)');
    $('.right_btn').css('transform', 'translate(0px,0px)');
    $('.progress_bottom_win').css('-webkit-animation', '');
    $('.progress_bottom_win').css('-moz-animation', '');
    $('.progress_bottom_win').css('-o-animation', '');
    $('.progress_bottom_win').css('-ms-animation', '');
    $('.progress_bottom_win').css('animation', '');
  }, function() {
    interval = setInterval(queueingArr, sec * 1000);
    $('.left_btn').css('transform', 'translate(-60px,0px)');
    $('.right_btn').css('transform', 'translate(60px,0px)');
    $('.progress_bottom_win').css('-webkit-animation', 'progress_bottom_act ' + sec + 's infinite linear');
    $('.progress_bottom_win').css('-moz-animation', 'progress_bottom_act ' + sec + 's infinite linear');
    $('.progress_bottom_win').css('-o-animation', 'progress_bottom_act ' + sec + 's infinite linear');
    $('.progress_bottom_win').css('-ms-animation', 'progress_bottom_act ' + sec + 's infinite linear');
    $('.progress_bottom_win').css('animation', 'progress_bottom_act ' + sec + 's infinite linear');
  });

  $('.left_btn').on('click', function() {
    num = num - 1;
    if (num < 0) num = templateSource.list.length - 1;
    choseImg(num);
  })

  $('.right_btn').on('click', function() {
    num = num + 1;
    if (num >= templateSource.list.length) num = 0;
    choseImg(num);
  })
}

function queueingArr() {
  num++;
  if (num >= templateSource.list.length) num = 0;
  choseImg(num);
}

function choseImg(num) {
  $('.img_a').hide();
  $('.img_a').css('-webkit-animation', '');
  $('.img_a').css('-moz-animation', '');
  $('.img_a').css('-o-animation', '');
  $('.img_a').css('-ms-animation', '');
  $('.img_a').css('animation', '');
  $('.img_a_' + num).show();
  $('.img_a_' + num).css('-webkit-animation', 'img_act 1s linear forwards');
  $('.img_a_' + num).css('-moz-animation', 'img_act 1s linear forwards');
  $('.img_a_' + num).css('-o-animation', 'img_act 1s linear forwards');
  $('.img_a_' + num).css('-ms-animation', 'img_act 1s linear forwards');
  $('.img_a_' + num).css('animation', 'img_act 1s linear forwards');
  $('.current').text(num + 1);
}
