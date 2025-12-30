
const selected = document.querySelector(".navigation-left-select-container-option-cat");
const items = document.querySelector(".navigation-left-select-box");
const customSelect = document.querySelector(".navigation-left-select-container");



// Toggle dropdown
selected.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent event bubbling
  items.style.display = items.style.display === "block" ? "none" : "block";
  dropdown.style.transition = "180deg";
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!customSelect.contains(e.target)) {
    items.style.display = "none";
  }
});
