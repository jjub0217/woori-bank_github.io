// 브라우저가 로드 되면 바로 시작해줘러.
$(function () {

  /**
   * @swiper기능
   * 
   */
  const mainVisual = new Swiper('.section-visual .swiper',{
  effect: "fade",
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


/**
 * @스와이퍼자동재생멈춤기능
 * 
 */
const btnAutoPlay = (target) => {
  console.log("btnAutoPlay 실행");
  if(target.hasClass("on")){
    target.removeClass("on")
    mainVisual.autoplay.start();
  }else{
    target.addClass("on")
    mainVisual.autoplay.stop();
  }
}
$(".btn-autoplay").click(() =>{
  btnAutoPlay($(this))
})


/**
 * @스와이퍼인덱스클릭시자동재생버튼이미지교체기능
 * 
 */
$(".section-visual .control-area .swiper-pagination-bullet").click(() => {
  $(".btn-autoplay").addClass("on")
})

/**
 * @autharea영역의sublist나타내는기능
 * 
 */
$(".auth-area > li").hover(function(){
  $(this).find(".sub-list").addClass("on")
},function(){
  $(this).find('.sub-list').removeClass('on');
})


/**
 * @gnb영역의메뉴리트스에마우스호버했을시sublist나타내는기능
 * 
 */
$(".gnb .nav-item").hover(function(){
  $(this).find(".sub-list").addClass("on")
  $(this).find(".triangle").addClass("on")
}, function () {
  $(this).find('.sub-list').removeClass('on');
  $(this).find(".triangle").removeClass("on")
})


/**
 * @util리스트의item에마우스호버했을시sublist나타내는기능
 * 
 */
$(".util-item").hover(function(){
  $(this).find(".item-area").addClass("on")
  $(this).find(".triangle").addClass("on")
}, function () {
  $(this).find('.item-area').removeClass('on');
  $(this).find(".triangle").removeClass("on")
})


/**
 * @footer에서바로가기메뉴에마우스호버했을시sublist나타내는기능
 * 
 */
$(".group-link .direct-item").hover(function(){
  $(this).find(".item-area").addClass("on")
  $(this).find(".triangle").addClass("on")
  },function(){
    $(this).find(".item-area").removeClass("on") 
    $(this).find(".triangle").removeClass("on")
  })
})