var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var sizeArg = process.argv[2];

mongo.connect(url, (err,db) => {
	if (err) throw err
	var collection = db.collection('prices');

	collection.aggregate([
		{ $match: { size: sizeArg}},
		{ $group: {
			_id: 'average',
			average: {
				$avg: '$price'
			} 
		}}
		]).toArray((err, results) => {
			if(err) throw err
			else if (!results.length){
				throw new Error('No Results found')
			}
			console.log(results[0].average.toFixed(2))
			db.close()
		})

	})