document.addEventListener("DOMContentLoaded", () => {
    // Set current year in footer
    document.getElementById("year").textContent = new Date().getFullYear();
    
    // Set last modified date in footer
    document.getElementById("lastModified").textContent = document.lastModified;

    // Weather variables
    const temperature = 8; // Example static temperature in °C
    const windSpeed = 6; // Example static wind speed in km/h

    // Wind chill calculation
    const windChillElement = document.getElementById("windChill");
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill}°C`;
    } else {
        windChillElement.textContent = "N/A";
    }
});

function calculateWindChill(temp, wind) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(2);
}
