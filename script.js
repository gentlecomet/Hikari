function showMessage() {
    document.getElementById('message').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    // Floating hearts animation
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.querySelector(".heart-container").appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 500);
});
