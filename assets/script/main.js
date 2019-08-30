$(document).ready(function(){
    var navmenu = $("#header");

    var features = $("#features");
    var featuresItem = $(".content-features");

    var cloudservices = $('#cloud-services');
    var cloudservicesPhoto = $('.content-photo');

    var parallaxDigits = $('#parallax-digits');
    let digit = $('.content-parallax strong');

   $(window).scroll((e)=>{

    // NAVIGATION MENU
    if(e.currentTarget.scrollY > navmenu[0].clientHeight){
        navmenu.css({
            "background-color": "white",
            "box-shadow": "0 2px 48px 0 rgba(0, 0, 0, 0.08)",
            "transition" : "all 0.3s ease 0s"
        });
    }
    else{
        navmenu.css({
            "background-color": "transparent",
            "box-shadow": "none"
        });
    }
    // END of NAVIGATION MENU


    // FEATURES 
    if(e.currentTarget.scrollY > (features[0].offsetTop - 450)){ 

        $.each(featuresItem, function(index){
            let time = [index+1]*0.4;
            $(this).css({
                   "transform" : 'translateY(-50px)',
                   "transition" : 'all ' +  time + 's linear 0s',
                   "opacity" : '1'
             })    

     });
     
    }
    // END OF FEATURES



    //CLOUD SERVICES & DESIGN DEVELOPMENT   
    if(e.currentTarget.scrollY > (cloudservices[0].offsetTop - 120)){ 

        $.each(cloudservicesPhoto, function(index){
            let time = [index+1]*0.4;
            $(this).css({
                   "transform" : 'translateX(50px)',
                   "transition" : 'all ' +  time + 's linear 0s',
                   "opacity" : '1'
             })    

     });
    }
    //END CLOUD SERVICES & DESIGN DEVELOPMENT  



  


    if(e.currentTarget.scrollY > (parallaxDigits[0].offsetTop - 450)){}

    

     

});
});