const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,

    autoplay:{
        delay:2000,
    },


  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullests: true,
      clickable: true

    },
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  