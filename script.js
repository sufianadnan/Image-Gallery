const imageGallery = document.getElementById('image-gallery');

function getRandomImageURL() {
    // Generate a random image URL from Picsum Photos API
    return `https://picsum.photos/600/400?random=${Math.floor(Math.random() * 1000)}`;
}

// Create a specified number of image containers with random images
function createImageContainers(numContainers) {
    for (let i = 1; i <= numContainers; i++) {
        const container = document.createElement('div');
        container.classList.add('image-container');

        const img = document.createElement('img');
        img.src = getRandomImageURL();
        img.alt = `Random Image ${i}`;
        img.classList.add('gallery-image');

        container.appendChild(img);

        imageGallery.appendChild(container);
    }
}

// Call the function to create 10 image containers (you can change the number)
createImageContainers(45);

// JavaScript to toggle dark/light mode
const modeToggle = document.getElementById('mode-toggle');
const darkModeCheckbox = document.getElementById('ChangeTheme');

// Check sessionStorage for dark mode
if (sessionStorage.getItem("mode") == "dark") {
    enableDarkMode();
}

// Add event listener to dark mode checkbox
darkModeCheckbox.addEventListener('change', function () {
    if (darkModeCheckbox.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

// Function to enable dark mode
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    darkModeCheckbox.checked = true;
    sessionStorage.setItem('mode', 'dark');
}

// Function to disable dark mode
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    darkModeCheckbox.checked = false;
    sessionStorage.setItem('mode', 'light');
}
