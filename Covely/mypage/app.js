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