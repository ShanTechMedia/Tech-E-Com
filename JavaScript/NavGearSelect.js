document.addEventListener('DOMContentLoaded', () => {
  const gear = document.getElementById('fa-gear');
  const settings = document.getElementById('Settings');
  const blursetting = document.getElementById('section-welcome');
  const xmarkset = document.getElementById('xmark');
  const navigation_main_header = document.getElementById('navigation-main-header');

  if (!gear || !settings) {
    console.warn('Missing #fa-gear or #Settings');
    return;
  }

  // Open settings
  gear.addEventListener('click', (e) => {
    e.stopPropagation();
    settings.style.display = "block";
    blursetting.style.filter = "blur(30px)";
    navigation_main_header.style.filter = "blur(30px)";
  });

  // Close when clicking the X mark
  xmarkset.addEventListener("click", () => {
    settings.style.display = "none";
    blursetting.style.filter = "none";
    navigation_main_header.style.filter = "none";
  });

  // Close when clicking outside the settings box
  // document.addEventListener("click", (e) => {
    // Only close if the click is NOT inside settings and NOT on the gear
  //   if (!settings.contains(e.target) && e.target !== gear) {
  //     settings.style.display = "none";
  //     blursetting.style.opacity = "100%";
  //       navigation_main_header.style.opacity = "100%";
  //   }
  // });
});
