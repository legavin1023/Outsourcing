$(document).ready(function() {
  var textTarget =$('.s1Target> div>dl');
  var btnTarget = $('.s1Target > div > ul> li>a');
    $(textTarget).hide();
    $("#tt1").show();
     $("#bt1").click(function(){
        $(textTarget).hide();
         $("#tt1").show();        
    });
     $("#bt2").click(function(){
         $(textTarget).hide();
         $("#tt2").show();         
    });
     $("#bt3").click(function(){
        $(textTarget).hide();
         $("#tt3").show();
    });
     $("#bt4").click(function(){
        $(textTarget).hide();
         $("#tt4").show();
    });
  btnTarget.click(function() {
    if (!$(this).hasClass('active')) {
      btnTarget.removeClass('active');
      $(this).addClass('active');        
    }
  })
})