var StupidDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
}

StupidDancer.prototype = Object.create(MakeDancer.prototype);
StupidDancer.prototype.constructor = StupidDancer;

StupidDancer.prototype.oldStep = MakeDancer.prototype.step;

StupidDancer.prototype.step = function() {
  this.oldStep();
  this.$node.fadeToggle();
}

