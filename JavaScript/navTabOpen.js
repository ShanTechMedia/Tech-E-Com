document.addEventListener('DOMContentLoaded', () => {
  const tablet_open = document.getElementById('fa-bars');
  const tablet_show_list_open = document.getElementById('navigation-tablet-mob');

 tablet_open.addEventListener("click", () => {
    tablet_show_list_open.style.display = "block";
  });
});













