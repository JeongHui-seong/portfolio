     $(window).resize(function(){
        if (window.innerWidth>1024){
            $('#join-link').on('click',function(){
                $('.log-in').animate({'marginLeft':600, 'zIndex':0});
                $('.log-in').animate({'marginLeft':0,'rotate':'7deg'});
                $('.join').animate({'marginLeft':-300,'rotate':'0deg','zIndex':'1'});
                $('.join').animate({'marginLeft':0});
                })
            
            $('#login-link').on('click',function(){
                $('.join').animate({'marginLeft':600, 'zIndex':0});
                $('.join').animate({'marginLeft':0,'rotate':'7deg'});
                $('.log-in').animate({'marginLeft':-300,'rotate':'0deg','zIndex':'1'});
                $('.log-in').animate({'marginLeft':0});
            });        
    
        } else if (window.innerWidth>768){
            $('#join-link').on('click',function(){
                $('.log-in').animate({'marginLeft':550, 'zIndex':0});
                $('.log-in').animate({'marginLeft':0,'rotate':'7deg'});
                $('.join').animate({'marginLeft':-250,'rotate':'0deg','zIndex':'1'});
                $('.join').animate({'marginLeft':0});
                })
            
            $('#login-link').on('click',function(){
                $('.join').animate({'marginLeft':550, 'zIndex':0});
                $('.join').animate({'marginLeft':0,'rotate':'7deg'});
                $('.log-in').animate({'marginLeft':-250,'rotate':'0deg','zIndex':'1'});
                $('.log-in').animate({'marginLeft':0});
            });        
    
        } else if (window.innerWidth>600){
            $('#join-link').on('click',function(){
                $('.log-in').animate({'marginLeft':470, 'zIndex':0});
                $('.log-in').animate({'marginLeft':0,'rotate':'7deg'});
                $('.join').animate({'marginLeft':-170,'rotate':'0deg','zIndex':'1'});
                $('.join').animate({'marginLeft':0});
                })
            
            $('#login-link').on('click',function(){
                $('.join').animate({'marginLeft':470, 'zIndex':0});
                $('.join').animate({'marginLeft':0,'rotate':'7deg'});
                $('.log-in').animate({'marginLeft':-170,'rotate':'0deg','zIndex':'1'});
                $('.log-in').animate({'marginLeft':0});
            });       
        } else{
            $('#join-link').on('click',function(){
                $('.log-in').animate({'marginLeft':470, 'zIndex':0});
                $('.log-in').animate({'marginLeft':0,'rotate':'7deg'});
                $('.join').animate({'marginLeft':-170,'rotate':'0deg','zIndex':'1'});
                $('.join').animate({'marginLeft':0});
                })
            
            $('#login-link').on('click',function(){
                $('.join').animate({'marginLeft':470, 'zIndex':0});
                $('.join').animate({'marginLeft':0,'rotate':'7deg'});
                $('.log-in').animate({'marginLeft':-170,'rotate':'0deg','zIndex':'1'});
                $('.log-in').animate({'marginLeft':0});
            });  
        }
     }).resize();


$(window).resize(function(){document.location.reload();})



$('#mobile-menu').on('click', function () {
    $('.mobile-menu-con').css('z-index', 999);
    $('.mobile-menu-con').css('opacity', 1);
    $('.mobile-menu-wrapper').css('margin-left',0);
})

$('#mobile-menu-close').on('click', function () {
    $('.mobile-menu-con').css('z-index', -999);
    $('.mobile-menu-con').css('opacity', 0);
    $('.mobile-menu-wrapper').css('margin-left','-300px');
})
   
