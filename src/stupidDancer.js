var StupidDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $(`<img src="images/gudetama.png" class="stupiddancer" id="${count}"></img>`);
  this.setPosition(top, left);
  this.interact(top, left);
}

StupidDancer.prototype = Object.create(MakeDancer.prototype);
StupidDancer.prototype.constructor = StupidDancer;

StupidDancer.prototype.oldStep = MakeDancer.prototype.step;

StupidDancer.prototype.step = function() {
  this.oldStep();
  this.$node.fadeToggle();
}

StupidDancer.prototype.lineUp = function() {
  $('.stupiddancer').css({"left": "0px"})
}

