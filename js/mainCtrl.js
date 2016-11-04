App.controller('mainCtrl',function($scope, mainService, $stateParams) {

$scope.getProduct = function(){
  mainService.getProduct().then(function(results) {
    $scope.products= results.data;
  });
};
$scope.getProduct();


});
