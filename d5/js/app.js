var app = angular.module('BeerDemo2', []);

app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});

app.factory('configFactory', ['$window', function(win) {
    return {
        getBeerList: function() {
            return win.beerList;
        }
    }
}]);

// Controller defined in a way that survives minification.
app.controller('BeerDemo2Ctrl', function ($scope, configFactory) {
//function BeerDemo2Ctrl($scope, configFactory) {
    $scope.beer = "tasty";
    $scope.beerList = configFactory.getBeerList();
});
