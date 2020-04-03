$(function(){

    $(".navbar .nav-link, footer a").on("click", function(event){
    
        event.preventDefault();
        var hash = this.hash;
        
        $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})
        
    });
    
    $(".nav-link").click(function(){
        
        $(".collapse").collapse("hide");
        
    });
    
    $(".progress-bar .html").css({width: "0%"});
    
    $(".html").css({width: "+=85%"});

});

