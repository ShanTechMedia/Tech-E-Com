document.addEventListener('DOMContentLoaded', () => {
  const tablet = document.getElementById('navigation-res-left-select-container-option-cat');
  const tablet_click = document.getElementById('navigation-res-left-select-box');
  const tablet_click_icon = document.getElementById("res-DropDown-Icon");

  if (!tablet || !tablet_click) {
    console.warn('Missing #fa-gear or #Settings');
    return;
  }

  // Open settings
  tablet.addEventListener('click', (e) => {
    e.stopPropagation();
    tablet_click.style.display = tablet_click.style.display === "grid" ? "none" : "grid";
  });

  // Close when clicking the X mark
  tablet.addEventListener("click", () => {
    if (!tablet_click.contains(e.target) && e.target !== tablet_click_icon) {
      tablet_click.style.display = "none";
    }
  });

  document.addEventListener("click", (e) => {
    if (!tablet_click.contains(e.target) && e.target !== tablet) {
      tablet_click.style.display = "none";
    }
  });
});














