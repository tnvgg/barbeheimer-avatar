/* VARIABLES */

let eyeWidth = 50;
let eyeHeight = 40;
let pupilWidth = 22;
let pupilHeight = 25;
/* SETUP RUNS ONCE */

function setup() {
  //sets the screen size
  createCanvas(400, 400);
}
/* DRAW LOOP REPEATS */
function draw() {
   if (mouseIsPressed)
  {
  //sets the background color
background('#ffe4e1');
  
}
  else
  {
background('#f5f5f5');
   }
if (mouseIsPressed){
  // Hair
  fill('#800000');
  rect(90, 80, 205, 330, 95);

  // Clothes & Neck
  fill('#FFEBCD');
  rect(160, 260, 80, 80);
  fill('hotpink');
  arc(200, 400, 200, 150, 180, 0);
}
  else
{
  fill('black');
  rect(100, 77, 205, 330, 95);
  // Clothes & Neck
  fill('#FFEBCD');
  rect(160, 260, 80, 80);
  fill('#696969');
  arc(200, 400, 200, 150, 180, 0);
}
  // Draw an ellipse
  fill('#FFEBCD');
  ellipse(width / 2, 200, 175, 200);
  //Eyes
  if (mouseIsPressed) {
    //One eye closed
    fill(0);
    ellipse(230, 170, eyeWidth, eyeHeight / 8);
    //One eye open
    fill('#ffffff');
    ellipse(170, 170, eyeWidth, eyeHeight);
    fill(0);
    ellipse(170, 170, pupilWidth, pupilHeight);
  }  
  else {
    //Eyes open
    fill('#ffffff');
    ellipse(170, 170, eyeWidth, eyeHeight);
    ellipse(230, 170, eyeWidth, eyeHeight);
    fill(0);
    ellipse(170, 170, pupilWidth, pupilHeight);
    ellipse(230, 170, pupilWidth, pupilHeight);
  }
  //nose
  fill('#ffebcd')
  triangle(190, 220, 200, 200, 210, 220);

  if (mouseIsPressed){
  fill('#FF69B4')
  arc(200, 230, 50, 50, 0, 180);
  line(175, 230, 225, 230);
  }
  else
  {
    fill('#778899')
  arc(200, 236, 50, 20, 0, 180);
  line(175, 236, 225, 236);
  }
   //blushie
  if(mouseIsPressed){
    //eyes closed
  fill('#ffc0cb')
ellipse(150,220, 35,35);
    ellipse(250,220, 35,35);
  }else{
    //eyes opened
  fill('#dcdcdc')
  
 ellipse(150,215, 35,35); ellipse(250,215, 35,35);
  }
 fill('#000000')
  ellipse(200,280,3,3);
  
if (mouseIsPressed)
{
  fill("#800080")
  textSize(20);
  text("#GRWM for Oppenheimer\n and Barbie", 20, 20)
  text('click to \nsee the \nmagic !',330,330); 
}
  else
{
  fill("#000000")
  textSize(20);
  text("#GRWM for Oppenheimer\n and Barbie", 20, 20)
  text('click to \nsee the \nmagic !',330,330);
}
  if (mouseIsPressed)
  {
  arc(165, 138, 43, 8, 180, 0);
  arc(237, 142, 43, 8, 180, 0);
}
  else
  {
    arc(165, 142, 43, 8, 180, 0);
  arc(237, 142, 43, 8, 180, 0);
  }
}
