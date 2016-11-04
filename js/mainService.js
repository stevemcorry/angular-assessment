App.service('mainService',function($http) {

this.getProduct = function() {
  return $http({
    method: 'GET',
    url: 'http://practiceapi.devmounta.in/products'
  });

};

});
