// 图片加载完成进行上报，并绑定click事件
function loadUpload() {
  var ucid = $('#ucid').val();
  var area = $('#area').val();
  var mac  = $('#mac').val();
  $('.up_img').each(function(i, img) {
    $(this).on('load', function(e) {
      var adId = $(e.currentTarget).attr('adId');
      var gameId = $(e.currentTarget).attr('gameId');
      var params = [10000, ucid, area, mac, adId, gameId, 1, 0].join(',');
      upload(params)
    })
    $(this).closest('.up_a').on('click', function(e) {
      var adId = $(e.currentTarget).attr('adId');
      var gameId = $(e.currentTarget).attr('gameId');
      clickUpload(adId, gameId);
    })
  })
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
  alert(params);
  // $.ajax({
  //   type: 'GET',
  //   url: 'http://www.yun58.vip/uploadlog/',
  //   dataType: 'text',
  //   data: params,
  //   success: function(){},
  //   error: function(e) {
  //     console.log(e);
  //   }
  // });
}
