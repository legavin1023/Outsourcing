$(document).ready(function() {
  var photoTarget = $('.m3slide');
  var btnTarget = $('.m3logo> ul> li > a');

  btnTarget.click(function() {
    var srcValue = 'image/M3/' + $(this).attr('id') + '.png';
    if (!$(this).hasClass('active')) {
      btnTarget.removeClass('active');
      $(this).addClass('active');
      photoTarget.stop().fadeOut('fast',function() {
        $(this).attr('src', srcValue);
        $(this).stop().fadeIn('fast');
      })
    }
      cosole.log(srcValue);
  })
})