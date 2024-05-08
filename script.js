document.addEventListener("DOMContentLoaded", function (event) {
  const hamburger = document.querySelector(".hamburger"),
    navMenu = document.querySelector(".nav-menu"),
    dropdowns = document.querySelectorAll(".dropdown");
  // dropdownIcon = document.querySelector(".bx-chevron-down");

  function toggleNav() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  function closeAllDropdowns() {
    dropdowns.forEach((dropdown) => {
      const content = dropdown.querySelector(".dropdown-content");
      const dropdownIcon = dropdown.querySelector(".bx-chevron-down");
      content.classList.remove("show");
      dropdownIcon.classList.remove("rotate");
    });
  }

  hamburger.addEventListener("click", () => {
    toggleNav();
  });

  // Close the menu when clicking on an item

  //   document.querySelectorAll(".nav-link").forEach((item) =>
  //     item.addEventListener("click", () => {
  //       toggleNav();
  //     })
  //   );

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".dropbtn");
    const content = dropdown.querySelector(".dropdown-content");
    const dropdownIcon = dropdown.querySelector(".bx-chevron-down");

    button.addEventListener("click", (event) => {
      event.stopPropagation();
      if (content.classList.contains("show")) {
        content.classList.remove("show");
        dropdownIcon.classList.remove("rotate");
      } else {
        closeAllDropdowns();
        content.classList.add("show");
        dropdownIcon.classList.add("rotate");
      }
    });
  });

  window.addEventListener("click", () => {
    closeAllDropdowns();
  });
});
