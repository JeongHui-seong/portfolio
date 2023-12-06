//section1 left fixed
$.fn.Scrolling = function (obj, tar) {
  const _this = this;
  $(window).scroll(function (e) {
    let end = obj + tar;
    if ($(window).scrollTop() >= obj) {
      _this.addClass("fixed")
    } else {
      _this.removeClass("fixed");
    }
    if ($(window).scrollTop() >= end) {
      _this.addClass("fixed2")
    }
    else {
      _this.removeClass("fixed2");
    };

  });
};

$(".s1-inr .left .ct-bx").Scrolling($(".s1-inr .left .ct-bx").offset().top, ($("#section1").height() + $("#visual").height() - $("#section1").offset().top - $("#section1").offset().top / 2));

// AOS
AOS.init();

// header
function moveheader() {
  document.addEventListener('scroll', onScroll, { passive: true });
  let last = 0;
  const gap = 1;
  const nav = document.querySelector('#header');
  const headerheight = document.querySelector('#header').clientHeight;
  function onScroll() {

    const scrollposition = scrollY;
    if (Math.abs(last - scrollposition) <= gap) return;
    else if (scrollposition > last || scrollposition <= headerheight) {
      nav.classList.remove("hd-fix");
    }
    else if (scrollposition < last) {
      nav.classList.add("hd-fix");
    }

    last = scrollposition;
  }
}
moveheader();

//text-line
const tl = new gsap.timeline();
const ani = document.querySelector(".tl-inr")

tl.set(ani, { willChange: 'transform' });

tl.fromTo(
  ani,
  {
    x: -350
  },
  {
    x: 10,
  },
  0
);

ScrollTrigger.create({
  trigger: ani,
  animation: tl,
  start: 'top bottom',
  end: 'bottom top',
  scrub: 1,
});

// background scroll

document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const section1 = document.getElementById('section1');
  const section2 = document.getElementById('section2');
  const section1Height = section1.offsetHeight;
  const section2Top = section2.offsetTop;
  let scrollPosition = window.scrollY;

  function handleScroll() {
    scrollPosition = window.scrollY;

    if (scrollPosition < section1Height - 10) {
      // Section 1 내에서는 배경 색상이 검정색으로 고정
      body.style.backgroundColor = 'black';
      $(".starry-black").css("display", "block");
      $(".starry-white").css("display", "none");
      $(".bars .line").css("background","white");
      $(".mGnb-inr").css("background","white");
      $(".mGnb-inr li a").css("color","black");
      $(".hd-inr .logo").css("color","white");
      $(".hd-inr .gnb p").css("color","white");

    } else if (scrollPosition <= section2Top + 10) {
      // Section 1에서 Section 2로 스크롤할 때 배경 색상 서서히 변경
      let percentage = ((scrollPosition - (section1Height - 10)) / (section2Top - 10 - (section1Height - 10))) * 100;
      body.style.backgroundColor = 'hsl(0, 0%, ' + percentage + '%)';
    } else {
      // Section 2에 도달하면 배경 색상이 흰색으로 고정
      body.style.backgroundColor = 'white';
      $(".starry-black").css("display", "none");
      $(".starry-white").css("display", "block");
      $(".bars .line").css("background","black");
      $(".mGnb-inr").css("background","black");
      $(".mGnb-inr li a").css("color","white");
      $(".hd-inr .logo").css("color","black");
      $(".hd-inr .gnb p").css("color","black");
    }
  }

  window.addEventListener('scroll', handleScroll);
});

$(window).scroll(function () {
  if ($(window).scrollTop() >= $("#section3").offset().top - 100) {
    $("#section3").css("opacity", "1");
    $(".hd-inr .logo").css("color", "white");
    $(".hd-inr .gnb p").css("color", "white");
    $(".starry-gra").css("display", "block");
    $(".bars .line").css("background", "white");
    $(".mGnb-inr").css("background", "white");
    $(".mGnb-inr li a").css("color", "black");
  }
  else {
    $("#section3").css("opacity", "0");
    $(".starry-gra").css("display", "none");
  }
});

//mobile nav
$(".bars").on("click", function () {
  if ($(".bars").hasClass("close")) {
    $("#header").css("z-index", 10);
    $("#mGnb").css("z-index", -1);
    $("#mGnb").css("opacity", 0);
    $("#mGnb").css("visibility", "hidden");
    $(".bars").removeClass("close");
    $(".bars .line:first-child").css("transform", "rotate(0) translateY(0)");
    $(".bars .line:nth-child(2)").css("display", "block");
    $(".bars .line:last-child").css("transform", "rotate(0) translateY(0)");
  } else {
    $("#header").css("z-index", 999);
    $("#mGnb").css("z-index", 900);
    $("#mGnb").css("opacity", 1);
    $("#mGnb").css("visibility", "visible");
    $(".bars").addClass("close");
    $(".bars .line:first-child").css("transform", "rotate(45deg) translateY(5px)");
    $(".bars .line:nth-child(2)").css("display", "none");
    $(".bars .line:last-child").css("transform", "rotate(-45deg) translateY(-5px)");
  }
});

$("#mGnb .mGnb_inr li a").on("click", function () {
  $("#header").css("z-index", 10);
  $("#mGnb").css("z-index", -1);
  $("#mGnb").css("opacity", 0);
  $("#mGnb").css("visibility", "hidden");
  $(".bars").removeClass("close");
  $(".bars .line:first-child").css("transform", "rotate(0) translateY(0)");
  $(".bars .line:nth-child(2)").css("display", "block");
  $(".bars .line:last-child").css("transform", "rotate(0) translateY(0)");
})

$("#mGnb").on("click", function () {
  $("#header").css("z-index", 10);
  $("#mGnb").css("z-index", -1);
  $("#mGnb").css("opacity", 0);
  $("#mGnb").css("visibility", "hidden");
  $(".bars").removeClass("close");
  $(".bars .line:first-child").css("transform", "rotate(0) translateY(0)");
  $(".bars .line:nth-child(2)").css("display", "block");
  $(".bars .line:last-child").css("transform", "rotate(0) translateY(0)");
});
