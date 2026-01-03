const icon_click_lang = document.getElementById("DropDown-Icon-menu-lang");
const dropdown_click_lang = document.getElementById("language-show");
const cat_click_lang = document.getElementById("language-settings-title-h4-select");

// Toggle dropdown and icon rotation
cat_click_lang.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent bubbling
  dropdown_click_lang.classList.toggle("open");
  icon_click_lang.classList.toggle("rotate", dropdown_click_lang.classList.contains("open"));
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!cat_click_lang.contains(e.target) && !dropdown_click_lang.contains(e.target)) {
    dropdown_click_lang.classList.remove("open");
    icon_click_lang.classList.remove("rotate");
  }
});
