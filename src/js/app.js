// TODO: write your code here
import Swiper from "swiper";
import 'swiper/css';


document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.gray-advertising-page__swiper-container', {
    slidesPerView: 1.25,
    spaceBetween: 20,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 20,
  });

  new Swiper('.beauty-academy__swiper-container', {
    slidesPerView: 1.25,
    spaceBetween: 20,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 20,
  });
  
});
