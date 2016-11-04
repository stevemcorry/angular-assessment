var App = angular.module('assessment',['ui.router']);
App.directive('productDirective',function() {
  return {
        restrict: 'E',
        templateUrl: "views/product-tmpl.html",
        link: function (scope,element,attrs) {
          scope.hideImg = function() {
            $(".product-grid__img").css('display','none');
            $(".product-grid__show").css('display','block');
          };
          scope.showImg = function() {
            $(".product-grid__img").css('display','block');
            $(".product-grid__show").css('display','none');
          };
        }
      };
});
