$(document).ready(function() {
  var photoTarget = $('.m2Target >img');
  var textTarget =$('.m2Target >div> dl');  
  var btnTarget = $('.m2Target > div > ul> li>a');
  
    
     $(textTarget).hide();
    $(".pho_1").show();
     $("#pho-1").click(function(){
         $(textTarget).hide();
        $(".pho_1").show();
    });
    $("#pho-2").click(function(){
        $(textTarget).hide();
        $(".pho_2").show();
    }); 
    $("#pho-3").click(function(){
        $(textTarget).hide();
        $(".pho_3").show();
    });
  btnTarget.click(function() {
    var srcValue = 'image/M2/' + $(this).attr('id') + '.jpg';
    if (!$(this).hasClass('active')) {
      btnTarget.removeClass('active');
      $(this).addClass('active');
      photoTarget.stop().fadeOut('fast',function() {
        $(this).attr('src', srcValue);
        $(this).stop().fadeIn('fast');
      }); 
    }
  })
   
   
})
