/* black background */
document.body.style.backgroundColor = 'black';

var count = 0
var text = document.createElement('div');
text.style.position = 'absolute';
text.style.bottom = '0px';
text.style.right = '0px';
text.style.color = 'white';
text.style.fontFamily = 'monospace';
text.style.fontSize = '20px';
text.style.padding = '10px';
text.innerHTML = '<br>Corner Hit: ' + count;

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
var x = Math.random() * (window.innerWidth - 20);
var y = Math.random() * (window.innerHeight - 20);
var dx = 15;
var dy = 15;
var animate = function() {
  x += dx;
  y += dy;
  ball.style.left = x + 'px';
  ball.style.top = y + 'px';
  
  if (x < 20 && y < 20) {
    count++;
  }
  if (x > window.innerWidth - 20 && y < 20) {
    count++;
  }
  if (x < 20 && y > window.innerHeight - 20) {
    count++;
  }
  if (x > window.innerWidth - 20 && y > window.innerHeight - 20) {
    count++;
  }
  
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
