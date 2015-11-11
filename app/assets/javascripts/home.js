$(document).ready(function(){
	$("#menu ul.main-menu li.main-menu.home a").addClass("active");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 180) {
        $('.header_bottom').css({"position":"fixed","top":"0px","z-index":"1000000000000000000000","width":"91.7%"}, $(window).scrollTop());
    }else{
           $('.header_bottom').css({"position":"static","top":"213px","z-index":"1000000000000000000000","width":"100%"}) 
    }
  });
});
