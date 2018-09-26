$(document).ready(function(){	
        var submenu = $("#right");
                submenu.hide();
               $("#Solutions>ul").hide();
                $("#Documents>ul").hide();
                $("#About>ul").hide();
			$(".menu>a").click(function(){
			if( submenu.is(":visible") ){
				submenu.slideUp();
				}else{
					submenu.slideDown();
				}
			});
            $("#Solutions").click(function(){
			if( $("#Solutions>ul").is(":visible") ){
				$("#Solutions>ul").hide();
            }else{
                $("#Solutions>ul").show();
            }
			});
             $("#Documents").click(function(){
                if( $("#Documents>ul").is(":visible") ){
                    $("#Documents>ul").hide();
                }else{
                    $("#Documents>ul").show();
                }
            });
             $("#About").click(function(){
                if( $("#About>ul").is(":visible") ){
                    $("#About>ul").hide();
                }else{
                    $("#About>ul").show();
                }
            });
		});