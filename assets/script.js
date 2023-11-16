const toggleMenu = () => {
    const navigation = document.querySelector('.navigation');


    const burgerMenu = document.querySelector(".menu-icon");
    const src = burgerMenu.getAttribute('src');

    const isBurger = src === 'burger-menu.svg';

    const iconName = isBurger ?
        'close.svg'
        :
        'burger-menu.svg';


    burgerMenu.setAttribute(
        'src',
        iconName
    );

    if (!isBurger) {
        navigation.classList.add("navigation--mobile--fadeout");
        setTimeout(() => {
            navigation.classList.toggle(
                'navigation--mobile'
            );
        }, 300)
    } else {
        navigation.classList.remove("navigation--mobile--fadeout");
        navigation.classList.toggle('navigation--mobile');
    }
};










  
let videoClicked = false; // Variable to track whether the video has been clicked
let intervalId; // Variable to store the interval ID

function stopCarousel() {
    clearInterval(intervalId); // Stop the carousel completely
    videoClicked = true; // Set videoClicked to true to prevent carousel from starting again
    const videoFrame = document.getElementById("player");
    videoFrame.style.pointerEvents = "auto"; // Enable click events on the video
}

function startCarousel() {
    if (!videoClicked) {
        intervalId = setInterval(nextItem, 5000); // Start the carousel
    }
}

function onYouTubeIframeAPIReady() {
    const player = new YT.Player("player", {
        height: "70%",
        width: "70%",
        videoId: "KbqeTPaIdzA",
        playerVars: {
            controls: 1, // Enable controls for the video
            fs: 0,
        },
        events: {
            onReady: function () {
                player.addEventListener("onStateChange", function (event) {
                    if (event.data === YT.PlayerState.PLAYING) {
                        // Video is playing, so stop the carousel
                        stopCarousel();
                    } else if (event.data === YT.PlayerState.PAUSED) {
                        // Video is paused, so start the carousel
                        startCarousel();
                    }
                });
            },
        },
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            if (i === index) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }

    function nextItem() {
        if (!videoClicked) {
            currentIndex = (currentIndex + 1) % items.length;
            showItem(currentIndex);
        }
    }

    intervalId = setInterval(nextItem, 5000); // Start the carousel
    showItem(currentIndex); // Show the first item initially

    // Add event listeners for arrow buttons
    document.querySelector(".prev").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
        stopCarousel();
    });

    document.querySelector(".next").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
        stopCarousel();
    });
});

