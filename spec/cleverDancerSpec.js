describe('cleverDancer', function() {

  var cleverDancer, clock;
  var timeBetweenSteps = 25;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    cleverDancer = new CleverDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(cleverDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(cleverDancer.$node, 'fadeOut');
    cleverDancer.step();
    expect(cleverDancer.$node.fadeOut.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(cleverDancer, 'step');
      expect(cleverDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(cleverDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(cleverDancer.step.callCount).to.be.equal(2);
    });
  });
});