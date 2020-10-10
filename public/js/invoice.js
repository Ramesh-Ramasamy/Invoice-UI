var app = angular.module('invoice', []);
app.controller('invoiceCtrl', function($scope) {
  $scope.show_detailed_invoice_view = false
  $scope.change_invoice_view = function(){
  	$scope.show_detailed_invoice_view = !$scope.show_detailed_invoice_view
  }
});