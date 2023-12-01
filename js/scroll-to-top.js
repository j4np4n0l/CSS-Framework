// Scroll to Top
document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopButton = document.getElementById("scrollToTop");

    // Show the button when the user scrolls down 20px from the top
    window.addEventListener("scroll", function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            // scrollToTopButton.style.display = "block";
            scrollToTopButton.style.opacity = "1";
            scrollToTopButton.style.transform = "scale(1)";
        } else {
            // scrollToTopButton.style.display = "none";
            scrollToTopButton.style.opacity = "0";
            scrollToTopButton.style.transform = "scale(0)";
        }
    });

    // Smoothly scroll to the top when the button is clicked
    scrollToTopButton.addEventListener("click", function() {
        scrollToTop();
    });

    function scrollToTop() {
        var currentPosition = document.body.scrollTop || document.documentElement.scrollTop;

        if (currentPosition > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, currentPosition - currentPosition / 8);
        }
    }
});