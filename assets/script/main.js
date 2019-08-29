$(document).ready(function(){
    var navmenu = $("#header");

    var features = $("#features");
    var featuresItem = $(".content-features");

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




    if(e.currentTarget.scrollY > (features[0].offsetTop - 500)){
        // featuresItem.css({
        //     "transform" : 'translateY(-50px)',
        //     "transition" : 'all 0.3s ease 0s',
        //     "opacity" : '1'
        // })

        console.log(featuresItem);
    }

 
    // console.log(e.currentTarget.scrollY);
    // console.log(navmenuHeight);

   })
  
  });