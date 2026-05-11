const page = document.querySelector(".page");
const themeButtons = document.querySelectorAll(".header__theme-menu-button");
const activeButtonClass = "header__theme-menu-button_active";
const themeClasses = ["theme_light", "theme_dark"];

const setTheme = (themeName) => {
  page.classList.remove(...themeClasses);

  if (themeName !== "auto") {
    page.classList.add(`theme_${themeName}`);
  }

  themeButtons.forEach((button) => {
    const isActive = button.dataset.theme === themeName;
    button.classList.toggle(activeButtonClass, isActive);
    button.disabled = isActive;
  });

  localStorage.setItem("theme", themeName);
};

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setTheme(button.dataset.theme);
  });
});

setTheme(localStorage.getItem("theme") || "auto");
