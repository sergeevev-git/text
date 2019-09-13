'use strict';

let btn_start = document.getElementById('start');
let budget_value = document.getElementsByClassName('budget-value')[0];
let daybudget_value = document.getElementsByClassName('daybudget-value')[0];
let level_value = document.getElementsByClassName('level-value')[0];
let expenses_value = document.getElementsByClassName('expenses-value')[0];
let optionalexpenses_value = document.getElementsByClassName('optionalexpenses-value')[0];
let income_value = document.getElementsByClassName('income-value')[0];
let monthsavings_value = document.getElementsByClassName('monthsavings-value')[0];
let yearsavings_value = document.getElementsByClassName('yearsavings-value');

let expenses_item = document.getElementsByClassName('expenses-item');

let expenses_item_btn = document.getElementsByTagName('button')[0];
let optionalexpenses_btn = document.getElementsByTagName('button')[1];
let count_budget_btn = document.getElementsByTagName('button')[2];

let optionalexpenses_item = document.querySelectorAll('.optionalexpenses-item');

let choose_income = document.querySelector('.choose-income');
let savings = document.querySelector('#savings');
let choose_sum = document.querySelector('.choose-sum');
let choose_percent = document.querySelector('.choose-percent');
let year_value = document.querySelector('.year-value');
let month_value = document.querySelector('.month-value');
let day_value = document.querySelector('.day-value');

let money, time;

btn_start.addEventListener('click', function() {
    time = prompt ("Введите дату в формате YYYY-MM-DD", ""); 
    money = +prompt ("Ваш бюджет на месяц?", "");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", "");
    }
    //делаем активными кнопки доп.расчетов
    expenses_item_btn.disabled = false;
    optionalexpenses_btn.disabled = false;
    count_budget_btn.disabled = false;

    persone.budget = money;
    persone.timeData = time;
    budget_value.textContent = money.toFixed();
    year_value.value = new Date(Date.parse(time)).getFullYear();
    month_value.value = new Date(Date.parse(time)).getMonth() + 1;
    day_value.value = new Date(Date.parse(time)).getDate();
})

expenses_item_btn.addEventListener('click', function() {
    let summa = 0;
    for (let i = 0; i < expenses_item.length; i++) {
        let a = expenses_item[i].value,
            b = expenses_item[++i].value;
            // console.log(typeof(Number(b)));
            // console.log(Number(b));
        //проверка на корректность введенных данных
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
        //далее вариант условия мс проверкой поля цены на введение букв, надо разобраться
        //if ( typeof(a)==='string' && isNaN(Number(b)) && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {            
            persone.expenses[a] = b;
            summa += +b;
        } else {                            
            //console.log ("bad result");
            i--;
        }
     }
    expenses_value.textContent = summa;
})

optionalexpenses_btn.addEventListener('click',function() {
    for (let i = 0; i < optionalexpenses_item.length; i++) {
        let opt = optionalexpenses_item[i].value;
        persone.optionalExpenses[i] = opt;
        optionalexpenses_value.textContent += persone.optionalExpenses[i] + ', ';
    }
});

count_budget_btn.addEventListener('click', function() {
    if (persone.budget != undefined)    {
        persone.moneyPerDay = ((persone.budget - +expenses_value.textContent) / 30).toFixed();
        daybudget_value.textContent = persone.moneyPerDay;
        if (persone.moneyPerDay < 100) {
            level_value.textContent = "Минимальный уровень достатка";
        } else if (persone.moneyPerDay >= 100 && persone.moneyPerDay <= 2000) {
            level_value.textContent = "Средний уровень достатка";
        } else if (persone.moneyPerDay > 2000) {
            level_value.textContent = "Высокий уровень достатка";
        } else {
            level_value.textContent = "Error";
        }
    } else {
        daybudget_value.textContent = 'Ошбика';
    }
})

choose_income.addEventListener('input', function() {
    let items = choose_income.value;
    persone.income = items.split(', ');
    income_value.textContent = persone.income;
})

savings.addEventListener('click', function() {
    if (persone.savings == false) {
        persone.savings = true;
        //попробовал сделать деактивацию поля при галочке, чот не взлетело, надо разобраться
        //choose_sum.disable = true;
    } else {
        persone.savings = false;
    }
})

choose_sum.addEventListener('input', function() {
    if (persone.savings == true) {
        let sum = +choose_sum.value,
            percent = +choose_percent.value;
        persone.monthIncome = sum/100/12*percent;
        persone.yearIncome = sum/100*percent;

        monthsavings_value.textContent = persone.monthIncome.toFixed(1);
        yearsavings_value.textContent = persone.yearIncome.toFixed(1);
    }
})

choose_percent.addEventListener('input', function() {
    if (persone.savings == true) {
        let sum = +choose_sum.value,
            percent = +choose_percent.value;
        persone.monthIncome = sum/100/12*percent;
        persone.yearIncome = sum/100*percent;

        monthsavings_value.textContent = persone.monthIncome.toFixed(1);
        yearsavings_value.textContent = persone.yearIncome.toFixed(1);
    }
})

let persone = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false,
    chooseExpenses: function() {
    },
    DetectDayBudget: function() {
    },
    DetectLevel: function() {
    },

    //весь функционал перенесен в обработчик поля Сумма
    // checkSavings: function  () {
    //     if (persone.savings == true) {
    //         let save = +prompt("Какова сумма накоплений?", ""),
    //             percent = +prompt("Под какой процент?", "");
    //         persone.monthIncome = save/100/12*percent;
    //         alert("Доход в месяц с депозита: " + persone.monthIncome);
    //         }
    // },
    ChooseOptExpenses: function () {
    },

    //весь функционал перенесен в обработчик поля Доп.доход
    // ChooseIncome: function() {
    //     let items = prompt("Что принест дополнительный доход? (перечислите через заятую)", "");
    //     while (items == "" || typeof(items) != 'string' || items == null) {
    //         items = prompt("Что принест дополнительный доход? (перечислите через заятую)", "");
    //         }
    //     //console.log(items);
    //     persone.income = items.split(', ');
    //     let items_more = prompt("Еще?", "");
    //     if (items_more != "" && typeof(items_more) == 'string' && items_more != null) 
    //         persone.income.push(items_more);
    //     persone.income.sort();
    //     let outputString = "Методы доп.заработка:\n";
    //     //alert("Методы доп.заработка:");
    //     persone.income.forEach((item, index) => {outputString = outputString + `${index+1}: ${item}\n`});
    //     alert(outputString);
    // },
    // OutputPersoneData: function() {
    //     let outputString = "Object PERSONE has next properties:\n";
    //     for (let key in persone) {
    //         outputString = outputString + key + ' - ' + persone[key] + '\n';
    //     }
    //     alert(outputString);
    // }
};

// let i = 0;
// do {let a = prompt("Введите обязательную статью расходов в этом месяце", "");
//         b = +prompt("Во сколько обойдется?", "");
//         if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) { 
//                 console.log("done");
//                 persone.expenses[a] = b;
//                 i++;
//                 console.log(i);
//             }
//     }
//     while (i < 2);

// let i = 0;
// while (i < 2) {
//         let a = prompt("Введите обязательную статью расходов в этом месяце", "");
//             b = +prompt("Во сколько обойдется?", "");
//         if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) { 
//                 console.log("done");
//                 persone.expenses[a] = b;
//                 i++;
//                 console.log(i);
//         }
// }