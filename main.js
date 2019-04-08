let money = prompt("Каков ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let persone = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

        if (typeof(a)==='string'){ 

           persone.expenses[a] = b;
        }
}

alert("Бюджет на один день: " + persone.budget/30);