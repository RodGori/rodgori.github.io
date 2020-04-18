function setup() {
  let myCanvas = createCanvas($("#canvas").width(), 500);
  myCanvas.parent('canvas');
  
}

function draw() {
  textSize(width / 3);
  text('word', 10, 30, $("#canvas").width(), 500);
  

}