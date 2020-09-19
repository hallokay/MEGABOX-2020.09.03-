  //  배너 슬라이드
  var mySwiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
 });



 //차트 탭메뉴 슬라이드

 var mySwiper = new Swiper('.swiper-container2', {
  slidesPerView: 4,
  spaceBetween: 24,
  // mousewheel: {
  //   invert: true,
  // },
  autoplay: {
    delay: 6000,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});



 // 영화차트 탭메뉴

 const movBtn = $(".movie_menu > ul > li");

 const movContents = $(".chart");

movContents.hide().eq(0).show();

movBtn.click(function(e){
  e.preventDefault();
  let target = $(this);
  let index = target.index();

  movBtn.removeClass("active");
  target.addClass("active");
  movContents.css("display", "none");
  movContents.eq(index).css("display", "flex")
});