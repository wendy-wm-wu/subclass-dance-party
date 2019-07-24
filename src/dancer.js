// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };

var MakeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.oldStep();
  this.interact();
}

MakeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
}

MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
}

MakeDancer.prototype.interact = function(top, left) {
  if (window.dancers.length >= 2) {
    for (let i = 0; i < window.dancers.length; i++) {
      var y1 = window.dancers[i].top;
      var x1 = window.dancers[i].left;
      var distance = Math.sqrt(Math.pow((Math.abs(top - y1)),2) + Math.pow((Math.abs(left - x1)),2));
      console.log(distance);

      if (distance <= 150) {
        //grab the id from the tag
        var targetId = i + 1;
        $(`#${targetId}`).attr("src","images/babyshark.png"); //we want first item
        $(`#${window.dancers.length + 1}`).attr("src","images/babyshark.png"); //second item
      }
    }
  }
}
  // if (distance <= 50) {
  //   console.log(distan)
  // }

// MakeDancer.prototype.test = function() {
//   console.log(window.dancers);
// }
  //a^2 + b^ = c^
  //if top of one dancer - the top of another dancer and left of one dancer and left of other dancer is less than a number
    //then the pair will interact with each other via css
  //if they are in a pair, there will be no trigger for interaction

