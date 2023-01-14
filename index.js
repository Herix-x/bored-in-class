document.body.style.backgroundColor = 'black';

var ball = document.createElement('div');
ball.style.width = '100px';
ball.style.height = '100px';
ball.style.backgroundColor = 'transparent';
ball.style.borderRadius = '50px';
ball.style.position = 'absolute';
ball.style.width = '20px';
ball.style.height = '20px';
ball.style.marginLeft = '-10px';
ball.style.marginTop = '-10px';
document.body.appendChild(ball);

var x = 1;
var y = 1;
var dx = 15;
var dy = 15;
var animate = function() {
  x += dx;
  y += dy;
  ball.style.left = x + 'px';
  ball.style.top = y + 'px';
  window.requestAnimationFrame(animate);
};
animate();

var animate = function() {
  x += dx;
  y += dy;
  if (x < 0 || x > window.innerWidth - 30) {
    dx = -dx;
  }
  if (y < 0 || y > window.innerHeight - 30) {
    dy = -dy;
  }
  ball.style.left = x + 'px';
  ball.style.top = y + 'px';
  window.requestAnimationFrame(animate);
};

var trail = document.createElement('div');
trail.style.position = 'absolute';
trail.style.top = '0px';
trail.style.left = '0px';
trail.style.width = '100%';
trail.style.height = '100%';
trail.style.pointerEvents = 'none';
document.body.appendChild(trail);

var animate = function() {
  x += dx;
  y += dy;
  if (x < 0 || x > window.innerWidth - 20) {
    dx = -dx;
  }
  if (y < 0 || y > window.innerHeight - 20) {
    dy = -dy;
  }
  ball.style.left = x + 'px';
  ball.style.top = y + 'px';
  var dot = document.createElement('div');
  dot.style.width = '10px';
  dot.style.height = '10px';
  dot.style.backgroundColor = 'hsl(' + (x / window.innerWidth * 360) + ', 100%, 50%)';
  dot.style.borderRadius = '5px';
  dot.style.position = 'absolute';
  dot.style.top = y + 'px';
  dot.style.left = x + 'px';
  dot.style.marginLeft = '-5px';
  dot.style.marginTop = '-5px';
  trail.appendChild(dot);
  window.requestAnimationFrame(animate);
};