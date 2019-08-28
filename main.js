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
    savings : true
};

function chooseExpenses () {
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
}

chooseExpenses ();

// let i = 0;
// do {let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = +prompt("Во сколько обойдется?", "");
//         if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
//                 && a != '' && b != '' && a.length < 50) { 
//                 console.log("done");
//                 persone.expenses[a] = b;
//                 i++;
//                 console.log(i);
//             }
//     }
//     while (i < 2);

// let i = 0;
// while (i < 2) {
//         let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//             b = +prompt("Во сколько обойдется?", "");
//         if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
//                 && a != '' && b != '' && a.length < 50) { 
//                 console.log("done");
//                 persone.expenses[a] = b;
//                 i++;
//                 console.log(i);
//         }
// }


persone.moneyPerDay = (persone.budget / 30).toFixed();

alert("Бюджет на один день: " + persone.moneyPerDay); 

if (persone.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
} else if (persone.moneyPerDay >= 100 && persone.moneyPerDay <= 2000) {
        console.log("Средний уровень достатка");
} else if (persone.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
} else {
        console.log("Error");
}

console.log("1");

function checkSavings () {
    console.log("in");
    if (persone.savings == true) {
        console.log("in_in");
        let save = +prompt("Какова сумма накоплений?", ""),
            percent = +prompt("Под какой процент?", "");
        persone.monthIncome = save/100/10*percent;
        alert("Доход в месяц с депозита: " + persone.monthIncome);
        }
    }

checkSavings ();