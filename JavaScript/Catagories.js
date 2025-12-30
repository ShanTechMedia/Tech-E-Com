const cat = document.querySelector(".navigation-left-select-container");
const icon = document.getElementById("DropDown-Icon");
const dropdown = document.getElementById("navigation-left-select-box");

cat.addEventListener("click", () => {
  dropdown.classList.toggle("open");
  icon.classList.toggle("rotate");
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!cat.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove("open");
    icon.classList.remove("rotate");
  }
});