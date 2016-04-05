angular.module('rsvp').directive('rsvpList', function () {
	return {
		restrict: 'E',
		templateUrl: 'client/rsvp/rsvp-list/list.html',
		controllerAs: 'rsvpList',
		controller: function ($scope, $reactive) {
			$reactive(this).attach($scope);

			this.helpers({
				reservations: () => {
					return Reservations.find({});
				}
			});
			// Hacked way of getting total people
			$scope.getTotalPeople = function(reservations) {
				var totalPeople = 0;

				angular.forEach(reservations, function(rsvp) {
					totalPeople += Number(rsvp.count) || 0;
				});
				return totalPeople;
			};
		}
	};
});