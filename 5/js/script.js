'use strict';
let btn = document.querySelectorAll(".menu-item"),
    menu = document.querySelector(".menu");

//console.log(btn);
//console.log(menu);

menu.insertBefore(btn[2],btn[1]); //восстановили порядок кнопок

let new_btn = document.createElement('li'); //создаем новый элемент меню
new_btn.textContent = 'Пятый пункт'; //добавляем в него текст
new_btn.classList.add('menu-item'); //присаваиваем ему класс из css
menu.append(new_btn); //вставляем его в конец родительского элемента(класса)

//console.log(new_btn);

let body = document.querySelector('body'); //меняем картинку на фоне
document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';

let title = document.getElementById('title'); //меняем надпись
title.textContent = "Мы продаем только подлинную технику Apple";

let adv = document.querySelector('.adv'), //удаляем "рекламу"
    column = document.querySelectorAll('.column'); //у препода вариант проще
column[1].removeChild(adv); 

let question = prompt("Как вы относитесь к технике Apple?", "no answer"), //спрашиваем пользователя
    pro_mpt = document.getElementById('prompt'); //создаем элемент для вставки ответа
pro_mpt.textContent = question; //вставляем ответ в нужное место
