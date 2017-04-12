$(document).ready(function() {
  actionUrl();
  loadUpload();
});

function actionUrl() {
  // 初始化数据对象
  var data = {
    type: "",
    list: []
  }
  var _fndname = decodeURI(getParams("class"));
  if (_fndname == 'undefined') _fndname = '默认';
  $.each(templateSource, function(i, o) {
    if (o.type == _fndname) {
      data = o;
      return false;
    }
  })

  var html = template('banner_template', data);
  $('.content').html(html);

  // 根据可视尺寸，自适应宽度
  var height = $(window).height();
  var width = $(window).width();
  var maxWidth = $('.max').val().split('*')[0];
  var maxCount = $('.max').val().split('*')[2];
  var normalWidth = $('.normal').val().split('*')[0];
  var normalCount = $('.normal').val().split('*')[2];
  var minWidth = $('.min').val().split('*')[0];
  var minCount = $('.min').val().split('*')[2];
  var showLevel = {$maxWidth: maxCount, normalWidth: normalCount, minWidth: minCount};
  var count = 0;
  if (width == maxWidth) count = maxCount;
  if (width == normalWidth) count = normalCount;
  if (width == minWidth) count = minCount;

  $('.banner_block').css('width', (width-(count-1)*7)/count);
  $('.banner_list').css('height', height + 'px');
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
