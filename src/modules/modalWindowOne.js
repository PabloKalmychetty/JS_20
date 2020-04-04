'use strict'
const modalOne = (id) => {

      const callBtn = document.querySelectorAll('.call-btn'),
            popupCall = document.querySelector('.popup-call'),
            popupDialog = document.querySelectorAll('.popup-dialog'),
            popupClose = document.querySelectorAll('.popup-close'),
            popup = document.querySelector('.popup');

        callBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popupCall.style.display = 'block';
            });
        });

        popupClose.forEach((elem) => {
            elem.addEventListener('click', () => {
                popupCall.style.display = 'none';
            })
        });

        const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        succesMesage = 'Спасибо! Мы скоро с Вами свяжемся!';
    
        const form = document.querySelector(id),
              inputs = form.elements;
    
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem';
        if (id = 'form6') {
            statusMessage.style.cssText = 'color: black'
        }
        form.addEventListener('submit', (event) => {
              event.preventDefault();
              form.appendChild(statusMessage);
              statusMessage.textContent = loadMessage;
              setTimeout(() => {statusMessage.style.display = 'none'}, 8000);
              const formData = new FormData(form);
              let body = {};
    
              formData.forEach((val, key) => {
                  body[key] = val;
              });
    
              const postData = () => {
                  return fetch('./server.php', {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(body)
                  });
               
              };
     
          postData(formData)
          .then((response) => {
          statusMessage.textContent = loadMessage;
          return response;
          })
          .then((response) => {
              if(response.status !== 200){
                  throw new Error('status network not 200');
              } 
          statusMessage.textContent = succesMesage;
           for (let i = 0; i < inputs.length; i++) {
                  form.reset();
                 };
          })
          .catch(() =>  statusMessage.textContent = errorMessage);
      });
    
      const validatePhoneIds1 = ['phone_1'];
    
      validatePhoneIds1.forEach((item) => {
        let numTel = document.getElementById(item);
        numTel.addEventListener('input', () => {
          numTel.value = numTel.value.replace(/([^+0-9])/gi, '')
        });
      });
    
      const validateTextMes = ['name_1'];
    
      validateTextMes.forEach((item) => {
        let nameInput = document.getElementById(item);
        nameInput.addEventListener('keyup', (e) => {
          nameInput.value = nameInput.value.replace(/[^\sа-я]/i, "");
        });
      });
    
};

export default modalOne;
     