/*=============== SHOW MENU ===============*/

const iconClose = document.getElementById("icon-close");

const iconMenu = document.getElementById("icon-menu");
const iconDark = document.getElementById("icon-dark");
const iconLight = document.getElementById("icon-light");
const menuLi = document.querySelectorAll(".menu-li");

const body = document.getElementById("main");
const init = () => {
  console.log({ menuLi });
  iconClose.addEventListener("click", () => {
    toggleMenu();
  });

  iconMenu.addEventListener("click", () => {
    toggleMenu();
  });

  iconDark.addEventListener("click", () => {
    toggleDarkMode();
  });

  iconLight.addEventListener("click", () => {
    toggleDarkMode();
  });

  [...menuLi].map((li) => {
    console.log({ li });
    li.addEventListener("click", () => toggleMenu());
  });
};

const toggleDarkMode = () => {
  const isDarkMode = iconDark?.className?.includes("active");
  if (isDarkMode) {
    body?.classList?.remove("dark-mode");
    iconLight?.classList?.add("active");
    iconDark?.classList?.remove("active");
  } else {
    body?.classList?.add("dark-mode");
    iconDark?.classList?.add("active");
    iconLight?.classList?.remove("active");
  }
};

const toggleMenu = () => {
  const menu = document.getElementById("menu");
  const isShowMenu = menu?.className.includes("toggle");

  console.log({ isShowMenu });

  if (isShowMenu) {
    menu.classList.remove("toggle");
  } else {
    menu.classList.add("toggle");
  }
};

init();
/*=============== REMOVE MENU MOBILE ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
