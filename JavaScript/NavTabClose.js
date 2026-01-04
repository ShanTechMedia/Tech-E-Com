document.addEventListener('DOMContentLoaded', () => {
  const tablet_close = document.getElementById('xmark-tab');
  const tablet_show_list = document.getElementById('navigation-tablet-mob');

 tablet_close.addEventListener("click", () => {
    tablet_show_list.style.display = "none";
  });
});













