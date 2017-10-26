function Branch(begin, end) {
  this.begin = begin;
  this.end = end;
  this.finished = false;

  this.show = function() {
    stroke(255);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }

  this.branches = function() {
    // to find out the next point
    // 1. find the direction of the previous vector
    // 2. rotate vector by 45 degree and add this vector to the end vector
    // to form a new vector with the end to be used
    var dirRight = p5.Vector.sub(this.end, this.begin);
    var dirLeft = p5.Vector.sub(this.end, this.begin);
    dirRight.mult(0.67);
    dirLeft.mult(0.67);
    dirRight.rotate(PI/6);
    dirLeft.rotate(-PI/4);
    var newPointForRight = p5.Vector.add(this.end, dirRight);
    var newPointForLeft = p5.Vector.add(this.end, dirLeft);
    return {
      right: new Branch(this.end, newPointForRight),
      left: new Branch(this.end, newPointForLeft)
    };
  }
}
