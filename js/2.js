// $(function(){
// 	var _now=0;
// 	var oul=$('.myslidetwo');
// 	var numl=$('.daohang ol li');
// 	var ali =$('myslide').eq(0).width();

// 	numl.click(function(){
// 		var index=$(this).index();
// 		$(this).addClass('current').siblings().removeClass();
// 		oul.animate({
// 			'left':-ali*index},500);
// 	})
// 	setInterval(function(){
// 		if(_now==numl.size()-1){
// 			_now=0;
// 		}
// 		else{
// 			_now++;
// 		}


// 		numl.eq(_now).addClass('current').siblings().removeClass();
// 		oul.animate({'left':-ali*_now},500);
// 	},1500);
// })
 $(document).ready(function(){
			    $(".info1").hide();
                $("li.video-small-1").mouseover(function(){
                    $(".info1").show();
                    $("li.video-small-1").mouseout(function(){
                    	$(".info1").hide();
                    	}); 
                });           
		    });
 $(document).ready(function(){
			    $(".info2").hide();
                $("li.video-small-2").mouseover(function(){
                    $(".info2").show();
                    $("li.video-small-2").mouseout(function(){
                    	$(".info2").hide();
                    	}); 
                });           
		    });
 $(document).ready(function(){
			    $(".info3").hide();
                $("li.video-small-3").mouseover(function(){
                    $(".info3").show();
                    $("li.video-small-3").mouseout(function(){
                    	$(".info3").hide();
                    	}); 
                });           
		    });
 $(document).ready(function(){
			    $(".info4").hide();
                $("li.video-small-4").mouseover(function(){
                    $(".info4").show();
                    $("li.video-small-4").mouseout(function(){
                    	$(".info4").hide();
                    	}); 
                });           
		    });
 $(document).ready(function(){
			    $(".info5").hide();
                $("li.video-small-5").mouseover(function(){
                    $(".info5").show();
                    $("li.video-small-5").mouseout(function(){
                    	$(".info5").hide();
                    	}); 
                });           
		    });
 $(document).ready(function(){
			    $(".info6").hide();
                $("li.video-small-6").mouseover(function(){
                    $(".info6").show();
                    $("li.video-small-6").mouseout(function(){
                    	$(".info6").hide();
                    	}); 
                });           
		    });
$(document).ready(function(){
			    $(".gengduo").hide();
                $(".video-large-1").mouseover(function(){
                    $(".gengduo").show();
                    $(".video-large-1").mouseout(function(){
                    	$(".gengduo").hide();
                    	}); 
                });           
		    });


$("div.daohang").find("li").click(function(){
	var index = $(this).index();
	//console.log($(this).parents().filter(".daohang").prev().children().attr('class'));
	$(this).addClass('current').siblings().removeClass();
	$(this).parents().filter(".daohang").prev().children().stop().animate({marginLeft: -index * 340},400);
	//console.log($(this).parents().filter(".daohang").prev().children().)	// console.log(index);
})
