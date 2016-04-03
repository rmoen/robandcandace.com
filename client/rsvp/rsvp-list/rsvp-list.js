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
		}
	};
});