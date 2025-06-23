"use strict";

console.log("Simple script starting...");

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded");

  // page navigation variables
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  console.log("Navigation Links found:", navigationLinks.length);
  console.log("Pages found:", pages.length);

  // Log all navigation links
  navigationLinks.forEach((link, index) => {
    console.log(`Nav Link ${index}:`, link.innerHTML);
  });

  // Log all pages
  pages.forEach((page, index) => {
    console.log(`Page ${index}:`, page.dataset.page);
  });

  // add event to all nav link
  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
      console.log("Button clicked:", this.innerHTML);
      console.log("Button clicked (lowercase):", this.innerHTML.toLowerCase());

      // Remove active class from all pages and nav links
      for (let j = 0; j < pages.length; j++) {
        pages[j].classList.remove("active");
      }
      for (let k = 0; k < navigationLinks.length; k++) {
        navigationLinks[k].classList.remove("active");
      }

      // Add active class to the corresponding page and clicked nav link
      for (let j = 0; j < pages.length; j++) {
        console.log(
          `Comparing "${this.innerHTML.toLowerCase()}" with "${
            pages[j].dataset.page
          }"`
        );
        if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
          console.log("Match found! Activating page:", pages[j].dataset.page);
          pages[j].classList.add("active");
          this.classList.add("active");
          window.scrollTo(0, 0);
          break;
        }
      }
    });
  }
});
