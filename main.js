'use strict';

 let money = +prompt("Каков ваш бюджет на месяц?", "0");
   console.log(money);
let time = prompt("Введите дату в формате YYYY-MM-DD", "2019-01-01");
   console.log(time);

let  persone = {
    budget: money,
    timeData: time,
    expenses : {
        mustBuy: "",
        price: ""
    },
    optionalExpenses : {

    },
    income : [],
    savings : false
};

persone.expenses.mustBuy = prompt("Введите обязательную статью расходов в этом месяце", "");
    console.log(persone.expenses.mustBuy);
persone.expenses.price = +prompt("Во сколько обойдется?", "0");
    console.log(persone.expenses.price);

alert("Бюджет на один день: " + persone.budget/30);
    console.log(persone.budget/30);