document.getElementById("navigation-left-select-container").addEventListener("change", function() {
    const url = this.value;
    if (url) {
      window.location.href = url; // redirect to selected option’s link
    }
  });