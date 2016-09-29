##Prerequisites

having a running mongod instance in order to import data into the database.

##Collection Example -- JSON

The examples use the restaurants collection in the test database. The following is a sample document in the restaurants collection:

{
  "address": {
     "building": "1007",
     "coord": [ -73.856077, 40.848447 ],
     "street": "Morris Park Ave",
     "zipcode": "10462"
  },
  "borough": "Bronx",
  "cuisine": "Bakery",
  "grades": [
     { "date": { "$date": 1393804800000 }, "grade": "A", "score": 2 },
     { "date": { "$date": 1378857600000 }, "grade": "A", "score": 6 },
     { "date": { "$date": 1358985600000 }, "grade": "A", "score": 10 },
     { "date": { "$date": 1322006400000 }, "grade": "A", "score": 9 },
     { "date": { "$date": 1299715200000 }, "grade": "B", "score": 14 }
  ],
  "name": "Morris Park Bake Shop",
  "restaurant_id": "30075445"
}

#Procedure -- mongoimport

1
Retrieve(v.取回) the restaurants data.

Retrieve the dataset from https://raw.githubusercontent.com/mongodb/docs-assets/primer-dataset/primer-dataset.json and save to a file named primer-dataset.json.

2
Import data into the collection.

In the system shell or command prompt, use mongoimport to insert the documents into the test database. If the collection already exists in the test database, the operation will drop the restaurants collection first.

mongoimport --db test --collection restaurants --drop --file ~/downloads/primer-dataset.json
The mongoimport connects to a mongod instance running on localhost on port number 27017. The --file option provides the path to the data to import, in this case, ~/downloads/primer-dataset.json.

myUbun: vagrant@ubun:~$ mongoimport --db test --collection restaurants --drop --file /vagrant/primer-dataset.json

To import data into a mongod instance running on a different host or port, specify the hostname or port by including the --host and the --port options in your mongoimport command.