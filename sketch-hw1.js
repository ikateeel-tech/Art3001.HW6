/*
* Title: Homework 1 - Landscape of Code
* Author: Kate Liu
* Date: 8 Sept 2025
*/

function setup() {
  //creates a canvas 400 pixels wide
  //and 400 pixels high
  createCanvas(400, 400);
}

function draw() {
  //light yellow background
  background(245, 243, 132);
   fill(200, 0, 0);
  ellipse(200, 200, 150, 80);
  stroke("#FFC107");
  strokeWeight(5);
   fill(255);
  rect(170, 200, 60, 100, 20);
  stroke(0);//black outline

  strokeWeight(1);//outline thickness

  fill("#8BC34A");

  rect(0, 300, 400, 200);
  
  //emoji
  textSize(38)
  text("🍓",100,290)
  text("🍓",mouseX,mouseY)
}