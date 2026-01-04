const icon_drop_nav_tablet = document.getElementById("res-DropDown-Icon");
const dropdown_tablet = document.getElementById("navigation-res-left-select-box");
const cat_tablet = document.getElementById("navigation-res-left-select-container-option-cat");

// Toggle dropdown and icon rotation
cat_tablet.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent bubbling
  dropdown_tablet.classList.toggle("open");
  icon_drop_nav_tablet.classList.toggle("rotate", dropdown_tablet.classList.contains("open"));
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!cat_tablet.contains(e.target) && !dropdown_tablet.contains(e.target)) {
    dropdown_tablet.classList.remove("open");
    icon_drop_nav_tablet.classList.remove("rotate");
  }
});
