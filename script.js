document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".fade-section");
  let currentIndex = 0;

  function showSection(index) {
    sections.forEach((section, i) => {
      section.style.display = i === index ? "block" : "none";
    });
  }

  document.getElementById("next").addEventListener("click", function () {
    if (currentIndex < sections.length - 1) {
      currentIndex++;
      showSection(currentIndex);
    }
  });

  document.getElementById("prev").addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      showSection(currentIndex);
    }
  });

  showSection(currentIndex);
});
