/*
* Title: Homework 2 - Form Generator
* Author: Kate Liu
* Date: 22 Sept 2025 
* Instructions: fish under water
*/

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  // sea background
  background(0, 100, 150, 200);
  let X = int(random(0,20));
  let Y = 200;
  //sand
  fill(200, 180, 100);
  rect(0, height - 100, width, 100);
  // floating bubbles
  let n = 10;
  for(let i = 0; i < n; i ++){
    for(let j = 0; j < n; j ++){noStroke();
  fill(255, 255, 255, random(180));      circle(random(100,i*100),random(100,j*100),random(4,30));
  //fish emoji
  textSize(100);
  text("🪸",100,390);
  text("🪸",300,390);
  textSize(int(random(27,38)));
  text("🐟",mouseX,mouseY);
  text("🐟", X, Y);
  X += random(70,120);
  Y += random(0,50);                   
                               }
}
   //saveCanvas("mySea.jpg");
}

function mousePressed(){
  redraw();
}