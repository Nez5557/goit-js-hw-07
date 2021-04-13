// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет
// инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

let controlFont = document.querySelector("#font-size-control");

let text = document.querySelector("#text");

controlFont.oninput = function() {
  text.style.fontSize = controlFont.value + "px";
};

controlFont.addEventListener('input', controlFont.oninput);