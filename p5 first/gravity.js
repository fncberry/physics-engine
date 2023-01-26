function setup() {
  createCanvas(500, 500);
  
  //x1 = random(0,width);
  
  x1 = width/2
  background('gray')
  
  y1=0;
  q1=0;
  q2=0;
}

function draw() {  
  //alert(y1)
  background('gray'); 
  //rect(0, height-20, width, 10);
  ellipseMode(RADIUS);
  ellipseMode(CENTER);
  ellipse(x1,y1,30,30);
  r=30/2;
  fill('white');
  noStroke();

  y1=y1+q1;
  q1=q1+0.3;
  
  if(y1>=height)
  {
    //x1 = random(0,width)
    x1 = width/2;
    y1 = height-r;
    q1 = -15+q2;
    q2 +=2;
    if(q1>=0)
    {
      //alert('히히')
      y1=0;
      q1=0;
      q2=0;
    }
  }
}
