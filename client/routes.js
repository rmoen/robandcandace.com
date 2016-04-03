angular.module('rsvp').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$stateProvider
		.state('rsvpForm', {
			url: '/',
			template: '<rsvp-form></rsvp-form>'
		})
		.state('rsvpList', {
			url: '/rsvp-list',
			template: '<rsvp-list></rsvp-list>'
		});
	$urlRouterProvider.otherwise('/');
});