'use strict';
let money, time;

function start () {
    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", "");
    }
}
start ();

let persone = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt ("Во сколько обойдется?", "");
        
            if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
        
                console.log ("done");
        
                persone.expenses[a] = b;
            } else {                            
                console.log ("bad result");
                i--;
            }
         }
    },
    DetectDayBudget: function() {
        persone.moneyPerDay = (persone.budget / 30).toFixed();
        alert("Бюджет на один день: " + persone.moneyPerDay); 
    },
    DetectLevel: function() {
        if (persone.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (persone.moneyPerDay >= 100 && persone.moneyPerDay <= 2000) {
            console.log("Средний уровень достатка");
        } else if (persone.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Error");
        }
    },
    checkSavings: function  () {
        if (persone.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?", "");
            persone.monthIncome = save/100/10*percent;
            alert("Доход в месяц с депозита: " + persone.monthIncome);
            }
    },
    ChooseOptExpenses: function () {
        for (let i = 1; i < 3; i++) {
            let opt = prompt("Cтатья необязательных расходов?", "");
            persone.optionalExpenses[i] = opt;
        }
    },
    ChooseIncome: function() {
        let items = prompt("Что принест дополнительный доход? (перечислите через заятую)", "");
        while (items == "" || typeof(items) != 'string' || items == null) {
            items = prompt("Что принест дополнительный доход? (перечислите через заятую)", "");
            }
        //console.log(items);
        persone.income = items.split(', ');
        let items_more = prompt("Еще?", "");
        if (items_more != "" && typeof(items_more) == 'string' && items_more != null) 
            persone.income.push(items_more);
        persone.income.sort();
        let outputString = "Методы доп.заработка:\n";
        //alert("Методы доп.заработка:");
        persone.income.forEach((item, index) => {outputString = outputString + `${index+1}: ${item}\n`});
        alert(outputString);
    },
    OutputPersoneData: function() {
        let outputString = "Object PERSONE has next properties:\n";
        for (let key in persone) {
            outputString = outputString + key + ' - ' + persone[key] + '\n';
        }
        alert(outputString);
    }
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