document.addEventListener("DOMContentLoaded", function () {
  // Select all the sections that should fade in
  const faders = document.querySelectorAll(".fade-section");

  // Set up options for the Intersection Observer.
  // Adjust the threshold and rootMargin as needed.
  const appearOptions = {
    threshold: 0.2, // Trigger when 20% of the element is in view
    rootMargin: "0px 0px -50px 0px"
  };

  // Create the observer instance
  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the fade-in class when the section comes into view
        entry.target.classList.add("appear");
        // Optionally unobserve the element after it appears
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  // Observe each fade-section element
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
