var mongoose = require('mongoose');

var mongoURI = process.env.MONGODB_URI ||'mongodb://warshah:1234@ds157529.mlab.com:57529/warshah';
mongoose.connect(mongoURI);
db = mongoose.connection;

db.once('open',function () {
	console.log('mongoDB is open');
});