document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".fade-section");
  let currentIndex = 0;

  function showSection(index) {
    sections.forEach((section, i) => {
      section.style.display = i === index ? "block" : "none";
    });
  }

  // Get the "next" button element and attach an event listener if it exists.
  const nextBtn = document.getElementById("next");
  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      if (currentIndex < sections.length - 1) {
        currentIndex++;
        showSection(currentIndex);
      }
    });
  } else {
    console.warn('Element with id "next" not found.');
  }

  // Get the "prev" button element and attach an event listener if it exists.
  const prevBtn = document.getElementById("prev");
  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex--;
        showSection(currentIndex);
      }
    });
  } else {
    console.warn('Element with id "prev" not found.');
  }

  // Initially display the first section.
  showSection(currentIndex);
});
