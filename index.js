const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const {secret} = require('./config.js');
const profileCtrl = require('./controllers/profileCtrl.js');
const userCtrl = require('./controllers/userCtrl.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

var corsOptions = {
	origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));

app.use(express.static(__dirname + '/public/'));

app.use(session({
    secret,
    saveUninitialized: true,
    resave: true
  }))

app.get('/api/profiles', profileCtrl.getFriendsProfiles);
app.post('/api/login', userCtrl.login);


app.listen(port, ()=>{
    console.log(`listening on ${port}`);
  })
