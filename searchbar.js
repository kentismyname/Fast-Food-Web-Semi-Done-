document.addEventListener("DOMContentLoaded", function() {
    var searchInput = document.getElementById("searchInput");
    var searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", function() {
        // Get the search term from the input field
        var searchTerm = searchInput.value;

        // Call a function to scroll to the element with the matching ID
        scrollToElement(searchTerm);
    });

    function scrollToElement(id) {
        var element = document.getElementById(id);

        if (element) {
            // Calculate the distance to scroll
            var offset = element.getBoundingClientRect().top;
            var duration = 500; // Duration in milliseconds (0.5 seconds)
            var startTime = null;
    
            // Define the scroll animation function
            function scrollTo(timestamp) {
                if (!startTime) {
                    startTime = timestamp;
                }
    
                var progress = timestamp - startTime;
                var percentage = Math.min(progress / duration, 1);
    
                window.scrollTo(0, offset * percentage);
    
                if (percentage < 1) {
                    requestAnimationFrame(scrollTo);
                }
            }
    
            // Start the scroll animation
            requestAnimationFrame(scrollTo);
        } else {
            // Display a message if the element with the given ID is not found
            alert(" '" + id + "' is not available.");
        }
    }
});
