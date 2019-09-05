$(document).ready(function(){
     var navmenu = $("#header");
     var cloudservicesPhoto = $('#cloud-services .content-photo img');
     var triggerMenu = $('#header .trigger');
     var accordionButton = $('#faq .content-header');
     var accordionMenu = $('#faq .content-text');   
    
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

        //CLOUD SERVICES FADE-LEFT
        let cloudservicesSectionTop = $('#cloud-services').offset().top;
        let cloudservicesSectionMidlle = cloudservicesSectionTop + $('#cloud-services').height()/2 
        if(viewTop<cloudservicesSectionTop && cloudservicesSectionMidlle<viewBottom){
            FadeIn(cloudservicesPhoto, "left");
        }
        //END OF CLOUD SERVICES FADE-LEFT

    });

    //ACCORDION MENU

    // Opened menu when page is loaded
    $('#faq .content-header').eq(1).addClass('active').next().slideDown('normal');
    
    // Click function for accordion buttons
    accordionButton.click((e)=>{
        e.preventDefault();
       if(!$(e.currentTarget).hasClass("active")){        
        accordionButton.removeClass('active');
        accordionMenu.slideUp('normal');
        $(e.currentTarget).next().stop(true,true).slideDown('normal');
        $(e.currentTarget).addClass('active');        
       }
    });    
    // END of ACCORDION MENU

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