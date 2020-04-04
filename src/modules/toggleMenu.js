'use strict';
const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
          menu = document.querySelector('menu'),
          closeBtn = document.querySelector('.close-btn'),
          menuItems = menu.querySelectorAll('ul>li');

btnMenu.addEventListener('click', () => {
    if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
        menu.style.transform = `translate(0)`;
    } else {
        menu.style.transform = `translate(-100%)`;
    }
});         

const handlerMenu = () => {
       if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
           menu.style.transform = `translate(0)`;
       } else {
           menu.style.transform = `translate(-100%)`;
       }
   }
  
   menu.addEventListener('click', (event) => {
        let target = event.target;
        if (target.matches('.close-btn') || target.closest('ul')) {
            handlerMenu();
        }
   });

};

export default toggleMenu;