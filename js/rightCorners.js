var _num = 0;
var _deNum = 4;
var _numTotal = templateSource.imgs.imgShowNum || ((templateSource.imgs.list.length < _deNum) ? templateSource.imgs.list.length : _deNum);
var _sec = templateSource.imgs.imgSec || 4;
var _imgRandom = templateSource.imgs.imgRandom || false;
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
        var iWidth = templateSource.iframes[iIndex].width;
        var iHeight = templateSource.iframes[iIndex].height;
        $('#k').val(iWidth+','+ iHeight);
      }
    }else if(type == 2) {
      status = (templateSource.flashs && templateSource.flashs.length > 0);
      if (status) {
        var fIndex = Math.floor(Math.random() * templateSource.flashs.length);
        tSource.flash.url = templateSource.flashs[fIndex].url;
        var iWidth = templateSource.flashs[fIndex].width;
        var iHeight = templateSource.flashs[fIndex].height;
        $('#k').val(iWidth+','+ iHeight);
      }
    }else if(type == 1){
      var fWidth = templateSource.imgs.width;
      var fHeight = templateSource.imgs.height;
      $('#k').val(fWidth+','+ fHeight);
      var rList = [];
      var sList = templateSource.imgs.list;
      status = (sList) && (sList.length > 0);
      if (status) {
        if (_imgRandom == true) {
          sList = sList.shuffle();
        }

        rList = sList.slice(0, _numTotal)
        tSource.list = rList;
      }
    }
  }
  while (!status);
  var html = template('lift_win_template', tSource);
  $('.content').html(html);
  _interval = setInterval(queueingArr, _sec * 1000);

  $('.progress_bottom_win').css('-webkit-animation', 'progress_bottom_act ' + _sec + 's infinite linear');
  $('.progress_bottom_win').css('-moz-animation', 'progress_bottom_act ' + _sec + 's infinite linear');
  $('.progress_bottom_win').css('-o-animation', 'progress_bottom_act ' + _sec + 's infinite linear');
  $('.progress_bottom_win').css('-ms-animation', 'progress_bottom_act ' + _sec + 's infinite linear');
  $('.progress_bottom_win').css('animation', 'progress_bottom_act ' + _sec + 's infinite linear');

  $('.lift_win').hover(function() {
    clearInterval(_interval);
    $('.progress_bottom_win').css('-webkit-animation', '');
    $('.progress_bottom_win').css('-moz-animation', '');
    $('.progress_bottom_win').css('-o-animation', '');
    $('.progress_bottom_win').css('-ms-animation', '');
    $('.progress_bottom_win').css('animation', '');
  }, function() {
    _interval = setInterval(queueingArr, _sec * 1000);
    $('.progress_bottom_win').css('-webkit-animation', 'progress_bottom_act ' + _sec + 's infinite linear');
    $('.progress_bottom_win').css('-moz-animation', 'progress_bottom_act ' + _sec + 's infinite linear');
    $('.progress_bottom_win').css('-o-animation', 'progress_bottom_act ' + _sec + 's infinite linear');
    $('.progress_bottom_win').css('-ms-animation', 'progress_bottom_act ' + _sec + 's infinite linear');
    $('.progress_bottom_win').css('animation', 'progress_bottom_act ' + _sec + 's infinite linear');
  });
}

function queueingArr() {
  _num++;
  if (_num >= _numTotal) _num = 0;
  $('.img_a').hide();
  $('.img_a').css('-webkit-animation', '');
  $('.img_a').css('-moz-animation', '');
  $('.img_a').css('-o-animation', '');
  $('.img_a').css('-ms-animation', '');
  $('.img_a').css('animation', '');
  $('.img_a_' + _num).show();
  $('.img_a_' + _num).css('-webkit-animation', 'img_act 1s linear forwards');
  $('.img_a_' + _num).css('-moz-animation', 'img_act 1s linear forwards');
  $('.img_a_' + _num).css('-o-animation', 'img_act 1s linear forwards');
  $('.img_a_' + _num).css('-ms-animation', 'img_act 1s linear forwards');
  $('.img_a_' + _num).css('animation', 'img_act 1s linear forwards');
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
