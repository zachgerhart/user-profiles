angular.module('userProfiles')
.controller('mainCtrl', function( $scope ) {

	$scope.test = 'test';


	$scope.users = [
		{
			name: 'Preston McNeil',
			password: 'password1',
			friends: ['Lindsey Mayer', 'Terry Ruff']
		},
		{
			name: 'Ryan Rasmussen',
			password: '$akgfl#',
			friends: ['Lindsey Mayer']
		},
		{
			name: 'Terri Ruff',
			password: 'hunter2',
			friends: ['Lindsey Mayer', 'Preston McNeil']
		},
		{
			name: 'Lindsey Mayer',
			password: '777mittens777',
			friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
		}
	];

	$scope.profiles = [
		{
			name: 'Preston McNeil',
			pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1117694_1614542_108355616_q.jpg',
			status: 'Everything is bigger in Texas'
		},
		{
			name: 'Ryan Rasmussen',
			pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/211536_7938705_80713399_q.jpg',
			status: 'RR Rules'
		},
		{
			name: 'Terri Ruff',
			pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/41368_8222994_4799_q.jpg',
			status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
		},
		{
			name: 'Lindsey Mayer',
			pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/173210_10024969_2137324550_q.jpg',
			status: 'OMG MITTENS DID THE CUTEST THING TODAY'
		}
	];

});