var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, (err,db) => {
	if(err) throw err
	var collection = db.collection(process.argv[3]);
	collection.remove({
		_id: String(process.argv[4])
	}, () => {
		db.close()
	})
})