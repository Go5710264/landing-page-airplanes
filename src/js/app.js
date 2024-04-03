import Swiper from 'swiper';
/* eslint-disable import/no-unresolved */
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  const ARR_SWIPERS = [
    'gray-advertising-page__swiper-container',
    'beauty-academy__swiper-container',
    'beauty-boxes__swiper-container',
    'fitness-room__swiper-container',
  ];

  ARR_SWIPERS.forEach((item) => new Swiper(`.${item}`, {
    slidesPerView: 1.25,
    spaceBetween: 20,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 20,
  }));
});
