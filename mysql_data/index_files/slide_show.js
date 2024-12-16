/**
 +----------------------------------------------------------
 * 首页幻灯
 +----------------------------------------------------------
 */
var mySwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal', // horizontal：横向切换 vertical：竖向切换
  // effect : 'fade', // 淡入淡出
  loop: true, // 循环模式选项
  autoplay: true, // 自动播放
  speed: 2000, // 播放速度

  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // 分页器可点击
  },

  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // 如果需要滚动条
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})