let currentImage = 1;
const totalImages = 2;  // Total number of images in the gallery

// Show the next image
function showNextImage() {
    currentImage++;
    if (currentImage > totalImages) {
        currentImage = 1;  // If we're at the last image, go back to the first
    }
    updateGallery();
}

// Show the previous image
function showPrevImage() {
    currentImage--;
    if (currentImage < 1) {
        currentImage = totalImages;  // If we're at the first image, go to the last
    }
    updateGallery();
}

// Update the gallery to show the correct image
function updateGallery() {
    // Hide all images
    for (let i = 1; i <= totalImages; i++) {
        const image = document.getElementById(`image-${i}`);
        image.style.display = 'none';
    }
    
    // Show the current image
    const activeImage = document.getElementById(`image-${currentImage}`);
    activeImage.style.display = 'block';
}
