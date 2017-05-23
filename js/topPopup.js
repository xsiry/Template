var num = 0;
var deNum = 4;
var numTotal = templateSource.imgShowNum || ((templateSource.list.length < deNum) ? templateSource.list.length : deNum);
var sec = templateSource.imgSec || 4;
var imgRandom = templateSource.imgRandom || false;
var interval;


$(document).ready(function() {
  arrRandom();
  init();
  loadUpload();
});

function init() {
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

  if (!templateSource.iframe && !templateSource.iframe.url && !templateSource.flash && !templateSource.flash.url && !templateSource.list && templateSource.list.length == 0) {
    return;
  }

  var status = true;
  do {
    var type = Math.floor(Math.random()* 3);
    if (type == 0) {
      status = (templateSource.iframe && templateSource.iframe.url);
      if (status) tSource.iframe = templateSource.iframe;
    }else if(type == 2) {
      status = (templateSource.flash && templateSource.flash.url);
      if (status) tSource.flash = templateSource.flash;
    }else if(type == 1){
      var rList = [];
      var sList = templateSource.list;
      status = (sList) && (sList.length > 0);
      if (status) {
        if (imgRandom == true) {
          sList = sList.shuffle();
        }

        rList = sList.slice(0, numTotal)
        tSource.list = rList;
      }
    }
  }
  while (!status);


  var html = template('top_popup_template', tSource);
  $('.content').html(html);
  $('.num').text(numTotal);
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
    if (num < 0) num = numTotal - 1;
    choseImg(num);
  })

  $('.right_btn').on('click', function() {
    num = num + 1;
    if (num >= numTotal) num = 0;
    choseImg(num);
  })
}

function queueingArr() {
  num++;
  if (num >= numTotal) num = 0;
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
