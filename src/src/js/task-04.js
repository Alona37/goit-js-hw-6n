// Задание 4
// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const decr = document.querySelector(`[data-action = "decrement"]`);
console.log(decr);
const incr = document.querySelector(`[data-action = "increment"]`);
console.log(incr);
const value = document.querySelector(`#value`);

const decrValue = () => {
	counterValue -= 1;
	value.textContent = counterValue;
};
decr.addEventListener("click", decrValue);

const incrValue = () => {
	counterValue += 1;
	value.textContent = counterValue;
};
incr.addEventListener("click", incrValue);
