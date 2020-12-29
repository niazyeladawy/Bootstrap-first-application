$(document).ready(function(){

    // nice scroll
    //$("html").niceScroll();

 


    $('.carousel').carousel({
        interval:6000
    });
    // show color option when click on gear
    $('.gear-check').click(function(){
        $('.color-option').fadeToggle();
    })

    //change theme color
    var colorli=$('.color-option ul li');

   colorli
    .eq(0).css("background-color","#ec3131").end()
    .eq(1).css("background-color","#ff17e2").end()
    .eq(2).css("background-color","#06a8ff").end()
    .eq(3).css("background-color","#d2c700");

    colorli.click(function(){
        $("link[href*='theme']").attr("href",$(this).attr("data-value"))
        //console.log($(this).attr("data-value"))
    })
    
    //scroll top
    var scrollbutton = $("#scroll-top");

    $(window).on('scroll', function(){
        
        if($(this).scrollTop()>=1300){
            scrollbutton.show();
        }
        else{
            scrollbutton.hide();
        }

       
    })
     // click on button to scroll to up
     scrollbutton.click(function()
     {
         $("html,body").animate({scrollTop:0},600);
     })


});

// loading page


$(window).on('load', function() { 
    
    $(".loading-overlay .sk-chase").fadeOut(2000,function(){
        $("body").css("overflow","auto");
        $(this).parent().fadeOut(2000,function(){
            
            $(this).remove();
    })
});



 });
