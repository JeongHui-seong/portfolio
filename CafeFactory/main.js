let headerSlide1 = document.querySelector(".header-con-content1")

let observer1 = new IntersectionObserver(function (e) {
    e.forEach(function (box) {
        box.target.classList.add('header-con-content1-show')
    })
})
observer1.observe(headerSlide1)

let headerSlide2 = document.querySelector(".header-con-content2")

let observer2 = new IntersectionObserver(function (e) {
    e.forEach(function (box) {
        box.target.classList.add('header-con-content2-show')
    })
})
observer2.observe(headerSlide2)

let Main1Slider = document.querySelector(".main1-con")

let observer3 = new IntersectionObserver(function (e) {
    e.forEach(function (box) {
        box.target.classList.add('main1-slider')
    })
})
observer3.observe(Main1Slider)

let EventSlider = document.querySelector(".event-con")

let observer4 = new IntersectionObserver(function (e) {
    e.forEach(function (box) {
        if(box.isIntersecting){
            box.target.classList.add('event-con-slider')
        } else{
            box.target.classList.remove('event-con-slider')
        }

    })
})
observer4.observe(EventSlider)

$('.fa-bars').on('click',function(){
    $('#mobile-nav-con').css('right','0')
})

$('#mobile-nav-close').on('click',function(){
    $('#mobile-nav-con').css('right','-35%')
})

