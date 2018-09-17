$(document).ready(function() {
  var textTarget =$('.s1Target> div>dl');
  var btnTarget = $('.s1Target > div > ul> li>a');
  
  btnTarget.click(function() {
    if (!$(this).hasClass('active')) {
      btnTarget.removeClass('active');
      $(this).addClass('active');        
    }
      if(!$('#bt1').hasClass('active')){
        textTarget.removeClass('active');
        $('#tt1').addClass('active');
        }
        if(!$('#bt2').hasClass('active')){
         textTarget.removeClass('active');
        $('#tt2').addClass('active');;
        }
        if(!$('#bt3').hasClass('active')){
         textTarget.removeClass('active');
        $('#tt3').addClass('active');
        }
        if(!$('#bt4').hasClass('active')){
          textTarget.removeClass('active');
          $('#tt4').addClass('active');
        }
  })
})
