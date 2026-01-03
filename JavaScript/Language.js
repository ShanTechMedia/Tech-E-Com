document.addEventListener('DOMContentLoaded', () => {
  const ThemeClickLang = document.getElementById('language-settings-title-h4-select');
  const settings_theme_lang = document.getElementById('language-show');
  const icon_click_theme_box_lang = document.getElementById("DropDown-Icon-menu-lang");

  if (!ThemeClickLang || !settings_theme_lang) {
    console.warn('Missing #fa-gear or #Settings');
    return;
  }

  // Open settings
  ThemeClickLang.addEventListener('click', (e) => {
    e.stopPropagation();
    settings_theme_lang.style.display = "block";
  });

  // Close when clicking the X mark
  ThemeClickLang.addEventListener("click", () => {
    if (!settings_theme_lang.contains(e.target) && e.target !== icon_click_theme_box_lang) {
      settings_theme_lang.style.display = "none";
    }
  });

  document.addEventListener("click", (e) => {
    if (!settings_theme_lang.contains(e.target) && e.target !== ThemeClickLang) {
      settings_theme_lang.style.display = "none";
    }
  });
});