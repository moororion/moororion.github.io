document.getElementById("aboutMe").addEventListener("click", function() {
  toggleVisibility("aboutMeContent");
});

document.getElementById("education").addEventListener("click", function() {
  toggleVisibility("educationContent");
});

document.getElementById("experience").addEventListener("click", function() {
  toggleVisibility("experienceContent");
});

document.getElementById("contactInfo").addEventListener("click", function() {
  toggleVisibility("contactInfoContent");  
});

document.getElementById("chipotle").addEventListener("click", function() {
	toggleVisibility("chipotleContent");
});

document.getElementById("bowlero").addEventListener("click", function() {
	toggleVisibility("bowleroContent");
});

document.getElementById("bostonScientific").addEventListener("click", function() {	toggleVisibility("bostonScientificContent");
});

document.getElementById("thales").addEventListener("click", function() {
	toggleVisibility("thalesContent");
});


function toggleVisibility(elementId) {
  var content = document.getElementById(elementId);
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
