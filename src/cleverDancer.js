var CleverDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="images/minion.jpeg" class="cleverdancer"></img>');
  this.setPosition(top, left);
  this.interact();
}

CleverDancer.prototype = Object.create(MakeDancer.prototype);
CleverDancer.prototype.constructor = CleverDancer;

CleverDancer.prototype.oldStep = MakeDancer.prototype.step;

CleverDancer.prototype.step = function() {
  this.oldStep();
  this.$node.slideToggle();
}

CleverDancer.prototype.lineUp = function() {
  $('.cleverdancer').css({"left": "0px"})
}