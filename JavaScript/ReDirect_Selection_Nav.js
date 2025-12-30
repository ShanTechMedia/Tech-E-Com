
const selected = document.querySelector(".navigation-left-select-container-option-cat");
const items = document.querySelector(".navigation-left-select-box");
const customSelect = document.querySelector(".navigation-left-select-container");

selected.addEventListener("click", () => {
  if (items.style.display === "grid") {
    items.style.display = "none"; // hide
  } else {
    items.style.display = "grid"; // show
    items.style.gridTemplateColumns = "repeat(4, 1fr)"; // 4 equal columns
    items.style.gap = "20px"; // optional spacing
  }
});


// Handle option click
items.querySelectorAll("div").forEach(option => {
  option.addEventListener("click", () => {
    selected.textContent = option.textContent; // update selected text
    items.style.display = "none"; // close dropdown
    window.location.href = option.dataset.url; // redirect to link
  });
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!customSelect.contains(e.target)) {
    items.style.display = "none";
  }
});



