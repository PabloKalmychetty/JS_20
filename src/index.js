'use strict';
import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest'; 
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';

import countTimer from './modules/countTimer';
import slider from './modules/slider';
import tabs from './modules/tabs';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import SliderCarousel from './modules/SliderCarousel';


// таймер
countTimer('16 april 2020');
// меню с делегированием
toggleMenu();
//popup
togglePopUp();
// tub
tabs();
// слайдер 
slider();
//  калькулятор 
calc(100);
sendForm('#form1');
sendForm('#form2');
sendForm('#form3');
// слайдер в ООП стиле 
const carousel = new SliderCarousel({
    main: '.companies-wrapper',
    wrap: '.companies-hor',
    slidesToShow: 4,
    infinity: true,
    responsive: [{
        breakpoint: 1024,
        slideToShow: 3
    },
    {
        breakpoint: 768,
        slideToShow: 2
    },
    {
        breakpoint: 576,
        slideToShow: 1
    }
]
});
carousel.init();