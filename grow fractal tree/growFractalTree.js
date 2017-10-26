var tree = [];
var treeGeneration = 0;
var leaves = [];

function setup() {
  createCanvas(400, 400);
  var initalPointx = createVector(width/2, height);
  var initalPointy = createVector(width/2, height-100);
  var treeRoot = new Branch(initalPointx, initalPointy);
  tree[0] = treeRoot;
}

function draw() {
  background(50);
  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
  }
  for (var i = 0; i < leaves.length; i++) {
    fill(255, 0, 100);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, 10, 10);
    leaves[i].y += random(0, 5);
  }
}

function mousePressed() {
  for (var i = tree.length-1; i >= 0; i--) {
    if(!tree[i].finished) {
      var {right, left} = tree[i].branches();
      tree.push(right);
      tree.push(left);
    }
    tree[i].finished = true;
  }
  treeGeneration++;
  if(treeGeneration === 5 || treeGeneration === 10 || treeGeneration === 20) {
    for (var i = 0; i < tree.length; i++) {
      if(!tree[i].finished) {
        var leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }
}
