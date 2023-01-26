var height=500;
var E=1000;

var c1 = {
  x:"900",
  mass:"20",
  diameter:"90"
};
var r1 = c1.diameter/2;
var x1 = c1.x;
var y1 = 500-r1;
var mass1 = c1.mass;
///Math.sqrt: 제곱근 구하기
var v1 = Math.sqrt(2*E/mass1);


var c2 = {
  x:"500",
  mass:"2",
  diameter:"50"
};
var r2 = c2.diameter/2;
var x2 = c2.x;
var y2 = height-r2;
var mass2 = c2.mass;
var v2=0;



function setup() {
  createCanvas(1000, 500);
}
  
function draw() {  
  background('gray');
  ellipseMode(RADIUS);
  ellipseMode(CENTER);
  ellipse(x1,y1,r1*2,r1*2);
  ellipse(x2,y2,r2*2,r2*2);
  fill('white');
  noStroke('');
  
  limit=Math.sqrt((x1-x2)**2-(y1-y2)**2);
  if(limit<r1+r2){
    if(v1==0){
      v1=Math.sqrt(mass2/mass1)*v2;
      v2=0;
    }
    else
    {
      v2=Math.sqrt(mass1/mass2)*v1;
      v1=0;
    }
  }
    

  if(width-x1<=r1){
    v1=-v1;
  }
  if(x2<=r2){
    v2=-v2;
  }

  x1=x1-v1;
  x2=x2-v2;
    
}
