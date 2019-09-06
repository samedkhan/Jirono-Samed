$(document).ready(function(){
    var navmenu = $("#header");
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



    });

    //Trigger MENU in RESPONSIVE SIDE  
triggerMenu.click(function(){
    $("#header .menu").slideToggle();
    $('#header .trigger').toggleClass('active');
})
//END of Trigger MENU in RESPONSIVE SIDE  
});


