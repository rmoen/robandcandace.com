angular.module('rsvp').directive('rsvpForm', function () {
	return {
		restrict: 'E',
		templateUrl: 'client/rsvp/rsvp-form/form.html',
		controllerAs: 'rsvpForm',
		controller: function ($scope, $reactive) {
			$reactive(this).attach($scope);
			this.newRsvp = {};
			this.addRsvp = () => {
				Reservations.insert(this.newRsvp);
				this.newRsvp = {};
			}
		}
	};
});