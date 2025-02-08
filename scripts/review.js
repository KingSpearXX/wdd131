const yearSpan = document.getElementById("currentYear");
yearSpan.textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

function updateReviewCounter() {

    let reviewCount = localStorage.getItem('reviewCount');

    if (!reviewCount) { 
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount) || 0; 
    }

    localStorage.setItem('reviewCount', reviewCount);
    if (document.getElementById('reviewCount')) {
        document.getElementById('reviewCount').textContent = reviewCount;
    }
}

document.addEventListener('DOMContentLoaded', updateReviewCounter);


    