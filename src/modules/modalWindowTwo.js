'use strict'
const modalTwo = () => {
    const discountBtn = document.querySelectorAll('.discount-btn'),
          popupDiscount = document.querySelector('.popup-discount'),
          popupClose = document.querySelectorAll('.popup-close');

          discountBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popupDiscount.style.display = 'block';
            });
        });

        popupClose.forEach((elem) => {
            elem.addEventListener('click', () => {
                popupDiscount.style.display = 'none';
            })
        });
    
};

export default modalTwo;
