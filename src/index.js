'use strict'
import modalOne from './modules/modalWindowOne';
import sendForm from './modules/formSubmission';
import sales from './modules/sales';
import modalTwo from './modules/modalWindowTwo';
import modalThree from './modules/modalWinThreeFormSubm';
import moreButton from './modules/moreButton';
import accordion from './modules/accordion';
import calcAccordion from './modules/calcAccordion';

modalOne('#form6');

sendForm('#form1');
sendForm('#form2');
sendForm('#form7');

sales();

modalTwo();

modalThree('#form3');
modalThree('#form4');

moreButton('#form5');

accordion();

calcAccordion('#form5');
