const icon = document.getElementById("DropDown-Icon");
const dropdown = document.getElementById("navigation-left-select-box");
const cat = document.getElementById("navigation-left-select-container-option-cat");

// Toggle dropdown and icon rotation
cat.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent bubbling
  dropdown.classList.toggle("open");
  icon.classList.toggle("rotate", dropdown.classList.contains("open"));
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!cat.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove("open");
    icon.classList.remove("rotate");
  }
});
