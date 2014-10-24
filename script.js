var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function drawCircle() {
 ctx.beginPath();
 ctx.arc(Math.random() * 500, Math.random() * 400, 20, 0, Math.PI*2);
 ctx.stroke();
};

function drawSquare() {
  ctx.beginPath();
  ctx.rect(Math.random() * 500, Math.random() * 400, 40, 40);
  ctx.stroke();
};

function clearCanvas(ctx, canvas) {
  if(confirm("Are you sure you want to clear the canvas? Press OK to continue.")) {
    
  
 ctx.clearRect(0, 0, canvas.width, canvas.height);
  var w = canvas.width;
  canvas.width = 1;
  canvas.width = w;
  
  
  square = 0;
  document.getElementById("squares").innerHTML = square;
  
  circle = 0;
  document.getElementById("circles").innerHTML = circle;
  };
};

var circle = 0;

function circleClick(value) {
  circle = circle + value;
  document.getElementById("circles").innerHTML = circle;
};

var square = 0;

function squareClick(value) {
  square = square + value;
  document.getElementById("squares").innerHTML = square;
};