// Product array
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Populate product name options
const productNameSelect = document.getElementById('product-name');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productNameSelect.appendChild(option);
});

// Review submission counter using localStorage
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents form submission for testing

    // Increment review count in localStorage
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);

    // Redirect to review.html or display confirmation (based on actual use case)
    window.location.href = 'review.html';
});
