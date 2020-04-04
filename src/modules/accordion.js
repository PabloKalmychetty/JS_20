'use strict'
const accordion = () => {

document.addEventListener('click', (event) => {
  const questionItem = event.target.closest('.question-item');
  
  if (questionItem) {
      event.preventDefault();
      const collapse = questionItem.nextElementSibling;
      questionItem.closest('.panel-group').querySelectorAll('.panel-collapse').forEach(now => {
          now.classList.toggle('in', now === collapse && !now.classList.contains('in'));
      });
  } 
});

};
export default accordion;