$(document).ready(function() {
  var photoTarget = $('.m2Target >img');
  var textTarget1 =$('.m2Target >div> .pho-1');
  var textTarget2 =$('.m2Target >div> .pho-2');
  var textTarget3 =$('.m2Target >div> .pho-3');
  var btnTarget = $('.m2Target > div > ul> li>a');
  
  btnTarget.click(function() {
    var srcValue = 'image/M2/' + $(this).attr('id') + '.jpg';
    if (!$(this).hasClass('active')) {
      btnTarget.removeClass('active');
      $(this).addClass('active');
      photoTarget.stop().fadeOut('fast',function() {
        $(this).attr('src', srcValue);
        $(this).stop().fadeIn('fast');
      });
    if(!$('#pho-1').hasClass('active')){
    textTarget1.removeClass('hide');
    textTarget2.addClass('hide');
    textTarget3.addClass('hide');
    };
    if(!$('#pho-2').hasClass('active')){
    textTarget2.removeClass('hide');
    textTarget1.addClass('hide');
    textTarget3.addClass('hide');
    };
    if(!$('#pho-3').hasClass('active')){
    textTarget3.removeClass('hide');
    textTarget1.addClass('hide');
    textTarget2.addClass('hide');
   };
    }
  })
})
