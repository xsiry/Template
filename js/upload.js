// 图片加载完成进行上报，并绑定click事件
function loadUpload() {
  $('.up_img').each(function(i, img) {
    $(this).on('load', function(e) {
      var number = $(e.currentTarget).attr('number');
      var params = 'load|'+ number;
      upload(params)
    })
    $(this).closest('.up_a').on('click', function(e) {
      var number = $(e.currentTarget).attr('number');
      clickUpload(number);
    })
  })
}
// 图片点击进行上报
function clickUpload(number) {
  var params = 'click|'+ number;
  upload(params)
}

function upload(params) {
  $.ajax({
    type: 'GET',
    url: 'http://www.yun58.vip/uploadlog/',
    dataType: 'text',
    data: {upload: params},
    success: function(){},
    error: function(e) {
      console.log(e);
    }
  });
}
