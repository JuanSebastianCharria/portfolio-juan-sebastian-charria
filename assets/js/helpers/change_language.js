const changeLanguageButton = document.getElementById('language-toggle');
const currentLang = window.location.href.includes('index-en.html');
changeLanguageButton.checked = currentLang


changeLanguageButton.addEventListener('change', changeLanguage)




function changeLanguage() {
    if (changeLanguageButton.checked) {

        window.location.href = 'index-en.html'
        
    } else {
        window.location.href = 'index.html'
    }
}




  export default changeLanguage;


