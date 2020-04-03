$(function(){
    
    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: '.red-cube'
    })
    .setClassToggle('.red-cube', 'show')
    .addTo(controller);
    
});

