'use strict'

const sales = () => {
    const checkBtn = document.querySelector('.check-btn'),
      popupCheck = document.querySelector('.popup-check'),
      popupClose = document.querySelectorAll('.popup-close');
      
    checkBtn.addEventListener('click', () => {
        popupCheck.style.display = 'block';
    });

    popupClose.forEach((elem) => {
          elem.addEventListener('click', () => {
            popupCheck.style.display = 'none';
          })
        });

};

export default sales;

    
