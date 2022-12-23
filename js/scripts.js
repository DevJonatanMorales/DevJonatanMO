window.addEventListener('DOMContentLoaded', e => {

  /*
  * animation navbar
  */
  const mainNavbar = document.getElementById('mainNavbar');
  let btnTheme = document.getElementById('btnTheme');
  const about = document.getElementById('about');
  const skills = document.getElementById('skills');
  const projects = document.getElementById('projects');
  const contact = document.getElementById('contact');

  /*
  * themes
  */
  const themeLight = "TEMA CLARO";
  const themeDark = "TEMA OSCURO";

  // * btn temas
  let iconTheme = document.getElementById("iconTheme");
  let isBtnCheckbox = document.getElementById("btnCheckbox");

  // * btn menu
  let btnMenu = document.getElementById("btnMenu");
  let btnCheckboxMenu = document.getElementById("checkboxMenu");
  let items = document.getElementById("items");

  // * acordion
  let item__skills = document.getElementsByClassName('nav__links');

  const navbarShrink = () => {

    if (window.scrollY === 0) {
      mainNavbar.classList.remove('navbar-shrink');
      btnTheme.classList.remove('navbar____theme-shrink');
      
      about.classList.remove('navbar__link-shrink');
      skills.classList.remove('navbar__link-shrink');
      projects.classList.remove('navbar__link-shrink');
      contact.classList.remove('navbar__link-shrink');
    } else {
      mainNavbar.classList.add('navbar-shrink');
      btnTheme.classList.add('navbar____theme-shrink');
      
      about.classList.add('navbar__link-shrink');
      skills.classList.add('navbar__link-shrink');
      projects.classList.add('navbar__link-shrink');
      contact.classList.add('navbar__link-shrink');
    }
  }

  const activeAcordion = (element) => {
    if (element.classList.contains("nav__children-active")) {
      element.classList.remove("nav__children-active");
    } else {
      element.classList.add("nav__children-active");
    }
  }

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

  for (let i = 0; i < item__skills.length; i++) {
    item__skills[i].addEventListener("click", () => {
      item__skills[i].classList.remove("nav__children-active");
      activeAcordion(item__skills[i].nextElementSibling);
     
    })
    
  }

  navbarShrink();
  document.addEventListener('scroll', navbarShrink);

});
