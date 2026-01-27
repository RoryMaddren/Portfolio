
// Get the canvas and its context
const canvas = document.getElementById('staticCanvas');
const ctx = canvas.getContext('2d');

// Set the canvas size to fill the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Function to generate static noise
function generateStatic() {
    // Loop through each pixel in the canvas
    for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {
            // Generate random RGB values
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            
            // Set the pixel color
            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
            ctx.fillRect(x, y, 1, 1); // Draw a 1x1 pixel
        }
    }
}

// Call the generateStatic function repeatedly for continuous noise
function createStatic() {
    generateStatic();
    requestAnimationFrame(createStatic); // Keep generating static on each frame
}

// Start generating noise
createStatic();




