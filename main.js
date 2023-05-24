

$('#intro-close').on('click',function(){
    $('.introduction-box').removeClass('active')
})
$('#intro-con').on('click',function(){
    $('.introduction-box').addClass('active')
})

$('#homepage-close').on('click',function(){
    $('.homepage-box').removeClass('active')
})
$('#homepage-con').on('click',function(){
    $('.homepage-box').addClass('active')
})

$('#carpage-close').on('click',function(){
    $('.carpage-box').removeClass('active')
})
$('#carpage-con').on('click',function(){
    $('.carpage-box').addClass('active')
})

document.addEventListener('DOMContentLoaded', function(){
    new TypeIt('#header-title1')
    .pause(2000)
    .delete(3, {delay: 1000})
    .type('노력하는')
    .pause(2000)
    .delete(4, {delay: 1000})
    .type('발전하는')
    .pause(2000)
    .delete(4, {delay: 1000})
    .type('소통하는')
    .pause(2000)
    .delete(4, {delay: 1000})
    .type('성실한')
    .pause(2000)
    .delete(4, {delay: 1000})
    .type('노력하는')
    .pause(2000)
    .delete(4, {delay: 1000})
    .type('발전하는')
    .pause(2000)
    .delete(4, {delay: 1000})
    .type('소통하는')
    .pause(2000)
    .delete(4, {delay: 1000})
    .type('성실한')
    .pause(2000)
    .delete(4, {delay: 1000})
    .type('노력하는')
    .pause(2000)
    .delete(4, {delay: 1000})
    .type('발전하는')
    .pause(2000)
    .delete(4, {delay: 1000})
    .type('소통하는')
    .pause(2000)
    .delete(4, {delay: 1000})
    .type('성실한')
    .pause(2000)
    .delete(4, {delay: 1000})
    .type('노력하는')
    .pause(2000)
    .delete(4, {delay: 1000})
    .type('발전하는')
    .pause(2000)
    .delete(4, {delay: 1000})
    .type('소통하는')
    .pause(2000)
    .delete(4, {delay: 1000})
    .type('성실한')
    .pause(2000)
    .delete(4, {delay: 1000})
    .type('노력하는')
    .pause(2000)
    .delete(4, {delay: 1000})
    .type('발전하는')
    .pause(2000)
    .delete(4, {delay: 1000})
    .type('소통하는')
    .go()
})

// $('.intro-content').scroll(function(){
//     var height = $('.intro-content').scrollTop();
//     console.log(height);

//     let y = a*height + b;
//     $('.intro-header').css('opacity',y);
// })