document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("bg-music");

    // Set a timeout to ensure the browser allows playback
    setTimeout(() => {
        audio.volume = 5; // Start with low volume (some browsers allow this)
        audio.play().catch(error => console.log("Autoplay blocked:", error));
    }, 500); // Delay for better autoplay success
});