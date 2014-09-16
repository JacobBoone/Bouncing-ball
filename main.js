var context;
var x=100;
var y=200;
var dx=5;
var dy=5;

function init()
{
  context= myCanvas.getContext('2d');
  setInterval(draw,10);
}

function draw()
{
  context.clearRect(0,0, 300,300);
  context.beginPath();
  context.fillStyle="#0000ff";
  // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  context.arc(x,y,20,0,Math.PI*2,true);
  context.closePath();
  context.fill();
 // Boundary Logic
if( x<20 || x>279) dx=-dx; 
if( y<20 || y>279) dy=-dy;


  x+=dx;
  y+=dy;
}

	



$(document).on('ready', function() {
// ball #1
init();


// ball #2
 var bouncetime = 1000;
    var ballheight = 280;
    var ballsize = 80;
 
    $('#ball').css({'width':ballsize, 'height':ballsize, 'margin-left':-(ballsize/2),'display':'block', 'bottom':ballheight});
    $('#shadow').css({'width':ballsize*1.5, 'height':ballsize/3, 'margin-left':-(ballsize*0.75),'display':'block', 'opacity':0.2});
 
    ballbounce();
    ballshadow();
 
    function ballbounce() {
        $('#ball').animate({'bottom':20}, bouncetime, 'easeInQuad', function() {
            $('#ball').animate({'bottom':ballheight}, bouncetime, 'easeOutQuad', function() {
                ballbounce();
            });
        });
    }
    function ballshadow() {
        $('#shadow').animate({'width':ballsize, 'height':ballsize/4, 'margin-left':-(ballsize/2), 'opacity':1}, bouncetime, 'easeInQuad', function() {
            $('#shadow').animate({'width':ballsize*1.5, 'height':ballsize/3, 'margin-left':-(ballsize*0.75), 'opacity':0.2}, bouncetime, 'easeOutQuad', function() {
                ballshadow();
            });
        });
    }



  
});