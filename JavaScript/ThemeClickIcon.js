const icon_click_theme = document.getElementById("DropDown-Icon-menu");
const dropdown_click = document.getElementById("settings-show");
const cat_click = document.getElementById("Settings-theme-title-dark-h4-select");

// Toggle dropdown and icon rotation
cat_click.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent bubbling
  dropdown_click.classList.toggle("open");
  icon_click_theme.classList.toggle("rotate", dropdown_click.classList.contains("open"));
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!cat_click.contains(e.target) && !dropdown_click.contains(e.target)) {
    dropdown_click.classList.remove("open");
    icon_click_theme.classList.remove("rotate");
  }
});
