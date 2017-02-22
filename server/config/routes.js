var UserController = require('../DataBase/User/UserController.js');
 var TradeWorkerController = require('../DataBase/TradeWorker/TradeWorkerController.js');
 var CommentController = require('../DataBase/Comments/CommentController.js')


module.exports = function (app, express) {
		
	////////////////////////////user/////////////////////////////////////
	 	app.post('/api/signin', UserController.signin);
	 	app.post('/api/signup',UserController.signup);

	// //////////////////////////TradeWorker///////////////////////////////
	 	app.post('/api/insert',TradeWorkerController.insert);
	 	app.get('/api/all',TradeWorkerController.getAllTradeWorker);

	 	app.post('/api/insertC',CommentController.insert);
		app.post('/api/allC/:id',CommentController.getAllCommentsByTWID);
};


