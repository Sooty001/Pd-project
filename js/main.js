const btnDarkMode = document.querySelector(".dark-mode-btn"); //Эта строка получает ссылку на элемент кнопки с классом dark-mode-btn и сохраняет ее в переменной btnDarkMode

// проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} 


// Проверка темной темы на уровне систменых настроек
if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}


// Включение ночного режима по кнопке
btnDarkMode.onclick  = function () {   //Этот код добавляет обработчик события клика на кнопку. Когда кнопка будет кликнута, вызывается функция, которая переключает класс dark-mode-btn--active у кнопки. Если класс отсутствует, он добавляется, а если присутствует, то удаляется. Это позволяет переключать стили кнопки при каждом клике.
    btnDarkMode.classList.toggle("dark-mode-btn--active"); 
    const isDark = document.body.classList.toggle('dark'); //toggle используется для добавления или удаления класса 'dark' у элемента body

    if (isDark){ // если True, то включен ночной режим
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light')
    }

}