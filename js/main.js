const btnDarkMode = document.querySelector(".dark_mode_btn");

// 1.проверка темной темы на уровне системных настроек  
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches){
    btnDarkMode.classList.add("dark_mode_btn--active");
    document.body.classList.add('dark');
}

// 2.проверка темной темы в LocalStorage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark_mode_btn--active");
    document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'light'){
    btnDarkMode.classList.remove("dark_mode_btn--active");
    document.body.classList.remove('dark');
}

// если меняются системные настройки, меняем тему
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    const newColorScheme = event.matches ? "dark" : 'light';

 
    if (newColorScheme === 'dark') {
        btnDarkMode.classList.add("dark_mode_btn--active");
        document.body.classList.add("dark");
        localStorage.setItem('darkMode', 'dark')
    } else{
        btnDarkMode.classList.remove("dark_mode_btn--active");
        document.body.classList.remove("dark");
        localStorage.setItem('darkMode', 'light')
    }
});

// включение ночного режима по кнопке
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark_mode_btn--active");
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'Light')
    }
}

// else if (localStorage.getItem('darkMode') === 'light'){
//     btnDarkMode.classList.add("dark_mode_btn--active");
//     document.body.classList.add('dark');
// }