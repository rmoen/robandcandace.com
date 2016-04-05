angular.module('rsvp').controller('MainController', [ '$scope', '$location', '$anchorScroll', MainController ]);

function MainController($scope, $location, $anchorScroll) {
	$scope.scrollTo = function(id){
		$location.hash(id);
		$anchorScroll();
	};
}
