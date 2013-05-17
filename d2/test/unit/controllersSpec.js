'use strict';

/* jasmine specs for controllers go here */

describe('BeerDemo2App controllers', function(){
    beforeEach(module('BeerDemo2'));

    describe('BeerDemo2Ctrl', function() {
        it('should notice beer is tasty',

        inject(function($controller) {
            var scope = {};
            var ctrl = $controller("BeerDemo2Ctrl",
                    {$scope: scope});

            expect(scope.beer).toBe("tasty");
        }));
    });

});
