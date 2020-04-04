'use strict'
const calcAccordion = (id) => {
// аккордеон
 document.addEventListener('click', (event) => {
  const panelCalc = event.target.closest('.panel-calc'),
        nextStep = event.target.closest('.construct-btn'),
        panelCollapse = event.target.closest('.panel-collapse'), 
        panelbody = event.target.closest('.panel-body');
      
  if (panelCalc) {
      event.preventDefault();
      const collapse = panelCalc.nextElementSibling;
      panelCalc.closest('.panel-group').querySelectorAll('.panel-collapse').forEach(now => {
          now.classList.toggle('in', now === collapse && !now.classList.contains('in'));
      });
  } 
  
});
let nextStepBtn = document.querySelectorAll('.construct-btn');

  let activePanel;
  nextStepBtn.forEach((elem) => {
      elem.addEventListener('click', function(e) {
          const panel = this.closest('.panel-default');
          panel.querySelector('.panel-collapse').classList.remove('in');
          //show new thingy;
          panel.nextElementSibling.querySelector('.panel-collapse').classList.add('in');
          //hide old thingy
          if (activePanel) {
            activePanel.nextElementSibling.querySelector('.panel-collapse').classList.remove('in');
          }
          //update thingy
          activePanel = (activePanel === this.closest('.panel-default')) ? 0 : this.closest('.panel-default');
        });
  }); 

//  калькулятор
const onoffswitchCheckbox = document.getElementById('myonoffswitch'),
      onoffswitchInner = document.querySelector('.onoffswitch-inner'),
      onoffswitch = document.querySelector('.onoffswitch-switch'),
      selectBox = document.querySelectorAll('.select-box'),
      titleText = document.querySelectorAll('.title-text'),
      calcResult = document.getElementById('calc-result'),
      formControl = document.querySelectorAll('.form-control'),
      constructor = document.querySelector('.constructor'),
      myonoffswitchTwo = document.getElementById('myonoffswitch-two'),
      popupDiscount = document.querySelector('.popup-discount'),
      constructBtnForm = document.querySelector('.construct-btn-form'),
      popupClose = document.querySelectorAll('.popup-close'),
      captureFormBtn = document.querySelector('.capture-form-btn'),
      distance = document.getElementById('distance');

  titleText[1].style.display = 'none';
  selectBox[2].style.display = 'none';
  selectBox[3].style.display = 'none';

  onoffswitchInner.addEventListener('click', () =>{
  titleText[1].style.display = 'block';
  selectBox[2].style.display = 'block';
  selectBox[3].style.display = 'block';
  });

  onoffswitch.addEventListener('click', () => {
  titleText[1].style.display = 'none';
  selectBox[2].style.display = 'none';
  selectBox[3].style.display = 'none';
  });

  const countSum = () => {
    let total = 11000,
        typeSeptic = 0,
        oneDiametrValue = 0,
        oneNumberRingsValue = 0,
        twoDiametrValue = 0,
        twoNumberRingsValue = 0,
        bottomWell = 0;

    if(onoffswitchCheckbox.checked){
      typeSeptic = 10000;
    } else if(onoffswitchInner){
      typeSeptic = 15000;
    }

  let oneDiametr = formControl[0].options.selectedIndex,
      oneNumberRings = formControl[1].options.selectedIndex,
      twoDiametr = formControl[2].options.selectedIndex,
      twoNumberRings = formControl[3].options.selectedIndex;

      if(oneDiametr === 1){
        oneDiametrValue = 2000;
      };

      if(oneNumberRings === 1){
      oneNumberRingsValue = 3000;

      } else if(oneNumberRings === 2){
        oneNumberRingsValue = 5000;
      } 

      if(twoDiametr === 1) {
        twoDiametrValue = 3000;
      }

      if(twoNumberRings === 1){
        twoNumberRingsValue = 4500;
      } else if(twoNumberRings === 2) {
        twoNumberRingsValue = 7500;
      }

      if(myonoffswitchTwo.checked){
        if(onoffswitchCheckbox.checked){
           bottomWell = 1000;
        } else {
          bottomWell = 2000;
        }
       
      };

    total = typeSeptic + oneDiametrValue + oneNumberRingsValue + twoDiametrValue + twoNumberRingsValue + bottomWell;

    calcResult.value = total;
  

const errorMessage = 'Что-то пошло не так...',
          loadMessage = 'Загрузка...',
          succesMesage = 'Спасибо! Мы скоро с Вами свяжемся!';

          const form = document.querySelector(id),
                inputs = form.elements;

          const statusMessage = document.createElement('div');
          statusMessage.style.cssText = 'font-size: 2rem';
          if (id = 'form5') {
              statusMessage.style.cssText = 'color: green'
          }
          form.addEventListener('submit', (event) => {
                event.preventDefault();
                form.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
                const formData = new FormData(form);
                let body = {
                'тип септика': onoffswitchCheckbox.checked,
                'диаметр приемного колодца': formControl[0].options.selectedIndex,
                'количество колец приемного колодца': formControl[1].options.selectedIndex,
                'диаметр дренажного колодца': formControl[2].options.selectedIndex,
                'количество колец дренажного колодца': formControl[3].options.selectedIndex,
                'наличие днища колодца': myonoffswitchTwo.checked,
                'примерная стоимость': calcResult.value
                };

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

}

const validatePhoneIds1 = ['phone_11', 'distance'];

validatePhoneIds1.forEach((item) => {
    let numTel = document.getElementById(item);
    numTel.addEventListener('input', () => {
      numTel.value = numTel.value.replace(/([^+0-9])/gi, '')
    });
});

const validateTextMes = ['name_11'];

validateTextMes.forEach((item) => {
    let nameInput = document.getElementById(item);
    nameInput.addEventListener('keyup', (e) => {
      nameInput.value = nameInput.value.replace(/[^\sа-я]/i, "");
    });
});

constructor.addEventListener('input', (event) => {
    const target = event.target;
    if(target.matches('input') || target.matches('select')) {
      countSum();
     };
  });

constructBtnForm.addEventListener('click', () => {
  popupDiscount.style.display = 'block';
});

popupClose.forEach((elem) => {
  elem.addEventListener('click', () => {
    popupDiscount.style.display = 'none';
    calcResult.value = "";
    distance.value = "";
    onoffswitchCheckbox.checked = true;
    myonoffswitchTwo.checked = true;
    formControl[0].options.selectedIndex = 0;
    formControl[1].options.selectedIndex = 0;
    formControl[2].options.selectedIndex = 0;
    formControl[3].options.selectedIndex = 0;
  })
});

};
 
export default calcAccordion;



 