$(document).ready(function() {
  actionUrl();
  loadUpload();
});

function actionUrl() {
  // 初始化数据对象
  var data = {
    type: "",
    list: []
  };

  var _fndname = decodeURI(getParams("class"));
  if (_fndname == 'undefined') _fndname = '默认';
  $.each(dataSource, function(i, o) {
    if (o.type == _fndname) {
      data = o;
      return false;
    }
  })

  var html = template('banner_template', data);
  $('.content').html(html);

  // 配置显示尺寸
  $('.banner_list').css('height', $('#height').val() + 'px');
  $('.banner_block').css('width', $('#width').val() + 'px');
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
