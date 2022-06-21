const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


let number = 50;
let scale = 15;
let hue = 5;

function drawFlower() {
    let angle = number * 20;
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + canvas.width/2;
    let positionY = radius * Math.cos(angle) + canvas.height/2;


    ctx.fillStyle = 'hsl('+hue+', 100%, 50%)';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(positionX, positionY, 10, 0, Math.PI * 4);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    number++;
    hue++;
}

function animate () {
    drawFlower()
    if (number > 600) return;
    requestAnimationFrame(animate)
}

animate();