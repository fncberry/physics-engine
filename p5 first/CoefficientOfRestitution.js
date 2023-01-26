
function setup() {
  createCanvas(700, 1000);
  
  //x1 = random(0,width);
  
  x1 = width/2
  background('gray')
  
  y1=0;
  q1=0;
  q2=0;
  q3=0;
  pandan=0;

  a=0;
  t=0;
}

function draw() {  
  background('gray');
  //rect(0, height-20, width, 10);
  ellipseMode(RADIUS);
  ellipseMode(CENTER);
  ellipse(x1,y1,30,30);
  r=30/2;

  noStroke();
  y1=y1+q1;
  q1=q1+0.5;
  q3=q3-0.4;
  if(mouseIsPressed)
  {
    x1 = mouseX;
    y1 = mouseY
    q1=0;
    q2=0;
    q3=0;
  }
  if(q1>=0 && pandan == 0)
  {
    q3=0;
    pandan=1;
  }
  if(y1>=height)
  {
    //x1 = random(0,width)
    y1 = height-r;
    q1 = q3+q2/100;
    q2 -= q3;
    q3 = 0;
    pandan=0;
    if(q1>=0)
    {
//      alert('히히')
      y1=0;
      q1=0;
      q2=0;
      q3=0;
    }
  }
}
