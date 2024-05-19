const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

let img = new Image();
img.src = "goku.bmp";

//grey background
ctx.fillStyle = "#d3d3d3";
ctx.fillRect(0,0,800,500);

// project title  
ctx.font = "20px Georgia";
ctx.strokeText("This is my dream House", 150, 50);

//sun
ctx.beginPath();
ctx.arc(0, 0, 125, 0, 2 * Math.PI);
ctx.fillStyle = 'yellow';
ctx.fill();


//ground
ctx.scale(1, -1); // Flip the y-axis
ctx.translate(0, -500);
ctx.fillStyle = "grey";
ctx.fillRect(0,0,800,25);

groundLevel = 25

//grass

ctx.beginPath();
for (let i = 0; i < 400; i+=25 ) { // i = grass width
    ctx.moveTo(25 + i, 25 + groundLevel);  //top
    ctx.lineTo(50 + i, groundLevel); // Right base corner
    ctx.lineTo(0 + i, groundLevel); // Left base corner
    ctx.closePath();
    ctx.fillStyle = 'green';
    ctx.fill();
}


//house
ctx.beginPath();
ctx.fillStyle = "brown";
ctx.fillRect(425,groundLevel,300,250);

//house triangle
ctx.beginPath();
ctx.moveTo(425+150,400);  //top
ctx.lineTo(725,275); // Right base corner
ctx.lineTo(425,275); // Left base corner
ctx.closePath();
ctx.fillStyle = 'black';
ctx.fill();

//house door
ctx.beginPath();
ctx.fillStyle = "black";
ctx.fillRect(550,25,50,100);

//house windows
ctx.beginPath();
ctx.fillStyle = "white";
ctx.fillRect(475,175,50,75);
ctx.fillRect(625,175,50,75);


xPos = 0;
yPos = 100;
img.onload = function() {
    animate();
}

function animate() { 
    ctx.drawImage(img, xPos, yPos);
    xPos += 1;
    if (xPos > myCanvas.width) {
        xPos = -img.width;
    }

    drawTextBubble(ctx, xPos, yPos - 100, "I am Goku");

    requestAnimationFrame(animate);
}
function drawTextBubble(ctx, x, y, text) {
    ctx.fillStyle = "white";
    ctx.fillRect(x, y, 200, 50); 
    ctx.strokeRect(x, y, 200, 50); 
    ctx.fillStyle = "black";
    ctx.font = "16px Arial";
    ctx.fillText(text, x + 10, y + 30);
}