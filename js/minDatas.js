var _num = 0;
var _deNum = 4;
var _numTotal = templateSource.imgShowNum || ((templateSource.imgs.list.length < _deNum) ? templateSource.imgs.list.length : _deNum);
var _sec = templateSource.imgSec || 4;
var _imgRandom = templateSource.imgRandom || false;
var _interval;


$(document).ready(function() {
  arrRandom();
  init();
  loadUpload();
});

$(window).resize(function () {
  init();
})

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

  var status = true;
  do {
    var type = Math.floor(Math.random()* 3);
    if (type == 0) {
      status = (templateSource.iframes && templateSource.iframes.length > 0);
      if (status) {
        var iIndex = Math.floor(Math.random() * templateSource.iframes.length);
        tSource.iframe.url = templateSource.iframes[iIndex].url;
      };
    }else if(type == 2) {
      status = (templateSource.flashs && templateSource.flashs.length > 0);
      if (status) {
        var fIndex = Math.floor(Math.random() * templateSource.flashs.length);
        tSource.flash.url = templateSource.flashs[fIndex].url;
      };
    }else if(type == 1){
      var rList = [];
      var sList = templateSource.imgs.list;
      status = (sList) && (sList.length > 0);
      if (status) {
        if (templateSource.imgs.imgRandom == true) {
          sList = sList.shuffle();
        }

        rList = sList.slice(0, _numTotal)
        tSource.list = rList;
      }
    }
  }
  while (!status);


  var html = template('top_popup_template', tSource);
  $('.content').html(html);
  $('.num').text(_numTotal);
  _interval = setInterval(queueingArr, _sec * 1000);

  $('.progress_bottom_win').css('-webkit-animation', 'progress_bottom_act ' + _sec + 's infinite linear');
  $('.progress_bottom_win').css('-moz-animation', 'progress_bottom_act ' + _sec + 's infinite linear');
  $('.progress_bottom_win').css('-o-animation', 'progress_bottom_act ' + _sec + 's infinite linear');
  $('.progress_bottom_win').css('-ms-animation', 'progress_bottom_act ' + _sec + 's infinite linear');
  $('.progress_bottom_win').css('animation', 'progress_bottom_act ' + _sec + 's infinite linear');

  $('.top_popup').hover(function() {
    clearInterval(_interval);
    $('.left_btn').css('transform', 'translate(0px,0px)');
    $('.right_btn').css('transform', 'translate(0px,0px)');
    $('.progress_bottom_win').css('-webkit-animation', '');
    $('.progress_bottom_win').css('-moz-animation', '');
    $('.progress_bottom_win').css('-o-animation', '');
    $('.progress_bottom_win').css('-ms-animation', '');
    $('.progress_bottom_win').css('animation', '');
  }, function() {
    _interval = setInterval(queueingArr, _sec * 1000);
    $('.left_btn').css('transform', 'translate(-60px,0px)');
    $('.right_btn').css('transform', 'translate(60px,0px)');
    $('.progress_bottom_win').css('-webkit-animation', 'progress_bottom_act ' + _sec + 's infinite linear');
    $('.progress_bottom_win').css('-moz-animation', 'progress_bottom_act ' + _sec + 's infinite linear');
    $('.progress_bottom_win').css('-o-animation', 'progress_bottom_act ' + _sec + 's infinite linear');
    $('.progress_bottom_win').css('-ms-animation', 'progress_bottom_act ' + _sec + 's infinite linear');
    $('.progress_bottom_win').css('animation', 'progress_bottom_act ' + _sec + 's infinite linear');
  });

  $('.left_btn').on('click', function() {
    _num = _num - 1;
    if (_num < 0) _num = _numTotal - 1;
    choseImg(_num);
  })

  $('.right_btn').on('click', function() {
    _num = _num + 1;
    if (_num >= _numTotal) _num = 0;
    choseImg(_num);
  })
}

function queueingArr() {
  _num++;
  if (_num >= _numTotal) _num = 0;
  choseImg(_num);
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
      return this;
    };
  }
}
