$('#menu-icon').on('click', function () {
    $('#mobile-nav').css('right', '0')
});

$('#mobile-nav-close').on('click', function () {
    $('#mobile-nav').css('right', '-35%')
});

$('#photo1').on('click', function () {
    $('#photo1').css('background-color','#ddd');
    $('#photo2').css('background-color','rgba(20, 66, 114, 0.5)');
    $('#photo3').css('background-color','rgba(20, 66, 114, 0.5)');
    $('#photo4').css('background-color','rgba(20, 66, 114, 0.5)');
    $('.bmw').css('opacity',1);
    $('.benz').css('opacity',0);
    $('.audi').css('opacity',0);
    $('.porsche').css('opacity',0);
    $('.bmw-stage').css('opacity',1);
    $('.benz-stage').css('opacity',0);
    $('.audi-stage').css('opacity',0);
    $('.porsche-stage').css('opacity',0);
    $('.bmw-stage').css('z-index',100);
    $('.benz-stage').css('z-index',0);
    $('.audi-stage').css('z-index',0);
    $('.porsche-stage').css('z-index',0);
});

$('#photo2').on('click', function () {
    $('#photo2').css('background-color','#ddd');
    $('#photo1').css('background-color','rgba(20, 66, 114, 0.5)');
    $('#photo3').css('background-color','rgba(20, 66, 114, 0.5)');
    $('#photo4').css('background-color','rgba(20, 66, 114, 0.5)');
    $('.bmw').css('opacity',0);
    $('.benz').css('opacity',1);
    $('.audi').css('opacity',0);
    $('.porsche').css('opacity',0);
    $('.bmw-stage').css('opacity',0);
    $('.benz-stage').css('opacity',1);
    $('.audi-stage').css('opacity',0);
    $('.porsche-stage').css('opacity',0);
    $('.bmw-stage').css('z-index',0);
    $('.benz-stage').css('z-index',100);
    $('.audi-stage').css('z-index',0);
    $('.porsche-stage').css('z-index',0);
});

$('#photo3').on('click', function () {
    $('#photo3').css('background-color','#ddd');
    $('#photo2').css('background-color','rgba(20, 66, 114, 0.5)');
    $('#photo1').css('background-color','rgba(20, 66, 114, 0.5)');
    $('#photo4').css('background-color','rgba(20, 66, 114, 0.5)');
    $('.bmw').css('opacity',0);
    $('.benz').css('opacity',0);
    $('.audi').css('opacity',1);
    $('.porsche').css('opacity',0);
    $('.bmw-stage').css('opacity',0);
    $('.benz-stage').css('opacity',0);
    $('.audi-stage').css('opacity',1);
    $('.porsche-stage').css('opacity',0);
    $('.bmw-stage').css('z-index',0);
    $('.benz-stage').css('z-index',0);
    $('.audi-stage').css('z-index',100);
    $('.porsche-stage').css('z-index',0);
});

$('#photo4').on('click', function () {
    $('#photo4').css('background-color','#ddd');
    $('#photo2').css('background-color','rgba(20, 66, 114, 0.5)');
    $('#photo3').css('background-color','rgba(20, 66, 114, 0.5)');
    $('#photo1').css('background-color','rgba(20, 66, 114, 0.5)');
    $('.bmw').css('opacity',0);
    $('.benz').css('opacity',0);
    $('.audi').css('opacity',0);
    $('.porsche').css('opacity',1);
    $('.bmw-stage').css('opacity',0);
    $('.benz-stage').css('opacity',0);
    $('.audi-stage').css('opacity',0);
    $('.porsche-stage').css('opacity',1);
    $('.bmw-stage').css('z-index',0);
    $('.benz-stage').css('z-index',0);
    $('.audi-stage').css('z-index',0);
    $('.porsche-stage').css('z-index',100);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

