var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, (err,db) => {
	if(err) throw err
	var collection = db.collection('users');
	collection.update({username: 'tinatime'},{$set: {age: 40}}, () => console.log('hey'))
	db.close()
	})