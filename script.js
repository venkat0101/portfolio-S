// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    // Select all elements with the fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Image Modal Logic
    const modal = document.getElementById("imageModal");
    const img = document.getElementById("profilePic");
    const modalImg = document.getElementById("expandedImg");
    const span = document.querySelector(".close-modal");

    // Open modal when profile picture is clicked
    if (img && modal && modalImg) {
        img.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event from bubbling up
            modal.style.display = "flex";
            // A slight delay to allow display: flex to apply before adding the show class for transition
            setTimeout(() => {
                modal.classList.add("show");
            }, 10);
            modalImg.src = this.src;
        });
    }

    // Close modal when (x) is clicked
    if (span) {
        span.addEventListener('click', function() {
            modal.classList.remove("show");
            setTimeout(() => {
                modal.style.display = "none";
            }, 300); // Wait for transition to finish
        });
    }

    // Close modal when clicking outside the image
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove("show");
                setTimeout(() => {
                    modal.style.display = "none";
                }, 300);
            }
        });
    }
});
