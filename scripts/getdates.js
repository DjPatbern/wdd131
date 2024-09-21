// Set the current year dynamically
const yearSpan = document.getElementById('currentyear');
yearSpan.textContent = new Date().getFullYear();

// Set the last modified date
const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modification: ${document.lastModified}`;
