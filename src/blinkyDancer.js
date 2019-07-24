// var makeMakeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var MakeblinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = MakeblinkyDancer.step;

//   MakeblinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     MakeblinkyDancer.$node.toggle();
//   };

//   return MakeblinkyDancer;
// };

var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $(`<img src="images/pepe.png" class="blinkydancer" id="${count}"></img>`);
  this.setPosition(top, left);
  this.interact(top, left);
}

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.oldStep = MakeDancer.prototype.step;

MakeBlinkyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
}

MakeBlinkyDancer.prototype.lineUp = function() {
  $('.blinkydancer').css({"left": "0px"})
}
