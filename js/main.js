

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
function uploadFile() {
    const input = document.getElementById('file');
    const file = input.files[0];
    if(file) {
        let formData = new FormData();
        formData.append('file', file);

        axios.post('http://127.0.0.1:8000/1', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(function(response) {
            console.log('Файл успешно загружен:', response);
            document.getElementById('recstatus').style.visibility='visible'
            document.getElementById('recognized').textContent=response.data['message']
        })
        .catch(function(error) {
            console.error('Произошла ошибка при загрузке файла:', error);
        });
    } else {
        console.log('Файл не выбран');
    }
}