var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, (err,db) => {
	if(err) throw err
	var collection = db.collection('users');
	var doc = {firstName: process.argv[2],lastName: process.argv[3]};
	collection.insert(doc, 
		(err,data) => {
			if(err) throw err
			var test = JSON.stringify(doc);
			console.log(test,data);
			db.close()
		})

})