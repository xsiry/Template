// 图片加载完成进行上报，并绑定click事件
function loadUpload() {
  var ucid = $('#ucid').val();
  var area = $('#area').val();
  var mac  = $('#mac').val();
  $('.up_img').each(function(i, img) {
    $(this).closest('.up_a').on('click', function(e) {
      var adId = $(e.currentTarget).attr('adId');
      var gameId = $(e.currentTarget).attr('gameId');
      clickUpload(adId, gameId);
    })
  })

  $(document).ready(function () {
    var paramsArr = [];
    $('.up_img').each(function(i, img) {
      var adId = $(img).attr('adId');
      var gameId = $(img).attr('gameId');
      var params = [10000, ucid, area, mac, adId, gameId, 1, 0].join(',');
      paramsArr.push(params);
    });
    upload(paramsArr.join('#'));
  });
}
// 图片点击进行上报
function clickUpload(adId, gameId) {
  var ucid = $('#ucid').val();
  var area = $('#area').val();
  var mac  = $('#mac').val();
  var params = ["10000", ucid, area, mac, adId, gameId, 0, 1].join(',');
  upload(params)
}

function upload(params) {
  var urls = ['www.yun58.vip', '122.225.7.5:81'];
  var pass = false;
  do{
    var i = Math.floor(Math.random()* urls.length)
    $.ajax({
      type: 'GET',
      url: 'http://'+ urls[i] + '/uploadlog/',
      cache: true,
      dataType: 'text',
      data: encodeURIComponent(params),
      success: function(data){
        pass = true;
      },
      error: function(e) {
        console.log(e)
        pass = false;
      }
    });
  } while (pass);
}
