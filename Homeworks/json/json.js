let fruit = [
    {name: "apple", quantity: 20, color: "red" },
    {name: "orange", quantity: 10, color: "orange" },
    {name: "banana", quantity: 15, color: "yellow" },
    {name: "kiwi", quantity: 5, color: "green" },
    {name: "grape", quantity: 10, color: "purple" },
    {name: "blueberry", quantity: 5, color: "blue" }
];

let canvas = document.createElement('canvas');
canvas.width = 1000;
canvas.height = 1000;
document.body.appendChild(canvas);
let ctx = canvas.getContext('2d');

let barHeight = 50;
let barSpacing = 20;
let startX = 50;
let startY = 50;
for (let i = 0; i < fruit.length; i++) {
    let x = startX;
    let y = startY + (barHeight + barSpacing) * i;
    let width = fruit[i].quantity * 10;
    let color = fruit[i].color;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, barHeight);

    ctx.fillStyle = 'black';
    ctx.fillText(fruit[i].name + " (" + fruit[i].quantity + ")", startX + width + 10, y + barHeight / 2);
}
