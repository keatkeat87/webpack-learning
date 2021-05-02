import './home.scss';
import { value, html } from '../shared/index';

import SwiperCore, { Navigation, Pagination, Swiper } from 'swiper/core';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination]);

console.log('contact page', value);
html('#target', 'home page');

const swiper = new Swiper('.swiper-container', {
    // direction: 'vertical',
    // loop: true,

    pagination: {
        el: '.swiper-pagination'
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }

    // scrollbar: {
    //     el: '.swiper-scrollbar'
    // }
});
console.log(swiper);











/* flatpickr
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';

console.log('flatpickr', flatpickr);
const datepicker = flatpickr('#js-datepickerInput', {
    inline: true,
    minDate: new Date(),
    disable: [date => false],
    onChange: (...args: any[]) => {
        console.log(args);
        console.log('datepicker.selectedDates', typeof datepicker.selectedDates[0]);
    }
}) as flatpickr.Instance;

setTimeout(() => {
    datepicker.setDate([]);
}, 3000);

*/
