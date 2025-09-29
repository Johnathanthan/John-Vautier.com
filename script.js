// Smooth scroll to work section when button is clicked
document.getElementById("cta-button").addEventListener("click", function() {
  document.getElementById("work").scrollIntoView({ behavior: "smooth" });
});

// Simple log to show JS is working
console.log("Portfolio script loaded successfully!");
