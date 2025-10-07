/*
* Title: Homework 3-Form Generator
* Author: Kate Liu
* Date: 22 Sept 2025
* Instructions: generates a butterfly whose wings and body change dynamically with mouse movement, creating multiple variations of the same form
*/

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(225,204,204);
  // change with mouse movement
  let wingW = map(mouseX, 0, width, 30, 100);  // width
  let wingH = map(mouseY, 0, height, 40, 150); // height
  let bodyLen = map(mouseY, 0, height, 30, 80);
  let wingColor = map(mouseX, 0, width, 100, 255); 

  drawButterfly(width/2, height/2, wingW, wingH, bodyLen, wingColor);
}

function drawButterfly(x, y, wingW, wingH, bodyLen, wingColor) {
  push();
  translate(x, y);

  // body
  stroke(0);
  fill(80);
  rect(-5, -bodyLen/2, 10, bodyLen);

  // wings
  fill(wingColor, 120, 200, 150);
  noStroke();

  // wings
  ellipse(-wingW/2, -10, wingW, wingH);
  ellipse(-wingW/2,  10, wingW, wingH/1.5);
  ellipse( wingW/2, -10, wingW, wingH);
  ellipse( wingW/2,  10, wingW, wingH/1.5);

  // tentacles
  stroke(0);
  line(0, -bodyLen/2, -10, -bodyLen/2 - 20);
  line(0, -bodyLen/2,  10, -bodyLen/2 - 20);

  pop();
}