#Insert Data with the mongo Shell¶

You can use the insert() method to add documents to a collection in MongoDB. If you attempt to add documents to a collection that does not exist, MongoDB will create the collection for you.

##Prerequisites

In the mongo shell connected to a running mongod instance, switch to the test database.

use test
##Insert a Document

Insert a document into a collection named restaurants. The operation will create the collection if the collection does not currently exist.

db.restaurants.insert(
   {
      "address" : {
         "street" : "2 Avenue",
         "zipcode" : "10075",
         "building" : "1480",
         "coord" : [ -73.9557413, 40.7720266 ]
      },
      "borough" : "Manhattan",
      "cuisine" : "Italian",
      "grades" : [
         {
            "date" : ISODate("2014-10-01T00:00:00Z"),
            "grade" : "A",
            "score" : 11
         },
         {
            "date" : ISODate("2014-01-16T00:00:00Z"),
            "grade" : "B",
            "score" : 17
         }
      ],
      "name" : "Vella",
      "restaurant_id" : "41704620"
   }
)
The method returns a WriteResult object with the status of the operation.

WriteResult({ "nInserted" : 1 })
If the document passed to the insert() method does not contain the _id field, the mongo shell automatically adds the field to the document and sets the field’s value to a generated ObjectId.

##Additional Information

In the MongoDB Manual, see insert() and Documents.

In the MongoDB Manual, see also the Insert Documents tutorial.