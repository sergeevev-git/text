window.addEventListener("DOMContentLoaded", function() {
    let box = document.querySelector('.box');

    // box.addEventListener('touchstart', function(event) {
    //     event.preventDefault();
    //     console.log('Red box: touchstart');
    //     console.log(event.target);
    //     console.log(event.touches[0].target);
    //     console.log(event.touches); //кол-во тачей(пальцев) на экране в момент тача
    //     console.log(event.changedTouches);
    //     console.log(event.targetTouches); //кол-во тачей(пальцев) на экране в момент тача на объекте 'box'
    // });

    // box.addEventListener('touchmove', function(event) {
    //     event.preventDefault();
    //     console.log('Red box: ' + event.touches[0].pageX + ' touchmove'); //координата касания по оси Х
    // });

    // box.addEventListener('touchend', function(event) {
    //     event.preventDefault();
    //     console.log('Red box: touchend');
    // });

//Далее тема Регулярные выражения

//первый вариант
    //new RegExp('pattern', 'flags');
//или
    // /pattern/

    // let ans = prompt('Введите имя','');

    // let reg = /n/gi;

    //console.log(ans.search(reg)); //возвращает позиция вхождения регэкспа в ans, -1 если не найдено. НО всегда находит только первое вхождение
    //console.log(ans.match(reg)); //не останавливается после первого нахождения

    //console.log(reg.test(ans)); //ищет вхождение и возвращет true or false

    //флаги
    // i - флаг регистра, флаг независимости от регистра
    // g - флаг глобального поиска, просто есть или нет символ
    // m - флаг многострочности

    // \d - будет искать все цифры \D - ищет НЕ цифру
    // \w - будет искать все буквы \W - аналогично
    // \s - будет искать все пробелы \S - аналогично

    let ans = prompt('Введите число','');

    let reg = /\d/g;

    console.log(ans.match(reg));

    // let pass = prompt("введите пароль:");

    // console.log(pass.replace(/./g, '*')); // . - любой символ
    // alert('12-35-56'.replace(/-/g, ":"));

    let str = 'My name is/ r2d2';

    console.log(str.match(/\w\d\w\d/i));

    console.log(str.match(/\//i)); // поиск обратоного слэша

    console.log(str.match(/ /i)); // поиск пробела

})