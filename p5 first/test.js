/*
function setup() {
    createCanvas(1000, 1000);
    x1 = random(0,width);
    
    x1 = width/2
    background('gray')
    
    y1=0;
    q1=0;
    q2=0;
  }
  
  function draw() {  
    alert(y1)
    background('gray');
    ellipse(x1,y1,30,30)
    fill('white');
    noStroke();
  
    y1=y1+q1;
    q1=q1+0.3;
    
  
    fill(a,a,a);
    if(t==0)
    {
      a+=1;
      if(a>=225)
      {
        t=1;
      }
    }
    else{
      a-=1;
      if(a<=0)
      {
        t=0;
      }
    }


    if(y1>=height)
    {
      //x1 = random(0,width)
      x1 = width/2;
      y1 = height;
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
  */

  function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }