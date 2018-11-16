var TradeWorker = require ('./TradeWorkerModel');

module.exports = {
	insert : function (req, res) {
		// TradeWorker.findOne({tradeworker : req.body.tradeworker})
 	// 		.exec(function (error, user) {
			// console.log('from server',req.body)
		var newTradeWorker = new TradeWorker ({
			username : req.body.username,
        	email:req.body.email,
        	place : req.body.place,
        	service : req.body.service,
        	phone : req.body.phone,
        	experiance : req.body.experiance
		});
		
		newTradeWorker.save(function(err, newTradeWorker){
    		if(err){
       		 	res.status(500).send(err);
    		}else{
    			res.json(newTradeWorker)
    		};
		});
	},
	getAllTradeWorker : function (req, res) {
		TradeWorker.find().exec(function (err, allTradWorker) {
			if(err){
				res.status(500).send('err');
			}else{
				res.status(200).send(allTradWorker);
			}
		});
	}
	
	
}