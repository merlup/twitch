app.controller('storesController', ['$scope', '$resource', function ($scope, $resource) {

	var StoreItem = $resource('/store_items');

	StoreItem.query(function (results) {
	  $scope.store_items = results;
	});
 
 	$scope.store_items = []


	$scope.createStoreItem = function () {

	    var store_item = new StoreItem({
		    title: this.title,
		    description: this.description,
		    image: this.image,
		    price: this.price,
		    quantity: this.quantity
		});

	    store_item.$save(function (result) {
	      $scope.store_items.push(result);
	      $scope.title = '';
	      $scope.description = '';
	      $scope.price = '';
	      $scope.image = '';
	      $scope.quantity = '';
	      console.log(result);
	    });
	}

	$scope.deleteStoreItem = function (store_item) {
	    var i = $scope.store_items.indexOf(store_item);
	    $scope.store_item.splice(i, 1);
	}

}])