var 	express = require('express')
	,	session = require('express-session')
	,	bodyParser = require('body-parser')
	,	cors = require('cors')
	,	config = require('./config.js')
	,	userCtrl = require('./controllers/userCtrl.js')
	,	profileCtrl = require('./controllers/profileCtrl.js')
	,	port = 8999
	, 	app = express();

var corsOptions = {
	origin: 'http://localhost:8999'
}

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret }));


app.post('/api/login', userCtrl.login);

app.get('/api/profiles', profileCtrl.getFriends);


app.listen(port, function() {
	console.log('listening on ' + port)
})