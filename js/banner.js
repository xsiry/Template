$(document).ready(function() {
  arrRandom();
  actionUrl();
  loadUpload();
});

function actionUrl() {
  // 初始化数据对象
  var data = {
    type: "",
    list: []
  }
  var defaultData = {
    type: "",
    list: []
  }
  var _fndname = '默认';
  // 可视窗口大小
  var height = $(window).height();
  var width = $(window).width();
  // 获取图片配置宽度*高度
  var imgConfig = $('.config').val().split('|')[0];
  var minConfig = $('.config').val().split('|')[1];
  var normalConfig = $('.config').val().split('|')[2];
  var maxConifg = $('.config').val().split('|')[3];

  var count = 0;

  if (width < normalConfig.split('*')[0]) {
    count = minConfig.split('*')[1];
  } else if (width >= normalConfig.split('*')[0] && width < maxConifg.split('*')[0]) {
    count = normalConfig.split('*')[1];
  } else {
    count = maxConifg.split('*')[1];
  };

  var _class = decodeURI(getParams("class"));
  if (_class != 'undefined') _fndname = _class;
  $.each(templateSource, function(i, o) {
    if (o.type == _fndname) {
      data.type = o.type;

      var tList = []; // 置顶的对象集合
      var rList = []; // 需要进行随机化的对象集合
      $.each(o.list, function(n, b) {
        if (b.top == true) {
          tList.push(b);
        } else {
          rList.push(b);
        }
      });
      if (o.random == true) { // 如果random==true，进行随机化
        rList = rList.shuffle();
      };

      var mergeList = $.merge(tList, rList);
      data.list = $.grep(mergeList, function(n,i){
                    return i < count;
                  });
      return false;
    }

    // 如果class 匹配不到使用默认列表
    if (o.type == '默认') {
      defaultData.type = o.type;

      var tList = []; // 置顶的对象集合
      var rList = []; // 需要进行随机化的对象集合
      $.each(o.list, function(n, b) {
        if (b.top == true) {
          tList.push(b);
        } else {
          rList.push(b);
        }
      });
      if (o.random == true) { // 如果random==true，进行随机化
        rList = rList.shuffle();
      };

      var mergeList = $.merge(tList, rList);
      defaultData.list = $.grep(mergeList, function(n,i){
                            return i < count;
                          });
    }
  })

  // 如果class 匹配不到使用默认列表
  if (data.type == "" && data.list.length == 0) data = defaultData;

  var html = template('banner_template', data);
  $('.content').html(html);

  $('.banner_block').css('margin-left', (width - imgConfig.split('*')[0] * count) / (count - 1));
  $('.banner_block').css('width', imgConfig.split('*')[0] + 'px');
  $('.banner_list').css('height', imgConfig.split('*')[1] + 'px');
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

function arrRandom() {
  if (!Array.prototype.shuffle) {
    Array.prototype.shuffle = function() {
      for (var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
      return this;
    };
  }
}
