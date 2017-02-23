var mongoose= require ("mongoose"); 

var RatingSchema = new mongoose.Schema({
	
	value:{
		type     : Array, 
		required : false,

	},

	postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    tradeWorkerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TradeWorker'
    }
}); 

var Rating = mongoose.model('Rating', RatingSchema)
module.exports = Rating ;