var num = 0;
var sec = templateSource.imgSec;
var interval;


$(document).ready(function() {
  arrRandom();
  init();
  loadUpload();
});

function init() {
  var type = Math.floor(Math.random()*3);
  var width = $(window).width();
  var height = $(window).height();

  tSource = {
    imgConfig: {
      width: width,
      height: height
    },
    iframe: {
      url: ''
    },
    flash: {
      url: ''
    },
    list: []
  }

  if (type == 0) {
    tSource.iframe = templateSource.iframe;
  }else if(type == 1) {
    tSource.flash = templateSource.flash;
  }else if(type == 2){
    var rList = [];
    var sList = templateSource.list;
    if (templateSource.imgRandom == true) {
      sList = sList.shuffle();
    }
    rList = sList.slice(0, templateSource.imgShowNum)
    tSource.list = rList;
  }

  var html = template('top_popup_template', tSource);
  $('.content').html(html);
  $('.num').text(templateSource.imgShowNum);
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
    if (num < 0) num = templateSource.imgShowNum - 1;
    choseImg(num);
  })

  $('.right_btn').on('click', function() {
    num = num + 1;
    if (num >= templateSource.imgShowNum) num = 0;
    choseImg(num);
  })
}

function queueingArr() {
  num++;
  if (num >= templateSource.imgShowNum) num = 0;
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

function arrRandom() {
  if (!Array.prototype.shuffle) {
    Array.prototype.shuffle = function() {
      for (var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);

      // for (var i = 0; i < this.length; i) {
      //   var j = parseInt(Math.random() * i);
      //   var x = this[i];
      //   this[i++] = this[j];
      //   this[j] = x;
      // }
      return this;
    };
  }
}
