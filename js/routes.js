App.config(function($urlRouterProvider,$stateProvider) {
  $stateProvider
    .state('home',{
      url: '/',
      templateUrl: './views/home.html'
    })
    .state('blog',{
      url: '/blog',
      templateUrl: './views/blog.html'
    })
    .state('about',{
      url: '/about',
      templateUrl: './views/about.html'
    })
    .state('shop',{
      url: '/shop',
      templateUrl: './views/shop.html'
    })
    .state('details',{
      url: '/details/:id',
      templateUrl: './views/product-details.html',
      controller: function ($stateParams,$scope,$http){
        var id = $stateParams.id;
        $scope.getDetails = function() {
          $http({
            method: 'GET',
            url: "http://practiceapi.devmounta.in/products/"+id
          }).then(function(results) {
            $scope.details = results.data;
            console.log(results.data);
          });
        };
        $scope.getDetails();
      }
    });
    $urlRouterProvider
			.otherwise('/');

});
