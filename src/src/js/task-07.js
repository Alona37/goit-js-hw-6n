// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const inputEl = document.querySelector("#font-size-control");
console.log(inputEl);
const inputText = document.querySelector("#text");
console.log(inputText);

const inputChangeText = event => {
	text.style.fontSize = event.currentTarget.value + "px";
};

inputEl.addEventListener("input", inputChangeText);
