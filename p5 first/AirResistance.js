var c1 = {
    x:"150",
    diameter:"30"
  };
  var r1 = c1.diameter/2;
  var x1 = c1.x;
  var y1 = height;


  var c2 = {
    x:"250",
    diameter:"30"
  };
  var r2 = c2.diameter/2;
  var x2 = c2.x;
  var y2 = height;



var n=0;

function setup() {
    createCanvas(500, 700);
    background('grey');
    
    y1=0;
    q1=0;
    q2=0;
  }
  

function AirResistanceOn() {  

    n+=1;
    if(n%100000==0){
        fill('white');
    }
    
    noStroke();
  
    
    y1=y1+q1;
    q1=q1+3;

    y2=y2+q2;
    q2=q2+1.5
   
    ellipse(x1,y1,r1,r1);
    ellipse(x2,y2,r2,r2);
  }
  