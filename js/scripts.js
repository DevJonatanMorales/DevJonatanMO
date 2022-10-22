const themeLight = "Tema claro";
const themeDark = "Tema oscuro";

/*
 *btn temas
 */
let btnTheme = document.getElementById("btnTheme");
let iconTheme = document.getElementById("iconTheme");
let isBtnCheckbox = document.getElementById("btnCheckbox");

/*
 *btn menu
 */
let btnMenu = document.getElementById("btnMenu");
let btnCheckboxMenu = document.getElementById("checkboxMenu");
let items = document.getElementById("items");

/*
 *btn acordion
 */
const leguajes = document.getElementById("leguajes");
const DB = document.getElementById("DB");
const frameworks = document.getElementById("frameworks");
const CV = document.getElementById("CV");

btnTheme.addEventListener("click", () => {
  document.getElementById("body").classList.toggle("theme");

  if (isBtnCheckbox.checked == true) {
    btnTheme.innerText = themeLight;
    iconTheme.classList.remove("fa-moon");
    iconTheme.classList.add("fa-sun");

  } else {
    btnTheme.innerText = themeDark;
    iconTheme.classList.remove("fa-sun");
    iconTheme.classList.add("fa-moon");

  }
});

btnMenu.addEventListener("click", () => {
  if (btnCheckboxMenu.checked == true) {
    items.classList.add("navbar__items-active");
  } else {
    items.classList.remove("navbar__items-active");
  }
});

leguajes.addEventListener("click", () => {
  document
    .getElementById("leguaje__chil")
    .classList.toggle("nav__children-active");
  document
    .getElementById("icon__leguajes")
    .classList.toggle("nav__icon-active");
});

DB.addEventListener("click", () => {
  document.getElementById("DB__chil").classList.toggle("nav__children-active");
  document.getElementById("icon__db").classList.toggle("nav__icon-active");
});

frameworks.addEventListener("click", () => {
  document
    .getElementById("frameworks__chil")
    .classList.toggle("nav__children-active");
  document
    .getElementById("icon__framework")
    .classList.toggle("nav__icon-active");
});

CV.addEventListener("click", () => {
  document.getElementById("CV__chil").classList.toggle("nav__children-active");
  document.getElementById("icon__cv").classList.toggle("nav__icon-active");
});
