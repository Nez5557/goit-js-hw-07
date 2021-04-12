// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.


const inputEl = document.querySelector('input');
const btnRender.addEventListener('click', onCreatingDiv) = document.querySelector('#controls button[data-action="render"]');
const btnDestroy.addEventListener('click', onDeletingDiv) = document.querySelector('#controls button[data-action="destroy"]');

function onCreatingDiv() {
  createBoxes(inputEl.value);
  console.log(`Создадим ${inputEl.value} div`);
};
function onDeletingDiv() {
  boxesContainer.innerHTML = '';
}
const boxesContainer = document.querySelector('#boxes');
function createBoxes(amount) {
  boxesContainer.innerHTML = '';
  const divArr = [];
  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.backgroundColor = randomRgb();
    divEl.style.width = i * 10 + 20 + 'px';;
    divEl.style.height = i * 10 + 20 + 'px';;
    divEl.style.margin = '3px';
    divArr.push(divEl);
}
btn.addEventListener("click", handleNavClick);
const btnRender = document.querySelector('#controls button[data-action="render"]');
const btnDestroy = document.querySelector('#controls button[data-action="destroy"]');
const randomRgb = () => {
  const rgbNum = () => Math.floor(Math.random() * 256);
  const r = rgbNum();
  const g = rgbNum();
  const b = rgbNum();
  return `rgb(${r},${g},${b})`;
};
divEl.style.backgroundColor = randomRgb();