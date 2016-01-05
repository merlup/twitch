app.controller('submerchantCtrl', ['$scope', '$resource', function ($scope, $resource) {

	var SubMerchant = $resource('/submerchants');

	SubMerchant.query(function (results) {
	  $scope.submerchants = results;
	});
 
 	$scope.submerchants = []


	$scope.createSubMerchant = function () {

	    var submerchant = new SubMerchant({
		    firstName: this.firstName,
		   	lastName: this.lastName,
		    email: this.email,
		    phone: this.phone,
		    dateOfBirth: this.dateOfBirth,
		    ssn: this.ssn,
		    streetAddress: this.streetAddress,
		    locality: this.locality,
		    region: this.region,
	   		postalCode: this.postalCode
	   	});

	    submerchant.$save(function (result) {
	     	$scope.submerchants.push(result);
	     	$scope.firstName = '';
			$scope.lastName = '';
			$scope.email = '';
			$scope.phone = '';
			$scope.dateOfBirth = '';
			$scope.ssn = '';
			$scope.streetAddress = '';
			$scope.locality = '';
			$scope.region = '';
			$scope.postalCode = '';
			console.log(result);
	    });

	}

	$scope.deleteStoreItem = function (submerchant) {
	    var i = $scope.submerchants.indexOf(submerchant);
	    $scope.submerchant.splice(i, 1);
	}
	
	
}]);