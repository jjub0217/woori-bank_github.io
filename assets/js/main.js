// 브라우저가 로드 되면 바로 시작해줘러.
$(function () {

   const mainVisual = new Swiper('.section-visual .swiper',{
    autoplay:{
      delay: 5000,
    },
    loop: true,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev"
    },
    pagination: {
      el: ".pagination",
      clickable: true
    },
  })

  $(".btn-autoplay").click(function(){
    if($(this).hasClass("on")){
      $(this).removeClass("on")
      mainVisual.autoplay.start();
    }else{
      $(this).addClass("on")
      mainVisual.autoplay.stop();
    }
  })

  $(".auth-area > li").hover(function(){
    $(this).find(".sub-list").addClass("on")
  },function(){
    $(this).find('.sub-list').removeClass('on');
  })

  $(".gnb .nav-item").hover(function(){
  $(this).find(".sub-list").addClass("on")
  $(this).find(".triangle").addClass("on")
  }, function () {
  $(this).find('.sub-list').removeClass('on');
  $(this).find(".triangle").removeClass("on")
  })

  $(".util-list .util-item").hover(function(){
  $(this).find(".sub-list").addClass("on")
  $(this).find(".triangle").addClass("on")
  }, function () {
  $(this).find('.sub-list').removeClass('on');
  $(this).find(".triangle").removeClass("on")
  })
})