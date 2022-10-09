const themeLight = 'Theme light';
const themeDark = 'Theme dark';

let btnTheme = document.getElementById('btnTheme');
let iconTheme = document.getElementById('iconTheme');
let isBtnCheckbox = document.getElementById('btnCheckbox');

let btnMenu = document.getElementById('btnMenu');
let btnCheckboxMenu = document.getElementById('checkboxMenu');
let items = document.getElementById('items');

btnTheme.addEventListener('click', () => {
    
    document.getElementById('body').classList.toggle('theme');

    if (isBtnCheckbox.checked == true) {
        btnTheme.innerText = themeLight;
        document.getElementById("iconMenu").style.filter = "invert(1)"
        iconTheme.classList.remove('fa-moon')
        iconTheme.classList.add('fa-sun')
    } else {
        btnTheme.innerText = themeDark;
        document.getElementById("iconMenu").style.filter = "invert(0)"
        iconTheme.classList.remove('fa-sun')
        iconTheme.classList.add('fa-moon')
    }

});

btnMenu.addEventListener('click', () => {
    if (btnCheckboxMenu.checked == true) {
        items.classList.add('navbar__items-active');
    }else {
        items.classList.remove('navbar__items-active');

    }
})