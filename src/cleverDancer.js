var CleverDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
}

CleverDancer.prototype = Object.create(MakeDancer.prototype);
CleverDancer.prototype.constructor = CleverDancer;

CleverDancer.prototype.oldStep = MakeDancer.prototype.step;

CleverDancer.prototype.step = function() {
  this.oldStep();
  this.$node.fadeOut();
}