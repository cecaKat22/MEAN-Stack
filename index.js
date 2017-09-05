const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');


const port= 8080;
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
	if(err) {
		console.log('Nije uspostavljena veza sa bazom podataka:', err);
	}else{
		console.log('Uspostavljena je veza sa bazom podataka:' +config.db);
	}
});

app.use(express.static(__dirname + '/client/dist/'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});


app.listen(port, () => {
	console.log('Sluša na portu '+port);
});