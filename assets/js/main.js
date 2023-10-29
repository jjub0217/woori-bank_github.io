// 브라우저가 로드 되면 바로 시작해줘러.
$(function () {

    new Swiper('.main-visual .swiper',{

    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev"
    },
    pagination: {
      el: ".pagination",
      clickable: true
    },
//       autoplay: {
//       el: ".btn-autoplay ",
//       delay: 10000,
//  },
  })
})