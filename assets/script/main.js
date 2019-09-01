$(document).ready(function(){
    let alreadyDid = false;

    var navmenu = $("#header");
    
    var featuresItem = $(".content-features");
    
    var cloudservicesPhoto = $('#cloud-services .content-photo');    

    var designdevelopmentPhoto = $('#design-development .content-photo');  

    var priceplanItem = $('#price-plans .content-price');  

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
        
        
        //PARALLAX DIGIT counterup 
        let digits = $('.content-parallax strong');
        var limits = [96, 190, 12, 46];
        const time = 1000;        
        let parallaxSectionTop = $('#parallax-digits').offset().top;
        let parallaxSectionMidlle = parallaxSectionTop + $('#parallax-digits').height()/2;       
        if(viewTop<parallaxSectionTop && parallaxSectionMidlle<viewBottom && !alreadyDid){
            alreadyDid = true;
            $(digits).each((index, digit)=>{
                let count = 1;
                const Counter = setInterval(function(){
                        if(count>=limits[index]){                    
                            clearInterval(Counter)                        
                        }                                        
                        $(digit).text(count++)
                },time/limits[index])
            })
        }
        //END of PARALLAX DIGIT counterup       
        

        // FEATURES FADEUP
        let featuresSectionTop = $('#features').offset().top;
        let featuresSectionMidlle = featuresSectionTop + $('#features').height()/2 
        if(viewTop<featuresSectionTop && featuresSectionMidlle<viewBottom){
            FadeIn(featuresItem, "up");
        }
        // END OF FEATURES FADEUP


        //CLOUD SERVICES FADE-LEFT
        let cloudservicesSectionTop = $('#cloud-services').offset().top;
        let cloudservicesSectionMidlle = cloudservicesSectionTop + $('#cloud-services').height()/2 
        if(viewTop<cloudservicesSectionTop && cloudservicesSectionMidlle<viewBottom){
            FadeIn(cloudservicesPhoto, "left");
        }
        //END OF CLOUD SERVICES FADE-LEFT

        //DESIGN DEVELOPMENT FADE-RIGHT
        let designdevelopmentSectionTop = $('#design-development').offset().top;
        let designdevelopmentSectionMidlle = designdevelopmentSectionTop + $('#design-development').height()/2 
        if(viewTop<designdevelopmentSectionTop && designdevelopmentSectionMidlle<viewBottom){
            FadeIn(designdevelopmentPhoto, "right");
        }
        //END OF DESIGN DEVELOPMENT FADE-RIGHT

        let priceplanSectionTop = $('#price-plans').offset().top;
        let priceplanSectionMidlle = priceplanSectionTop + $('#price-plans').height()/2 
        if(viewTop<priceplanSectionTop && priceplanSectionMidlle<viewBottom){
            FadeIn(priceplanItem, "up");
        }
    })
    
    // SMOOTH SLIDE SECTIONS
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault()
      if($(this).attr('href').length>1){
        $('html, body').animate(
            {
              scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'linear'
          )
      }
      })
    // END OF SMOOTH SLIDE SECTIONS

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

