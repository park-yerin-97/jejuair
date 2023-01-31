$(document).ready(function(){

  /* 예약 팝업창 */
$(".btn_group_box>button").click(function(){
  $(".booking").css({display:"none"})
})

/* 모바일메뉴열기 */
$(".navBtn").click(function(){
  $(".main_nav").addClass("on");
  $(".navInner").animate({left:0},300)
})

/* 모바일메뉴닫기 */
$(".close").click(function(){
  $(".navInner").animate({left:-100+"%"},300,function(){
    $(".main_nav").removeClass("on");
  })
})

/* 하위메뉴-상세메뉴 */
$(".gnb_sub>li").click(function(){
 $(this).find("ul li").slideToggle();
 $(this).addClass("open")
 $(".gnb_sub>li").removeClass("on")
 $(this).addClass("on")
})

/* brand */
var n=0;
$(".brand_content li").eq(n).addClass("active")

$(".brand_nav li").click(function(e){
  e.preventDefault();
  n=$(this).index();
  $(".brand_nav li").removeClass("on");
  $(this).addClass("on")
  $(".brand_content li").hide();
  $(".brand_content li").eq(n).show();
})

/* event */
$(window).scroll(function(){
  if(window.innerWidth<1024){
    var winT=$(this).scrollTop();
    var ticketT=$(".ticket").offset().top;
    if(winT>=ticketT-300){
      $(".ticket").addClass("on")
    }
    var ongoingT=$(".ongoing").offset().top;
    if(winT>=ongoingT-300){
      $(".ongoing").addClass("on")
    }
  }
})

/* check */
$(".check_content li").eq(n).addClass("active")

$(".check_nav li").click(function(e){
  e.preventDefault();
  n=$(this).index();
  $(".check_nav li").removeClass("on");
  $(this).addClass("on");
  $(".check_content li").hide();
  $(".check_content li").eq(n).show();
})


/* slick */
$('.hot_banner').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});





})