angular.module('rsvp').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$stateProvider
		.state('rsvpInvitation', {
			url: '/',
			templateUrl: 'client/rsvp/rsvp-invitation/invitation.html'
		})
		.state('rsvpItinerary', {
			url: '/itinerary',
			templateUrl: 'client/rsvp/rsvp-itinerary/itinerary.html'
		})
		.state('rsvpForm', {
			url: '/rsvp',
			template: '<rsvp-form></rsvp-form>'
		})
		.state('rsvpMap', {
			url: '/map',
			templateUrl: 'client/rsvp/rsvp-map/map.html'
		})
		.state('rsvpList', {
			url: '/rsvp-list',
			template: '<rsvp-list></rsvp-list>'
		})
		.state('rsvpConfirmation', {
			url: '/confirmation',
			templateUrl: 'client/rsvp/rsvp-confirmation/confirmation.html'
		});
	$urlRouterProvider.otherwise('/');
});