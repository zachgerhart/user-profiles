var users = [
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

module.exports = {

	login: function( req, res ) {
		users.forEach(function( user ) {
			if (user.userName === req.body.name && user.password === req.body.password) {
				req.session.currentUser = user;
				res.send({ userFound: true });
				return;
			}
		});
		res.send({ userFound: false });
	}
}