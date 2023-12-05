/* СМЕНА КАРТИНКИ НА СТРАНИЦЕ */

/* Сохраняю элемент картинки со страницы в константу */

const myImage = document.querySelector('.logo');

/* Функция для смены картинки при клике по ней */

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");

    if (mySrc == "images/1.jpg") {
        myImage.setAttribute("src", "images/2.png");
    } else {
        myImage.setAttribute("src", "images/1.jpg");
    }
}


/* СОЗДАНИЕ ПРИВЕТСТВИЯ ДЛЯ КАЖДОГО ПОЛЬЗОВАТЕЛЯ */

/* Сохраняю элементы кнопки и заголовка в константы */

const myButton = document.querySelector('button')
const myHeading = document.querySelector('h1')

// Функция вызывается нажатием кнопки, спрашивает имя пользователя и создаёт приветствие

function setUserName() {
    const myName = prompt("Пожалуйста введите Ваше имя.");

    localStorage.setItem("name", myName);
    myHeading.textContent = "Добро пожаловать к нам на огонёк, " + myName + '!';
}

// Если не сохранено ни одно имя пользователя, то вызывается функция

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    // Вызывается имя из памяти браузера, если оно сохранено в памяти

    const storedName = localStorage.getItem("name");
    myHeading.textContent = "Добро пожаловать к нам на огонёк, " + storedName + '!';
}

// Нажатие на кнопку запускает функцию для принудительной смены имени пользователя

myButton.onclick = function () {
    setUserName();
};
