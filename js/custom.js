$(function () {  
  $(".gnb_wrap > ul > li").bind('mouseenter focusin', function(){
    $('.gnb_wrap >ul > li').removeClass("active");
    $(this).children("div").stop().show();
    $(this).addClass("active");
  });
  $(".gnb_wrap > ul > li").on('mouseleave', function(){
    $('.gnb_wrap > ul > li').removeClass("active");
    $(this).children("div").stop().hide();
  });
  $(".gnb_wrap > ul > li").on('focusout', function(){
    $('.gnb_wrap >ul >li').removeClass("active");
    $(this).children("div").stop().hide(300);
  });  
});

// 좌측 모바일 메뉴
$(document).ready(function () {
  $(".mobile_menu > ul > li > a").click(function () {
    if ($(this).parent().children("ul").is(':visible')) {} else { //menu toggle
      $(".mobile_btn").removeClass("on");
      $(".mobile_menu > ul > li > ul").hide(200);
    }
    $(this).nextAll(".mobile_btn").toggleClass("on");
    $(this).nextAll(".mobile_menu > ul > li > ul").slideToggle(200);
  });

  $(".mobile_btn").click(function () {
    $(this).parent().children("ul").slideToggle(200);
    $(this).toggleClass("on");
  });

  $("#mobile_menu_close").click(function () {
    $("#aside").animate({
      "left": "-320px"
    }, 200);
    $(".close_menu").animate({
      "left": "-50px"
    }, 200);
  });

  $("#mobile_menu_open").click(function () {
    $("#aside").animate({
      "left": "0px"
    }, 200);
    $(".close_menu").animate({
      "left": "200px"
    }, 200);
  });

});
// 좌측 모바일 메뉴 끝


// Sticky Navi 
$(window).scroll(function () {
  if ($(window).scrollTop() >= 60) {
    $("header").addClass("on");
  } else {
    $("header").removeClass("on");
  }  
}).scroll();
// Sticky Navi 끝/


// 메인 퀵가이드 슬라이드
$('#banner').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  variableWidth: true,
  centerPadding: '5px',
  focusOnSelect: false,
  //variableWidth: true,
  prevArrow: $('.arrow_banner.prev'),
  nextArrow: $('.arrow_banner.next'),
  responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 2,
        //centerMode: true,
        centerPadding: '5px'
      }
    }
  ]
});


$("#top_btn").on("click", function () {
  $("html, body").animate({
    scrollTop: 0
  }, '500');
  return false;
});