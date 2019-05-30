

let money = prompt("Ваш бюджет на месяц?", "100");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2019-06-01");

let a1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let a2 = prompt("Во сколько обойдется?", "");
let a3 = prompt("Введите обязательную статью расходов в этом месяце", "");
let a4 = prompt("Во сколько обойдется?", "");


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income:[],
    savings: false
}

appData.expenses.a1 = a1;
appData.expenses.a2 = a2;
appData.expenses.a3 = a3;
appData.expenses.a4 = a4;

console.log(appData.expenses.a1);
console.log(appData.expenses.a2);

alert(appData.budget/30);