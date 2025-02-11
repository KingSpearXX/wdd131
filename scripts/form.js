const yearSpan = document.getElementById("currentYear");
yearSpan.textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Product list
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];


function populateProductDropdown() {
    const productSelect = document.getElementById('product');
    if (!productSelect) return;

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;  
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

function addReviewCounter() {
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = parseInt(reviewCount) || 0; 
    reviewCount++;

    localStorage.setItem('reviewCount', reviewCount);

    const reviewCountElem = document.getElementById('reviewCount');
    if (reviewCountElem) {
        reviewCountElem.textContent = reviewCount;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    populateProductDropdown();

    const addReviewButton = document.getElementById('addReview');
    if (addReviewButton) {
        addReviewButton.addEventListener('click', function(e) {
            e.preventDefault();
            addReviewCounter();
            window.location.href = "https://kingspearxx.github.io/wdd131/review.html";
        });
    }
});
