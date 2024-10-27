document.addEventListener("DOMContentLoaded", () => {
  const hospitalDetailsContainer = document.getElementById("hospitalDetails");

  const urlParams = new URLSearchParams(window.location.search);
  const hospitalId = urlParams.get("id");

  if (!hospitalId) {
    hospitalDetailsContainer.innerHTML = "<p>Invalid hospital ID.</p>";
    return;
  }

  const apiUrl = `https://api.reliancehmo.com/v3/providers/${hospitalId}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {

      const hospital = data; 

      if (!hospital) {
        hospitalDetailsContainer.innerHTML =
          "<p>Hospital details not found.</p>";
        return;
      }
      hospitalDetailsContainer.innerHTML = `
          <h2>${hospital.name || "N/A"}</h2>
          <p><span>Email:</span> ${hospital.email_address || "N/A"}</p>
           <p><span>Website:</span> <a href='${
             hospital.website_address
           }' target="_blank">${hospital.website_address}</a></p>
          <p><span>Address:</span> ${hospital.address || "N/A"}</p>
          <p><span>Phone Number:</span> ${hospital.telephone || "N/A"}</p>
          <p><span>Delivery Option:</span> ${hospital.delivery_option || "N/A"}</p>
        `;
    })
    .catch((error) => {
      console.error("Error fetching hospital details:", error);
      hospitalDetailsContainer.innerHTML =
        "<p>Error loading hospital details.</p>";
    });
});
