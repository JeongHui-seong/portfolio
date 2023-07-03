let currentimg = 1;

$('#banner-next-btn').on('click', function () {
    if (currentimg == 1) {
        $('.slide2').css('opacity', 1);
        $('.slide1').css('opacity', 0);
        $('.slide3').css('opacity', 0);
        $('.slide4').css('opacity', 0);
        $('#slide2-btn').css('background-color', '#fff');
        $('#slide2-btn').css('opacity', 1);
        $('#slide1-btn').css('background-color', '#222');
        $('#slide1-btn').css('opacity', 0.3);
        $('#slide3-btn').css('background-color', '#222');
        $('#slide3-btn').css('opacity', 0.3);
        $('#slide4-btn').css('background-color', '#222');
        $('#slide4-btn').css('opacity', 0.3);
        currentimg = 2;
    }

    else if (currentimg == 2) {
        $('.slide3').css('opacity', 1);
        $('.slide2').css('opacity', 0);
        $('.slide1').css('opacity', 0);
        $('.slide4').css('opacity', 0);
        $('#slide3-btn').css('background-color', '#fff');
        $('#slide3-btn').css('opacity', 1);
        $('#slide2-btn').css('background-color', '#222');
        $('#slide2-btn').css('opacity', 0.3);
        $('#slide1-btn').css('background-color', '#222');
        $('#slide1-btn').css('opacity', 0.3);
        $('#slide4-btn').css('background-color', '#222');
        $('#slide4-btn').css('opacity', 0.3);
        currentimg = 3;
    }

    else if (currentimg == 3) {
        $('.slide4').css('opacity', 1);
        $('.slide2').css('opacity', 0);
        $('.slide3').css('opacity', 0);
        $('.slide1').css('opacity', 0);
        $('#slide4-btn').css('background-color', '#fff');
        $('#slide4-btn').css('opacity', 1);
        $('#slide2-btn').css('background-color', '#222');
        $('#slide2-btn').css('opacity', 0.3);
        $('#slide3-btn').css('background-color', '#222');
        $('#slide3-btn').css('opacity', 0.3);
        $('#slide1-btn').css('background-color', '#222');
        $('#slide1-btn').css('opacity', 0.3);
        currentimg = 4;
    }

    else {
        $('.slide1').css('opacity', 1);
        $('.slide2').css('opacity', 0);
        $('.slide3').css('opacity', 0);
        $('.slide4').css('opacity', 0);
        $('#slide1-btn').css('background-color', '#fff');
        $('#slide1-btn').css('opacity', 1);
        $('#slide2-btn').css('background-color', '#222');
        $('#slide2-btn').css('opacity', 0.3);
        $('#slide3-btn').css('background-color', '#222');
        $('#slide3-btn').css('opacity', 0.3);
        $('#slide4-btn').css('background-color', '#222');
        $('#slide4-btn').css('opacity', 0.3);
        currentimg = 1;
    }
})

$('#banner-pre-btn').on('click', function () {
    if (currentimg == 1) {
        $('.slide4').css('opacity', 1);
        $('.slide1').css('opacity', 0);
        $('.slide3').css('opacity', 0);
        $('.slide2').css('opacity', 0);
        $('#slide4-btn').css('background-color', '#fff');
        $('#slide4-btn').css('opacity', 1);
        $('#slide2-btn').css('background-color', '#222');
        $('#slide2-btn').css('opacity', 0.3);
        $('#slide3-btn').css('background-color', '#222');
        $('#slide3-btn').css('opacity', 0.3);
        $('#slide1-btn').css('background-color', '#222');
        $('#slide1-btn').css('opacity', 0.3);
        currentimg = 4;
    }

    else if (currentimg == 4) {
        $('.slide3').css('opacity', 1);
        $('.slide2').css('opacity', 0);
        $('.slide1').css('opacity', 0);
        $('.slide4').css('opacity', 0);
        $('#slide3-btn').css('background-color', '#fff');
        $('#slide3-btn').css('opacity', 1);
        $('#slide2-btn').css('background-color', '#222');
        $('#slide2-btn').css('opacity', 0.3);
        $('#slide1-btn').css('background-color', '#222');
        $('#slide1-btn').css('opacity', 0.3);
        $('#slide4-btn').css('background-color', '#222');
        $('#slide4-btn').css('opacity', 0.3);
        currentimg = 3;
    }

    else if (currentimg == 3) {
        $('.slide2').css('opacity', 1);
        $('.slide3').css('opacity', 0);
        $('.slide4').css('opacity', 0);
        $('.slide1').css('opacity', 0);
        $('#slide2-btn').css('background-color', '#fff');
        $('#slide2-btn').css('opacity', 1);
        $('#slide1-btn').css('background-color', '#222');
        $('#slide1-btn').css('opacity', 0.3);
        $('#slide3-btn').css('background-color', '#222');
        $('#slide3-btn').css('opacity', 0.3);
        $('#slide4-btn').css('background-color', '#222');
        $('#slide4-btn').css('opacity', 0.3);
        currentimg = 2;
    }

    else {
        $('.slide1').css('opacity', 1);
        $('.slide2').css('opacity', 0);
        $('.slide3').css('opacity', 0);
        $('.slide4').css('opacity', 0);
        $('#slide1-btn').css('background-color', '#fff');
        $('#slide1-btn').css('opacity', 1);
        $('#slide2-btn').css('background-color', '#222');
        $('#slide2-btn').css('opacity', 0.3);
        $('#slide3-btn').css('background-color', '#222');
        $('#slide3-btn').css('opacity', 0.3);
        $('#slide4-btn').css('background-color', '#222');
        $('#slide4-btn').css('opacity', 0.3);
        currentimg = 1;
    }
})

$('#slide1-btn').on('click', function () {
    $('#slide1-btn').css('background-color', '#fff');
    $('#slide1-btn').css('opacity', 1);
    $('#slide2-btn').css('background-color', '#222');
    $('#slide2-btn').css('opacity', 0.3);
    $('#slide3-btn').css('background-color', '#222');
    $('#slide3-btn').css('opacity', 0.3);
    $('#slide4-btn').css('background-color', '#222');
    $('#slide4-btn').css('opacity', 0.3);
    $('.slide1').css('opacity', 1);
    $('.slide2').css('opacity', 0);
    $('.slide3').css('opacity', 0);
    $('.slide4').css('opacity', 0);
})

$('#slide2-btn').on('click', function () {
    $('#slide2-btn').css('background-color', '#fff');
    $('#slide2-btn').css('opacity', 1);
    $('#slide1-btn').css('background-color', '#222');
    $('#slide1-btn').css('opacity', 0.3);
    $('#slide3-btn').css('background-color', '#222');
    $('#slide3-btn').css('opacity', 0.3);
    $('#slide4-btn').css('background-color', '#222');
    $('#slide4-btn').css('opacity', 0.3);
    $('.slide2').css('opacity', 1);
    $('.slide1').css('opacity', 0);
    $('.slide3').css('opacity', 0);
    $('.slide4').css('opacity', 0);
})

$('#slide3-btn').on('click', function () {
    $('#slide3-btn').css('background-color', '#fff');
    $('#slide3-btn').css('opacity', 1);
    $('#slide2-btn').css('background-color', '#222');
    $('#slide2-btn').css('opacity', 0.3);
    $('#slide1-btn').css('background-color', '#222');
    $('#slide1-btn').css('opacity', 0.3);
    $('#slide4-btn').css('background-color', '#222');
    $('#slide4-btn').css('opacity', 0.3);
    $('.slide3').css('opacity', 1);
    $('.slide1').css('opacity', 0);
    $('.slide2').css('opacity', 0);
    $('.slide4').css('opacity', 0);
})

$('#slide4-btn').on('click', function () {
    $('#slide4-btn').css('background-color', '#fff');
    $('#slide4-btn').css('opacity', 1);
    $('#slide2-btn').css('background-color', '#222');
    $('#slide2-btn').css('opacity', 0.3);
    $('#slide3-btn').css('background-color', '#222');
    $('#slide3-btn').css('opacity', 0.3);
    $('#slide1-btn').css('background-color', '#222');
    $('#slide1-btn').css('opacity', 0.3);
    $('.slide4').css('opacity', 1);
    $('.slide1').css('opacity', 0);
    $('.slide3').css('opacity', 0);
    $('.slide2').css('opacity', 0);
})

setInterval(function () {
    if (currentimg == 1) {
        $('.slide2').css('opacity', 1);
        $('.slide1').css('opacity', 0);
        $('.slide3').css('opacity', 0);
        $('.slide4').css('opacity', 0);
        $('#slide2-btn').css('background-color', '#fff');
        $('#slide2-btn').css('opacity', 1);
        $('#slide1-btn').css('background-color', '#222');
        $('#slide1-btn').css('opacity', 0.3);
        $('#slide3-btn').css('background-color', '#222');
        $('#slide3-btn').css('opacity', 0.3);
        $('#slide4-btn').css('background-color', '#222');
        $('#slide4-btn').css('opacity', 0.3);
        currentimg = 2;
    }

    else if (currentimg == 2) {
        $('.slide3').css('opacity', 1);
        $('.slide2').css('opacity', 0);
        $('.slide1').css('opacity', 0);
        $('.slide4').css('opacity', 0);
        $('#slide3-btn').css('background-color', '#fff');
        $('#slide3-btn').css('opacity', 1);
        $('#slide2-btn').css('background-color', '#222');
        $('#slide2-btn').css('opacity', 0.3);
        $('#slide1-btn').css('background-color', '#222');
        $('#slide1-btn').css('opacity', 0.3);
        $('#slide4-btn').css('background-color', '#222');
        $('#slide4-btn').css('opacity', 0.3);
        currentimg = 3;
    }

    else if (currentimg == 3) {
        $('.slide4').css('opacity', 1);
        $('.slide2').css('opacity', 0);
        $('.slide3').css('opacity', 0);
        $('.slide1').css('opacity', 0);
        $('#slide4-btn').css('background-color', '#fff');
        $('#slide4-btn').css('opacity', 1);
        $('#slide2-btn').css('background-color', '#222');
        $('#slide2-btn').css('opacity', 0.3);
        $('#slide3-btn').css('background-color', '#222');
        $('#slide3-btn').css('opacity', 0.3);
        $('#slide1-btn').css('background-color', '#222');
        $('#slide1-btn').css('opacity', 0.3);
        currentimg = 4;
    }

    else {
        $('.slide1').css('opacity', 1);
        $('.slide2').css('opacity', 0);
        $('.slide3').css('opacity', 0);
        $('.slide4').css('opacity', 0);
        $('#slide1-btn').css('background-color', '#fff');
        $('#slide1-btn').css('opacity', 1);
        $('#slide2-btn').css('background-color', '#222');
        $('#slide2-btn').css('opacity', 0.3);
        $('#slide3-btn').css('background-color', '#222');
        $('#slide3-btn').css('opacity', 0.3);
        $('#slide4-btn').css('background-color', '#222');
        $('#slide4-btn').css('opacity', 0.3);
        currentimg = 1;
    }
}, 3000)

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

const btn = document.querySelector('.customized-viewmore-btn')

const onmouseover = e => {
  const { x, y, width, height} = btn.getBoundingClientRect()
  const radius = Math.sqrt(width * width + height * height)
  btn.style.setProperty('--diameter', radius * 2 + 'px')
  const { clientX, clientY } = e
  const left = (clientX - x - radius) / width * 100 + '%'
  const top = (clientY - y - radius) / height * 100 + '%'

  btn.style.setProperty('--left', left)
  btn.style.setProperty('--top', top)
  btn.style.setProperty('--a', '')
  setTimeout(() => {
    btn.style.setProperty('--a', 'ripple-effect 500ms linear')
  }, 5)
}

btn.addEventListener('mouseover', onmouseover)