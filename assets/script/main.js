$(document).ready(function(){
    let alreadyDid = false;

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
        
        
        //#PARALLAX DIGIT counterup 
        if($('.content-parallax strong').length>0){
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
        }        
        //#END of PARALLAX DIGIT counterup       
        

        // FEATURES FADEUP
        if($(".content-features").length>0){
            let featuresSectionTop = $('#features').offset().top;
            let featuresSectionMidlle = featuresSectionTop + $('#features').height()/2 
            if(featuresSectionMidlle<viewBottom){
                FadeIn($(".content-features"), "Y");
            }
        }        
        // END OF FEATURES FADEUP


        //CLOUD SERVICES FADE-LEFT        
        if($('#cloud-services .content-photo img').length>0){
            let cloudservicesSectionTop = $('#cloud-services').offset().top;
            let cloudservicesSectionMidlle = cloudservicesSectionTop + $('#cloud-services').height()/2 
            if(cloudservicesSectionMidlle<viewBottom){
                FadeIn($('#cloud-services .content-photo img'), "X");
            }
        }       
        //END OF CLOUD SERVICES FADE-LEFT

        //DESIGN DEVELOPMENT FADE-LEFT
        if( $('#design-development .content-photo img').length>0){
            let designdevelopmentSectionTop = $('#design-development').offset().top;
            let designdevelopmentSectionMidlle = designdevelopmentSectionTop + $('#design-development').height()/2; 
            if(designdevelopmentSectionMidlle<viewBottom){
                FadeIn($('#design-development .content-photo img'), "X");
            }
        }        
        //END OF DESIGN DEVELOPMENT FADE-LEFT
        
        //PRICE PLAN FADE-UP
        if($('.content-price').length>0){            
            let priceplanSectionTop = $('#price-plans').offset().top;
            let priceplanSectionMidlle = priceplanSectionTop + $('#price-plans').height()/2;           
            if(priceplanSectionMidlle<viewBottom){                
                FadeIn($('.content-price'), "Y");                
            }
        }
       //END of PRICE PLAN FADE-UP
    })
    
    // SMOOTH SLIDE SECTIONS ON NAVBAR MENU
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault()
        if($(this).attr('href').length>1){
            if($(window).width()<991){
                $("#header .menu").slideToggle();
            }
           $('html, body').animate(
               {
                 scrollTop: $($(this).attr('href')).offset().top,
               },
               1000,
               'linear'
             )
         }
      
      })
    // END OF SMOOTH SLIDE SECTIONS

    //Trigger MENU in RESPONSIVE SIDE  
    triggerMenu.click(function(){
        $("#header .menu").slideToggle();
        $('#header .trigger').toggleClass('active');
    })
    //END of Trigger MENU in RESPONSIVE SIDE  

    //ACCORDION MENU
    var accordionButton = $('#faq .content-header');
    var accordionMenu = $('#faq .content-text');   
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
    
function FadeIn(items, type){
    $.each(items, function(index){
        let time = [index+1]*0.4;
        if(type=="Y"){
            $(this).css({
                "transform" : 'translateY(0px)',
                "transition" : 'all ' +  time + 's linear 0s',
                "opacity" : '1'
          }) 
        }
        else if(type=="X"){
            $(this).css({
                "transform" : 'translateX(0px)',
                "transition" : 'all ' +  time + 's linear 0s',
                "opacity" : '1'
          }) 
        }  

        }
        
    )};

});

