// Задание 6
// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }
// #validation-input.valid {
//   border-color: #4caf50;
// }
// #validation-input.invalid {
//   border-color: #f44336;
// }
const inputEl = document.querySelector("#validation-input");
console.log(inputEl);

const inputCheckPassword = event => {
	if (Number(inputEl.dataset.length) === event.currentTarget.value.length) {
		inputEl.classList.add("valid");
		inputEl.classList.remove("invalid");
	} else {
		inputEl.classList.add("invalid");
		inputEl.classList.remove("valid");
	}
};

inputEl.addEventListener("blur", inputCheckPassword);
