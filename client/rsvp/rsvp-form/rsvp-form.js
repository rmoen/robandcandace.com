angular.module('rsvp').directive('rsvpForm', function () {
	return {
		restrict: 'E',
		templateUrl: 'client/rsvp/rsvp-form/form.html',
		controllerAs: 'rsvpForm',
		controller: function ($scope, $reactive) {
			$reactive(this).attach($scope);
			this.newReservation = {};

			console.log( 'hi');
			this.addReservation = () => {
				Reservations.insert(this.newReservation);
				this.newReservation = {};
			}
		}
	};
});