var Rating = require ('./RatingModel.js');
module.exports = {
	insert : function (req, res) {
		 // console.log("----", req.body);
		
			// 	console.log(req.body.tradeworkerId, "from server")
		Rating.findOne({tradeworkerId:req.body.tradeworkerId})
			.exec(function (error, user) {
				var newRating = new Rating ({
		        	postedBy:req.body.postedBy,
		        	tradeworkerId : req.body.tradeworkerId,
				});

				newRating.value.push(req.body.value);
				// console.log("obj --", newRating);
			newRating.save(function(err, newRating){
	    		if(err){
	       		 	res.status(500).send(err);
	    		}else{
	    			res.json(newRating)
	    		};
			});
		})
	},
	getAllRatingsByTWID : function (req, res) {
		Rating.find({tradeworkerId:req.params.id}).exec(function (err, allRating) {
			if(err){
				res.status(500).send('err');
			}else{
				res.status(200).send(allRating);
			}
		});
	}
}
