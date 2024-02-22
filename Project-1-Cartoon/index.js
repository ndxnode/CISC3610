const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

//grey background
ctx.fillStyle = "#d3d3d3";
ctx.fillRect(0,0,800,500);

//sun
ctx.beginPath();
ctx.arc(0, 0, 125, 0, 2 * Math.PI);
ctx.fillStyle = 'yellow';
ctx.fill();



//clouds
//house

//grass
//ground