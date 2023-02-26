// Задание 2
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>

// В JavaScript есть массив строк.
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const listEl = document.querySelector("#ingredients");
const liArray = [];

ingredients.forEach(ingredient => {
	const itemEl = document.createElement("li");
	itemEl.classList = "item";
	itemEl.textContent = ingredient;
	liArray.push(itemEl);
});

listEl.append(...liArray);

console.log(liArray);
