var mybox,mybox5;

function setup() 
{
  createCanvas(400, 400);
  mybox=new Box(100,100,50,100);
  mybox5=new Box(200,300,100,50);
}

function draw() 
{
  background("black");
  mybox.show();
  mybox5.show();
}

