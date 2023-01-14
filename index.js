Clear all
Export to JSFiddle
/* black background */
document.body.style.backgroundColor = 'black';
/* white ball */
var ball = document.createElement('div');
ball.style.width = '100px';
ball.style.height = '100px';
ball.style.backgroundColor = 'white';
ball.style.borderRadius = '50px';
ball.style.position = 'absolute';
ball.style.top = '50%';
ball.style.left = '50%';
ball.style.marginLeft = '-50px';
ball.style.marginTop = '-50px';
document.body.appendChild(ball);
/* 80% smaller */
ball.style.width = '20px';
ball.style.height = '20px';
ball.style.marginLeft = '-10px';
ball.style.marginTop = '-10px';
/* animate horizontally and vertically */
var x = 0;
var y = 0;
var dx = 1;
var dy = 1;
var animate = function() {
  x += dx;
  y += dy;
  ball.style.left = x + 'px';
  ball.style.top = y + 'px';
  window.requestAnimationFrame(animate);
};
animate();
/* bounce off the walls */
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
  window.requestAnimationFrame(animate);
};
/* random ball position */
var x = 0
var y = 0
/* make the ball have a trail */
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
  dot.style.backgroundColor = 'white';
  dot.style.borderRadius = '5px';
  dot.style.position = 'absolute';
  dot.style.top = y + 'px';
  dot.style.left = x + 'px';
  dot.style.marginLeft = '-5px';
  dot.style.marginTop = '-5px';
  trail.appendChild(dot);
  window.requestAnimationFrame(animate);
};
/* make the trail rainbow */
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