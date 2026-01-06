document.addEventListener('DOMContentLoaded', () => {

  // Better: target by text content instead of img alt
  const options = document.querySelectorAll('.Settings-theme-title-dark-h4');

  options.forEach(option => {
    option.addEventListener('click', () => {
      if (option.textContent.includes('Light')) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
      }
      if (option.textContent.includes('Dark')) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
      }
    });
  });
});
