$(window).scroll(function(){
    let wScroll = $(window).scrollTop();
    let profileOffset = $("#services").offset().top
        if(wScroll > 20)
        {
            $("#myNav").css("position","fixed")
            $("#myNav").css("width","100%")
            $("#myNav").css("padding","0px")
            $("#myNav").css("z-index","99999999")
        }
    else
        {
            $("#myNav").css("width","100%")
            $("#myNav").css("padding","30px")
        }
});
$("#btnUp").click(function(){
    $("html,body").animate({scrollTop:0} , 2000)
})
$("nav a").click(function(){   
    let aHref = $(this).attr("href");
     let sectionOffset =  $(aHref).offset().top;
    $("html,body").animate({scrollTop:sectionOffset} , 2000)
});
$(document).ready(function(){   
    $("#loading").fadeOut(1000 ,function(){  
        $("body").css("overflow","auto")
    })
});
new WOW().init();
