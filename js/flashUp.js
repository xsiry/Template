var _class = decodeURI(getParams("class"));
var _size = decodeURI(getParams("size"));

$(document).ready(function() {
  init();
  loadUpload();
});

function init() {
  var tsource = {
    flash: {
      url: '',
      clickUrl: '',
      adId: '',
      gameId: ''
    },
    img: {
      url: '',
      clickUrl: '',
      adId: '',
      gameId: ''
    }
  }
  $.each(source, function(i, o) {
    if (o.type == _class) {
      if (o.flash) {
        tsource.flash.url = o.flash.urls[_size];
        tsource.flash.clickUrl = o.flash.clickUrl;
        tsource.flash.adId = o.flash.adId;
        tsource.flash.gameId = o.flash.gameId;
      }
      if(o.img) tsource.img = o.img ;
    }
  })
  var html = template('flash_template', tsource);
  $('.content').html(html);

  if (tsource.flash.url != '') {
    var ucid = $('#ucid').val();
    var area = $('#area').val();
    var mac  = $('#mac').val();
    var adId = $('.up_flash_a').data('adid');
    var gameId = $('.up_flash_a').data('gameid');
    var params = [10000, ucid, area, mac, adId, gameId, 1, 0].join(',');
    upload(params);
  }
}

// url传参数变化类别
function getParams(fndname) {
  var url = location.search; //一般的查询
  var query = url.substr(url.indexOf("?") + 1);
  var pairs = query.split("&"); //在逗号处断开
  for (var i = 0; i < pairs.length; i++) {
    var pos = pairs[i].indexOf('='); //查找name=value
    if (pos == -1)
      continue; //如果没有找到就跳过
    var argname = pairs[i].substring(0, pos); //提取name
    var value = pairs[i].substring(pos + 1); //提取value
    if (argname == fndname)
      return value;
  }
}