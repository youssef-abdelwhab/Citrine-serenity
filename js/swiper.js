const swiper = new Swiper('.swiper', {
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
  
  });

  var swiper2 = new Swiper(".product_swaper", {
    slidesPerView: 4,
    spaceBetween:30,
    // autoplay:{
    //    delay:4000,
    // },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    loop:true,
    breakpoints:{
      1600:{
        slidesPerView: 5,
      },
      1200:{
        slidesPerView: 4,
        spaceBetween:25,
      },
      700:{
        slidesPerView: 3,
        spaceBetween:15,
      },
      0:{
        slidesPerView: 2,
        spaceBetween:10,
      },
    }
  });
