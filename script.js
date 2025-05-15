document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".fade-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.3 });

  sections.forEach((section) => {
    if (section.getBoundingClientRect().top < window.innerHeight * 0.7) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
    observer.observe(section);
  });

  // Toggle code visibility
  function toggleCode(id) {
    var codeBlock = document.getElementById(id);
    codeBlock.style.display = (codeBlock.style.display === "none") ? "block" : "none";
  }

  // Attach event listeners to all code toggle buttons
  document.querySelectorAll(".code-toggle-button").forEach(button => {
    button.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      toggleCode(targetId);
    });
  });
});
