var count = 0; // 最大重连次数
var urls = ['www.yun58.vip', '122.225.7.5:81']; // 随机上报服务器集合

// 图片加载完成进行上报，并绑定click事件
function loadUpload() {
  var ucid = $('#ucid').val();
  var area = $('#area').val();
  var mac  = $('#mac').val();
  $('.up_img').each(function(i, img) {
    $(this).closest('.up_a').on('click', function(e) {
      var adId = $(e.currentTarget).data('adid');
      var gameId = $(e.currentTarget).data('gameid');
      clickUpload(adId, gameId);
    })
  })

  $('.up_flash_a').on('click', function(e) {
    var adId = $(e.currentTarget).data('adid');
    var gameId = $(e.currentTarget).data('gameid');
    clickUpload(adId, gameId);
  })

  $(document).ready(function () {
    var paramsArr = [];
    $('.up_img').each(function(i, img) {
      var adId = $(img).data('adid');
      var gameId = $(img).data('gameid');
      // 加载上报
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
  // 点击上报
  var params = ["10000", ucid, area, mac, adId, gameId, 0, 1].join(',');
  upload(params)
}

function upload(params) {
  count++;
  var i = Math.floor(Math.random()* urls.length);
  $.ajax({
    type: 'GET',
    url: 'http://'+ urls[i] + '/uploadlog/',
    cache: true,
    dataType: 'text',
    data: encodeURIComponent(params),
    success: function(data){},
    error: function(e) {
      console.log(e.responseText)
      if (count < 10) upload(params);
    }
  });
}
