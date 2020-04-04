'use strict'
 
const btnPlus = document.getElementsByTagName('button'),
      incomePlus = btnPlus[0], 
      expensesPlus = btnPlus[1],
      periodSelect = document.querySelector('.period-select');
let start = document.getElementById('start'), 
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'), 
    depositCheck = document.getElementById('deposit-check'),
    budgetDayValue = document.getElementsByClassName('result-total budget_day-value')[0],  
    budgetMonthValue = document.getElementsByClassName('result-total budget_month-value')[0], 
    expensesMonthValue = document.getElementsByClassName('result-total expenses_month-value')[0], 
    accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0], 
    additionalIncomeValue = document.getElementsByClassName('result-total additional_income-value')[0], 
    additionalExpensesValue = document.getElementsByClassName('result-total additional_expenses-value')[0], 
    incomePeriodValue = document.querySelectorAll('.result-total.income_period-value')[0], 
    targetMonthValue = document.getElementsByClassName('result-total target_month-value')[0], 
    salaryAmount = document.querySelector('.salary-amount'), 
    incomeTitle = document.querySelector('.income-title'), 
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'), 
    expensesAmount = document.querySelector('.expenses-amount'),
    expensesItems = document.querySelectorAll('.expenses-items'), 
    additionalExpenses = document.querySelector('.additional-expenses'), 
    creset = document.getElementById('cancel'),
    titlePeriodAmount = document.querySelector('.title.period-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'), 
    targetAmount = document.querySelector('.target-amount'), 
    incomeItems = document.querySelectorAll('.income-items'),
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent');

    const isNumber = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    start.disabled = true;

    class AppData {

        constructor() {

        this.budget = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.expensesMonth = 0;
        this.income = {};
        this.incomeMonth = 0;
        this.addIncome = [];
        this.expenses = {};
        this.addExpenses = [];
        this.deposit = false;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
    
        };

    changePercent() {
     const valueSelect = this.value;
     if(valueSelect === 'other') {
       depositPercent.style.display = 'inline-block';
       this.percentDeposit = depositPercent.value;
     } else {
        depositPercent.value = valueSelect; 
     }
    };
     
    depositHandler() {
         if(depositCheck.checked) {
            depositBank.style.display = 'inline-block';
            depositAmount.style.display = 'inline-block';
            this.deposit = true;
            depositBank.addEventListener('change', this.changePercent);
         } else {
            depositBank.style.display = 'none';
            depositAmount.style.display = 'none';
            depositBank.value = '';
            depositAmount.value = '';
            depositPercent.value = '';
            this.deposit = false;
            depositPercent.style.display = 'none'; 
            depositBank.removeEventListener('change', this.changePercent);
        }
    };

    eventListeners() {

        start.addEventListener('click', this.start.bind(this));
    
        incomePlus.addEventListener('click', this.addIncomeBlock.bind(this));
            
        expensesPlus.addEventListener('click', this.addExpensesBlock.bind(this));
            
        periodSelect.addEventListener('input', this.rangeOn.bind(this));
            
        creset.addEventListener('click', this.resetOn.bind(this));

        salaryAmount.addEventListener('input', () => {
            if(salaryAmount.value === ''){
                start.disabled = true;
            } else {
                start.disabled = false;
            }
        });

        depositPercent.addEventListener('input', () => {
        if(!parseInt(depositPercent.value) || depositPercent.value <= 0 || depositPercent.value >= 100) {
               depositPercent.value = '';
               start.disabled = true;
               alert('Введите корректное значение в поле проценты');
        } else {
               start.disabled = false;
        }
        });

        depositCheck.addEventListener('change', this.depositHandler.bind(this));

    };

    start() {
        this.budget = +salaryAmount.value;
    
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getInfoDeposit();
        this.getBudget();
        this.getIncome();
        this.showResult();
    
        //блокировка всех input[type = text]
        let blocked = document.querySelectorAll('input[type = text]');
    
        for(let i = 0; i < blocked.length; i++) {
                blocked[i].disabled = true;
        };
            
        start.style.display = 'none';
        cancel.style.display = 'block';
    };

        addIncomeBlock() {
            let cloneIncomeItem = incomeItems[0].cloneNode(true);
            incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
            incomeItems = document.querySelectorAll('.income-items')
                   if(incomeItems.length === 3){
                    incomePlus.style.display = 'none';
                   }
        };
    
        addExpensesBlock() {
                   
            let cloneExpensesItem = expensesItems[0].cloneNode(true);
            expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
            expensesItems = document.querySelectorAll('.expenses-items')
               if(expensesItems.length === 3){
                   expensesPlus.style.display = 'none';
               }
        };

        rangeOn() {
            
            titlePeriodAmount.innerHTML = periodSelect.value; 
                
        };

        
        resetOn() {

            start.disabled = true;

            let inputs = document.querySelectorAll('input[type = text]');
    
            for(let i = 0; i < inputs.length; i++) {
                inputs[i].value = '';
            };
    
            let blocked = document.querySelectorAll('input[type = text]');
    
            for(let i = 0; i < blocked.length; i++) {
                blocked[i].disabled = false;
    
            };
    
               incomeItems;
               for (let i = 1; i < incomeItems.length; i++) {
                   if (i !== 0) {
                       incomeItems[i].parentNode.removeChild(incomeItems[i]);
                   }
                   incomePlus.style.display = 'block';
               }
           
               expensesItems;
               for (let i = 1; i < expensesItems.length; i++) {
                   if (i !== 0) {
                       expensesItems[i].parentNode.removeChild(expensesItems[i]);
                   }
                   expensesPlus.style.display = 'block';
               }
    
                titlePeriodAmount.innerHTML = 1; 
                periodSelect.value = 1;
    
                cancel.style.display = 'none';
                start.style.display = 'block';

                depositCheck.checked = false;
                depositBank.style.display = 'none';
                depositAmount.style.display = 'none';
    
                this.budget = 0;
                this.budgetDay = 0;
                this.budgetMonth = 0;
                this.expensesMonth = 0;
                this.income = {};
                this.incomeMonth = 0;
                this.addIncome = [];
                this.expenses = {};
                this.addExpenses = [];
                this.deposit = false;
                this.percentDeposit = 0;
                this.moneyDeposit = 0;
    
        };

    showResult() {
        const _this = this;
        budgetMonthValue.value = this.budgetMonth; 
        budgetDayValue.value = Math.ceil(this.budgetDay);
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcSavedMoney();
        incomeItems.value = this.income;
        incomeItems.value = this.incomeMonth;
         
        periodSelect.addEventListener('input', () => {
            
        incomePeriodValue.value = _this.calcSavedMoney(); 
            
        });
        
    };

    getExpenses() {
        const _this = this;
          expensesItems.forEach(function(item) {
             let itemExpenses = item.querySelector('.expenses-title').value;
             let cashExpenses = item.querySelector('.expenses-amount').value;
             if(itemExpenses !== '' && cashExpenses !== '') {
                 _this.expenses[itemExpenses] = cashExpenses; 
             }
          }, this);
    };

    getIncome() {
         const _this = this;
         incomeItems.forEach(function(item) {
         let incomeTitle = item.querySelector('.income-title').value,
            incomeAmount = item.querySelector('.income-amount').value;
            console.log(incomeAmount);
            if(incomeTitle !== '' && incomeAmount !== '') {
                _this.income[incomeTitle] = +incomeAmount; 
                _this.incomeMonth += +incomeAmount; 
            }
         }, this);
    };

    getAddExpenses() {
        let addExpenses = additionalExpensesItem.value.split(',');
        const _this = this;
        addExpenses.forEach(function(item) {
              item = item.trim();
              if(item !== '') {
                  _this.addExpenses.push(item); 
              }
          }, this);
    };
    getAddIncome(){
        const _this = this;
        additionalIncomeItem.forEach(function(item) {
               let itemValue = item.value.trim();
               if(itemValue !== ''){
                   _this.addIncome.push(itemValue); 
               }
        }, this);
    };

    getExpensesMonth() {
          let rez = 0;
          for(let key in this.expenses) {
              rez += +this.expenses[key];
              
          }
          this.expensesMonth = +rez;
          console.log(rez);
          console.log(this.expensesMonth);
    };

    getBudget() {    
       const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);
       this.budgetMonth = this.budget + +this.incomeMonth - this.expensesMonth + monthDeposit;
       this.budgetDay = this.budgetMonth / 30;
         
    };

    getTargetMonth() {
    return targetAmount.value / this.budgetMonth;
  
    };
    getStatusIncome(){
        if(this.budgetDay >= 1200){
            console.log("У Вас высокий уровень дохода");
        } else if( 1200 > this.budgetDay > 600) {
            console.log("У Вас средний уровень дохода");
        } else if( this.budgetDay <= 600) {
            console.log("К сожалению у Вас уровень дохода ниже среднего");
        } else if( this.budgetDay <= 0){
            console.log("Что-то пошло не так");
        } else {
        
        };
    
    };

    getInfoDeposit() {
        if(this.deposit) {
            this.percentDeposit = depositPercent.value;
            this.moneyDeposit = depositAmount.value;
        }
    };

    calcSavedMoney() {
        return appData.budgetMonth * periodSelect.value; // без this
          
    };

};

    const appData = new AppData();

    appData.eventListeners();

for (let key in appData) {
    console.log('Наша программа включает в себя данные:' + key + ': ' + appData[key]);
  }