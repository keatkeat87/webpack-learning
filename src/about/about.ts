import './about.css';
import * as $ from 'jquery';

import SwiperCore, { Navigation, Pagination, Swiper } from 'swiper/core';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation, Pagination]);
console.log([$, Swiper]);

console.log('about page');
