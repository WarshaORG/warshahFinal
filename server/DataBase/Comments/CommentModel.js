var mongoose= require ("mongoose"); 

var CommentSchema = new mongoose.Schema({
	
	text:{
		type     : String, 
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

var Comment = mongoose.model('Comment', CommentSchema)
module.exports = Comment ; 

