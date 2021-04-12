// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const containerEl = document.querySelector('#controls');
const inputElByRenderBox = containerEl.querySelector('input');
const buttonRander = containerEl.querySelector('[data-action="render"]');
const buttonDestroy = containerEl.querySelector('[data-action="destroy"]');
let currentValue = containerEl.querySelector('input').value;
function reateBoxes(currentValue) {
    console.log(amount);  //здесь NaN потому что парсит пустую строку,
                         //а значение инпута не передает     
    for (let i = 0; i <= amount; i++){
        const box = document.createElement('div');
        console.log(box);
    }
}
