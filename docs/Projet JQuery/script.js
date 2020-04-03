$(function(){
    
    var $mainMenuItems = $("#main-menu ul").children("li"), /* mainMenuItems possède tout les children li de la                                                         classe ul*/
        totalMainMenuItems = $mainMenuItems.length,
        openedIndex = 2, 
        
        init = function(){
            bindEvent(); 
            
            if(validIndex(openedIndex))
            {
                animateItem($mainMenuItems.eq(openedIndex), true, 700);
                $("p").hide();
                filmsAnimate();
            }
        },// Ici cela sert a ouvrir le menu de Jessica au lancement de la page
        
        bindEvent = function(){
            $mainMenuItems.children(".image").click(function(){ /* mainMenuItems lui contient tout les li                                                          puisque il est défénie ci-dessus*/
                
                var newIndex = $(this).parent().index();
                checkAndAnimateItem(newIndex);
                
                
                
            }); 
            // Ici on dit que le newIndex = a l'index du parent  direct a l'élément this (donc ici le li) si on  utilise les termes html ici newIndex sera = a  l'index du li cliqué dans ul (ex: clique sur  Scarlett renverra l'index 0)
            
            $(".button").hover(function(){
                
                $(this).addClass("hovered")
                
            },function(){
                $(this).removeClass("hovered")
            }); // 1st hover function is when mouse enter on button and 2nd is when mouse left button
            
            $(".button").click(function(){
                var newIndex = $(this).index();
                checkAndAnimateItem(newIndex);
                
            });
            
        },
        
        validIndex = function(indexToCheck){
            return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
        },
    
        animateItem = function($item, toOpen, speed){
            
            var $colorImage = $item.find(".color"),
            itemParam = toOpen ? {width: "420px"} : {width: "140px"}, // Demande si toOpen est true or false et change la width en fonction !
            coloredImageParam = toOpen ? {left: "0px"} : {left: "140px"},
            filmsHidened = 
                
            $colorImage.animate(coloredImageParam, speed);
            $item.animate(itemParam, speed);
            filmsAnimate();
            
        },
        
        checkAndAnimateItem = function(indexToCheckAndAnimate){
            $item = $mainMenuItems.eq(indexToCheckAndAnimate);
                
            if(openedIndex == indexToCheckAndAnimate){
            // animateItem($item, false, 250) 
            }// This if is used to close index opened when reclick to index opened
            else
            {
                if(validIndex(indexToCheckAndAnimate))
                {
                    animateItem($mainMenuItems.eq(openedIndex), false, 250);
                    openedIndex = indexToCheckAndAnimate;
                    animateItem($mainMenuItems.eq(indexToCheckAndAnimate), true, 250);
                    $("p").hide();
                }// This if it's used to close opened idex if we click other index
            }
        },
    
        filmsAnimate = function(){
            $("h3").next().fadeIn(1500, function(){
                $("h3").next().next().fadeIn(2000, function(){
                    $("h3").next().next().next().fadeIn(2000);
                });
            });
        };
    
    init();
    
});