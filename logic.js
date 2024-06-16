document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const container = document.getElementById('main-container');
    const toggleImage = toggleButton.querySelector('img');

    toggleButton.addEventListener('click', function() {
        container.classList.toggle('dark-mode');

        if (container.classList.contains('dark-mode')) {
            toggleImage.src = "sun.webp";
        } else {
            toggleImage.src = "moon.png";
        }
    });
});

function myFunction(smallImg) {
    var fullImg = document.getElementById("imagebox");
    fullImg.src = smallImg.src;
}

  
