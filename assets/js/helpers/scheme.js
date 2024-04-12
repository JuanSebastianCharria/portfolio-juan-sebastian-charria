const buttonSwitch = document.querySelector('.navbar__toggle--darkmode-input');
const userTheme = localStorage.getItem('theme');
const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

function setThemeOnLoad() {
    if (userTheme === 'dark' || (!userTheme && darkQuery.matches)) {
        setTheme('dark')
        buttonSwitch.checked = true        
    } else {
        setTheme('light')
        buttonSwitch.checked = false
    }
}

function setTheme(newTheme) {
    localStorage.setItem('theme', newTheme)
}

darkQuery.addEventListener('change', (e) => {
    setTheme(e.matches ? 'dark' : 'light')
    buttonSwitch.checked = e.matches
})



export default setThemeOnLoad;

