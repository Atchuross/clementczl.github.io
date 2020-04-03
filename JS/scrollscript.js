$(function(){
    
    $("#mjb").css("visibility", "hidden");
    $("#bk").css("visibility", "hidden");
    $("#slib").css("visibility", "hidden");
    $("#rb").css("visibility", "hidden");
    
    
    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({triggerElement: ".c-skills"})
                .addTo(controller)
                .on("enter", function () {
                    $("#html-progress").delay(100).animate({width: "+=85%"}, 400);
                    $("#css-progress").delay(100).animate({width: "+=85%"}, 400);
                    $("#js-progress").delay(100).animate({width: "+=30%"}, 400);
                    $("#jq-progress").delay(100).animate({width: "+=40%"}, 400);
                    $("#bootstrap-progress").delay(100).animate({width: "+=70%"}, 400)
                    $("#php-progress").delay(100).animate({width: "+=20%"}, 400)
                });
    
    var scene2 = new ScrollMagic.Scene({triggerElement: ".c-xp"})
                .addTo(controller)
                .on("enter", function() {
                    
                    $("#mjb").css('visibility', 'visible').hide().fadeIn(1000, function(){
                        $("#bk").css('visibility', 'visible').hide().fadeIn(1000, function(){
                            $("#slib").css('visibility', 'visible').hide().fadeIn(1000, function(){
                                $("#rb").css('visibility', 'visible').hide().fadeIn(1000);
                            });
                        });
                    });
                  
              });
    
});
    

    