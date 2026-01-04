document.addEventListener('DOMContentLoaded', () => {
  const ThemeClick = document.getElementById('Settings-theme-title-dark-h4-select');
  const settings_theme = document.getElementById('settings-show');
  const icon_click_theme_box = document.getElementById("DropDown-Icon-menu");

  if (!ThemeClick || !settings_theme) {
    console.warn('Missing #fa-gear or #Settings');
    return;
  }

  // Open settings
  ThemeClick.addEventListener('click', (e) => {
    e.stopPropagation();
    settings_theme.style.display = settings_theme.style.display === "block" ? "none" : "block";
  });

  // Close when clicking the X mark
  ThemeClick.addEventListener("click", () => {
    if (!settings_theme.contains(e.target) && e.target !== icon_click_theme_box) {
      settings_theme.style.display = "none";
    }
  });

  document.addEventListener("click", (e) => {
    if (!settings_theme.contains(e.target) && e.target !== ThemeClick) {
      settings_theme.style.display = "none";
    }
  });
});



