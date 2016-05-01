var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var limit = parseInt(process.argv[2]);

mongo.connect(url, (err,db) => {
	if(err){
		console.log('error in connecting to the database')
	}
	else if(db){
		var parrots = db.collection('parrots');
		//console.log(parrots)
		parrots.find({age: 
			{
				$gt: limit
			}}, 
			{
				_id: 0,
			}
	).toArray( (err,docs) => {
			if(err){
				console.log('error at query')
			} else{
				console.log(docs)
				db.close();
			}
			
		})
		
	}

})