
const selected = document.querySelector(".navigation-left-select-container-option-cat");
const items = document.querySelector(".navigation-left-select-box");
const customSelect = document.querySelector(".navigation-left-select-container");
const blursetting = document.getElementById('section-welcome');





// Toggle dropdown
selected.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent event bubbling
  items.style.display = items.style.display === "block" ? "none" : "block";
  blursetting.style.filter = "blur(5px)";

  
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!customSelect.contains(e.target)) {
    items.style.display = "none";
    blursetting.style.filter = "none";
  }
});


