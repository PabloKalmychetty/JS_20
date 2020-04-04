'use strict';
const sendForm = (id) => {
    const errorMessage = 'Что-то пошло не так...',
          loadMessage = 'Загрузка...',
          succesMesage = 'Спасибо! Мы скоро с Вами свяжемся!';

          const form = document.querySelector(id),
                inputs = form.elements;

          const statusMessage = document.createElement('div');
          //statusMessage.textContent = 'Тут будет сообщение';
          statusMessage.style.cssText = 'font-size: 2rem';
          if (id = 'form2') {
              statusMessage.style.cssText = 'color: white'
          }
          //form.appendChild(statusMessage);
          form.addEventListener('submit', (event) => {
                event.preventDefault();
                form.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
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
};

  const validatePhoneIds1 = ['form1-phone', 'form2-phone', 'form3-phone'];

  validatePhoneIds1.forEach((item) => {
    let numTel = document.getElementById(item);
    numTel.addEventListener('input', () => {
      numTel.value = numTel.value.replace(/([^+0-9])/gi, '')
    });
  });

  const validateTextMes = ['form2-message', 'form1-name', 'form2-name', 'form3-name'];

  validateTextMes.forEach((item) => {
    let nameInput = document.getElementById(item);
    nameInput.addEventListener('keyup', (e) => {
      nameInput.value = nameInput.value.replace(/[^\sа-я]/i, "");
    });
  });

  export default sendForm;