var Comment = require ('./CommentModel');

module.exports = {
	insert : function (req, res) {
		Comment.findOne({postedBy:req.body.postedby})
			.exec(function (error, user) {
				var newComment = new Comment ({
					text: req.body.text,
		        	postedBy:req.body.postedby,
		        	tradeWorkerId : req.body.tradeWorkerId,
				});
			newComment.save(function(err, newComment){
	    		if(err){
	       		 	res.status(500).send(err);
	    		}else{
	    			res.json(newComment)
	    		};
			});
		})
	},
	getAllCommentsByTWID : function (req, res) {
		Comment.find({tradeWorkerId:req.params.id}).exec(function (err, allComment) {
			if(err){
				res.status(500).send('err');
			}else{
				res.status(200).send(allComment);
			}
		});
	}
}

