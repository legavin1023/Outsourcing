$(document).ready(function() {
  var photoTarget = $('.area-img > dl > dt > img');
  var btnTarget = $('.area-img > dl > dd > a');

  btnTarget.click(function() {
    var srcValue = 'images/' + $(this).attr('id') + '.jpg';
    // 만약 !아니면 해라 .가지고있다 클래스(액티브)
    if (!$(this).hasClass('active')) {
      btnTarget.removeClass('active');
      $(this).addClass('active');
      photoTarget.stop().fadeOut('fast',function() {
        $(this).attr('src', srcValue);
        $(this).stop().fadeIn('fast');
      })
    }
    // photoTarget.attr('src','srcValue');
    console.log(srcValue);
  })
})
