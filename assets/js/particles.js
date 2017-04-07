var canvas = document.querySelector('canvas')
var body = document.querySelector('body')
canvas.width = body.offsetWidth
canvas.height = body.offsetHeight
window.addEventListener("resize", function(){
   console.log('test');
   canvas.width = body.offsetWidth
   canvas.height = body.offsetHeight
   for(var i = 0; i < 100; i++){
   particles[i] = {
      x: random_range(0, canvas.width),
      y: random_range(0, canvas.height),
      xSpeed: random_range(-2, 2),
      ySpeed: random_range(-2, 2),
      size: random_range(1, 10)
   }
}
});
var ctx = canvas.getContext('2d')
console.log(canvas)
console.log(body.width)


partCnt = 100;
var particles = []
for(var i = 0; i < partCnt; i++){
   particles[i] = {
      x: random_range(0, canvas.width),
      y: random_range(0, canvas.height),
      xSpeed: random_range(-2, 2),
      ySpeed: random_range(-2, 2),
      size: random_range(1, 10),
      range: random_range(10, 75)
   }
}

function random_range(min, max){
   return Math.round(min + Math.random() * (max-min))
}

requestAnimationFrame(draw)
function draw(){
   requestAnimationFrame(draw)
   ctx.fillStyle = '#222'
   ctx.fillRect(0, 0, canvas.width, canvas.height)
   for(var i = 0; i < partCnt; i++){
      check_points(particles[i].x, particles[i].y, particles[i].size, particles[i].range)
      particles[i].x += particles[i].xSpeed;
      particles[i].y += particles[i].ySpeed;
      ctx.fillStyle = "#555"
      ctx.fillRect(particles[i].x,particles[i].y,particles[i].size,particles[i].size)
      if(particles[i].x > canvas.width)
         particles[i].x = 0
      if(particles[i].x < 0)
         particles[i].x = canvas.width
      if(particles[i].y > canvas.height)
         particles[i].y = 0
      if(particles[i].y < 0)
         particles[i].y = canvas.height
      
   }
}

function check_points(x, y, size, range){
   for(var i = 0; i < partCnt; i++){
      if(distance(x, y, particles[i].x, particles[i].y) < range){
         ctx.beginPath()
         ctx.moveTo(x+size/2,y+size/2)
         ctx.lineTo(particles[i].x+particles[i].size/2,particles[i].y+particles[i].size/2)
         ctx.strokeStyle = "#991100"
         ctx.stroke()
      }
   }
}

function distance(x1, y1, x2, y2){
   return Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2) )
}
