var mongoose= require ("mongoose"); 

var TradeWorkerSchema = new mongoose.Schema({
	
	username:{
		type     : String, 
		required : true,
		unique : true
	}, 
	email:{
		type     : String, 
		required : true
	},
	place:{
		type     : String, 
		required : true
	},
	service:{
		type     : String, 
		required : true
	},
	phone:{
		type     : Number,
		required : true 
	},
	experiance:{
		type     : String
	},
	Feed : {
		type : Array
	}

}); 

var TradeWorker = mongoose.model('TradeWorker',TradeWorkerSchema)
module.exports = TradeWorker ; 

