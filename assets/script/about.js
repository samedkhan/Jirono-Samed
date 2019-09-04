$(document).ready(function(){

    var navmenu = $("#header");
    var featuresItem = $(".content-features");

    var triggerMenu = $('#header .trigger');

    $(document).on('scroll',function(){

        const viewTop = $(document).scrollTop();  //Ekranin yuxari heddi
        const viewBottom = viewTop +$(window).height(); //Ekranin asagi heddine qeder olan mesafe

        // NAVIGATION MENU
        if(viewTop > navmenu[0].clientHeight){
            navmenu.css({
                "background-color": "white",
                "box-shadow": "0 2px 48px 0 rgba(0, 0, 0, 0.08)",
                "transition" : "all 0.5s ease 0s"
            });
        }
        else{
            navmenu.css({
                "background-color": "transparent",
                "box-shadow": "none"
            });
        }
        // END of NAVIGATION MENU

          // FEATURES FADEUP
          let featuresSectionTop = $('#features').offset().top;
          let featuresSectionMidlle = featuresSectionTop + $('#features').height()/2 
          if(viewTop<featuresSectionTop && featuresSectionMidlle<viewBottom){
              FadeIn(featuresItem, "up");
          }
          // END OF FEATURES FADEUP

    });

     //Trigger MENU in RESPONSIVE SIDE  
     triggerMenu.click(function(){
        $("#header .menu").slideToggle();
        $('#header .trigger').toggleClass('active');
    })
    //END of Trigger MENU in RESPONSIVE SIDE  


    function FadeIn(items, type){
        $.each(items, function(index){
            let time = [index+1]*0.4;
            if(type=="up"){
                $(this).css({
                    "transform" : 'translateY(-50px)',
                    "transition" : 'all ' +  time + 's linear 0s',
                    "opacity" : '1'
              }) 
            }
            else if(type=="left"){
                $(this).css({
                    "transform" : 'translateX(-50px)',
                    "transition" : 'all ' +  time + 's linear 0s',
                    "opacity" : '1'
              }) 
            }
            else if(type=="right"){
                $(this).css({
                    "transform" : 'translateX(50px)',
                    "transition" : 'all ' +  time + 's linear 0s',
                    "opacity" : '1'
              }) 
            }
            else{
                if(type=="down"){
                    $(this).css({
                        "transform" : 'translateY(50px)',
                        "transition" : 'all ' +  time + 's linear 0s',
                        "opacity" : '1'
                  }) 
                }
            }
            }
            
        )};


});

