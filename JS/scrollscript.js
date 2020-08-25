$(function(){
    
    $("#mjb").css("visibility", "hidden");
    $("#VVM").css("visibility", "hidden");
    $("#bk").css("visibility", "hidden");
    $("#slib").css("visibility", "hidden");
    $("#rb").css("visibility", "hidden");
    
    
    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({triggerElement: ".c-skills, #web"})
                .addTo(controller)
                .on("enter", function () {
                    $("#html-progress").delay(100).animate({width: "+=85%"}, 400);
                    $("#css-progress").delay(100).animate({width: "+=85%"}, 400);
                    $("#js-progress").delay(100).animate({width: "+=30%"}, 400);
                    $("#jq-progress").delay(100).animate({width: "+=40%"}, 400);
                    $("#sql-progress").delay(100).animate({width: "+=40%"}, 400)
                    $("#php-progress").delay(100).animate({width: "+=20%"}, 400)
                });
    
    var scene3 = new ScrollMagic.Scene({triggerElement: ".c-skills #logiciel"})
                .addTo(controller)
                .on("enter", function () {
                    $("#c-progress").delay(100).animate({width: "+=10%"}, 400);
                    $("#cpp-progress").delay(100).animate({width: "+=40%"}, 400);
                    $("#cs-progress").delay(100).animate({width: "+=10%"}, 400);
                    $("#java-progress").delay(100).animate({width: "+=15%"}, 400);
                    $("#python-progress").delay(100).animate({width: "+=20%"}, 400);
                    $("#swift-progress").delay(100).animate({width: "+=40%"}, 400);
                });
    
    var scene4 = new ScrollMagic.Scene({triggerElement: ".c-skills #framework"})
                .addTo(controller)
                .on("enter", function () {
                    $("#bootstrap-progress").delay(100).animate({width: "+=70%"}, 400);
                    $("#unity-progress").delay(100).animate({width: "+=25%"}, 400);
                    $("#bulma-progress").delay(100).animate({width: "+=60%"}, 400);
                    $("#xcode-progress").delay(100).animate({width: "+=30%"}, 400);
                });
    
    var scene2 = new ScrollMagic.Scene({triggerElement: ".c-xp"})
                .addTo(controller)
                .on("enter", function() {
                    
                    $("#mjb").css('visibility', 'visible').hide().fadeIn(1000, function(){
                        $("#VVM").css('visibility', 'visible').hide().fadeIn(1000, function(){
                            $("#bk").css('visibility', 'visible').hide().fadeIn(1000, function(){
                                $("#slib").css('visibility', 'visible').hide().fadeIn(1000, function(){
                                    $("#rb").css('visibility', 'visible').hide().fadeIn(1000);
                                });
                            });
                        });
                    });
                  
              });
    
});
    

    
