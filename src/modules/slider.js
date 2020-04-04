'use strict';
const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'), 
            portfolioDots = document.querySelector('.portfolio-dots'),
            slider = document.querySelector('.portfolio-content');

    let currentSlide = 0, // номер слайда 
        interval;

    for (let i = 0; i < slide.length; i++) {
         let dot = document.createElement('li');
             dot.classList.add('dot');
            if (currentSlide === i) {
                dot.classList.add('dot-active');
            }
            portfolioDots.appendChild(dot);
    };

    const dot = document.querySelectorAll('.dot');

    const prevSlide = (elem, index, strClass) => { // основная функция №1
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {  // основная функция №2
       elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if(currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
          interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
       clearInterval(interval);
    };


    slider.addEventListener('click', (event) => {
        event.preventDefault(); // без этого кода при нажатиии на стрелку, страница уходит в начало (стоят ссылки-заглушки)

        let target = event.target;

        if(!target.matches('.portfolio-btn, .dot')) { // это немного 
            return;                                   //  непонятно
        }

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');

        if(target.matches('#arrow-right')) {
            currentSlide++;
        } else if(target.matches('#arrow-left')){
            currentSlide--;
        } else if(target.matches('.dot')){
            dot.forEach((elem, index) => {
                if(elem === target){
                    currentSlide = index;
                }
            });
        }

        if(currentSlide >= slide.length) { //  условие, когда стрелочка доходит до правого края 
            currentSlide = 0;
        }

        if(currentSlide < 0) {                 //  условие, когда стрелочка доходит до левого края 
            currentSlide = slide.length - 1;
        }

        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');

     });

     slider.addEventListener('mouseover', (event) => {
       if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
          stopSlide();
       }
     });

     slider.addEventListener('mouseout', (event) => {
       if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
            startSlide();
         }
    });

    startSlide(1500);


};

let imgCommand = document.querySelectorAll('img.command__photo');

imgCommand.forEach((elem) => {
    let src = elem.src;
    elem.addEventListener('mouseenter', (e) => {
    event.target.src = event.target.dataset.img;
    }); 
    elem.addEventListener('mouseleave', (e) => {
    event.target.src = src;
    });
});

export default slider;