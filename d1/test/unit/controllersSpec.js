'use strict';

/* jasmine specs for controllers go here */
describe('Beer Demo 1 controllers', function() {

  describe('BeerDemo1Ctrl', function(){

    it('should notice beer is tasty', function() {
      var scope = {};
      var ctrl = new BeerDemo1Ctrl(scope);
      expect(scope.beer).toBe("tasty");
    });
  });
});
