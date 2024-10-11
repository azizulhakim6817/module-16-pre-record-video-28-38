/*####<< Epi-1 >>>><<<< Meet MongoDB >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/*####<<< Class-1 >>><<<< introduction to MongoDB >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* @@@<< part-1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
1. Crud Operation 
2. Connect with Node.js 

 */

/* @@@<< Class-1/2 >>>>>>>>>> Mongodb download & Mongodb compass install and Check >>>>>>>>>>>>>>>>>>>>>> 
1. Mongodb download & Mongodb compass install  =>>>>> mongod --version
1. Mongodb compass install                     =>>>>> mongo --version 
3. What is Mongdb?
   => Document oriented database system.
   => Stores data ad JSON-like forment.

4. RDBMS vs MongoDB terms : 
   => Database Name : usersdDB
   => Table -------=> Cellection name: users
   => Document0----=> row
   => fields ------=> colums

5. JSON-like format : 
    {
       name: 'Azizul',
       age: 29,
       language: ["Bangla", "English", "Tamil"]
    }

6. Database : Terminal chcek : 
#. Run the mongoshell => mongo 
#. Database : check :  
   @1. Database check --------------=>show dbs
   @2. create and swich to Database => use database Name
   @3. Check which Database ---------=> db 
   @4. Delete Databse ---------------=> db.dropDatabase()

7. Collection :
   @1. Check ------------------=> show collection
   @2. create colllection ---=> db.createColletion("name")
*/

//### Terminal ????????????? CRUD operation -insert/create ???????????????????????????????????????????????????????
/* 
1. ==> mongosh   => 1.Using MongoDB:          7.0.12
                 => 2. Using Mongosh:          2.2.15 
### 1. Database create & setup :: 
2. ==> help 
3. ==> show dbs -------------------------=> Databses name show
4. ==> use studentsID -------------------=> create Database name
4. ==> db------------------------------- => Database check and who is under the database. 

Delete Database :::: 
1. ==> show dbs -------------------------=> Databses name show
2. ==> use userDB
3. ==> db.dropDatabase()-----------------=> delete Database 
4. ==> db------------------------------- => Database check and who is under the database.

#### 2. Collection : :
1. ==> db.createCollection("studentId") => collections /table ( Databse + collections/tables )
2. ==> db------------------------------- => Database check and who is under the database.
3. ==> show collections -----------------=> Collection name show 

4. ==> users> db.studentID.insertOne({name: "Azizul hakim", age: 25, language: ["Bangla", "English"]})
   --> usersId>
     {
         acknowledged: true,
         insertedId: ObjectId('66ae95a49c17ac7871228fb5')
      }
5. crate user information :::
db.usersId.insertMany([{name: "Shayan", age: 2, language:["Bangla", "hindi"]}, {name: "Ali Ramjan", age: 15, laguage: ["English", "united state"]}])
 */

/*### << class-2 >>>>>>>>>> CRUD || Read documents/ row >>>>>>>>>>>>>>>>>>>*/
/*@@@ 1. Alignment data ???????????????????????????????????????????????????
1. userId>  ==>>  db.usersId.find() 
   => userId> db.usersId.find()  => userId => usersId
2. userId>  ==>>  db.userId.find().pretty()
*/
/*@@@ 2. Searching data // finding data / singal / multiple data >>>>>>>>??
1. userId> db.usersId.find({name: "Shayan"}) */

/* @@@ 3. limit(3) data methods >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
userId>  db.usersId.find({age: 2}).limit(2)
 */

/*### << class-4 >>>>>>>>>> CRUD || update document / row  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/*@@@@ 1. uptade ???????????????????????????????????????????????????????>>>>
        usersId> db.userId({name: "Shayan"}, {$set: {age: 4}})

       =>>>>> userId> db.usersId.update({name: "Shayan"}, {$set: {age: 4}}) 
       =>>>>> userId> db.usersId.find()
*/

/*### << class-5 >>>>>>>>>> CRUD || delete document / row  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/*@@@ 1. Delete ?????????????????????????????????????????????????????
===>  userId> db.usersId.deleteOne({name: "Shayan"})
===>  userId> db.usersId.deleteMany({name: "Shayan"}, {name: "Aziz"})
===>  db.usersId.find().pretty() 
*/

/*########## 16-pro-recod-video- started ################################################################*/

/*@@@<< part-1 >>>><<<< Meet MongoDB ???????????????????????????????????????????? */
/* 
1. MongDB is a document-oriented database.
2. It is a NoSQL databse, meanting it dose not a traditional relation database structur.
3. MongoDB is Schema-less, meaning that you don't need to defind the structure of your data in advance.
4. MongoDB is highly scable and can be used to store large amounts of data.

@@@ Meet MongoDB :
    1. Structure data.
    2. Semi structure data.
    3. Unstructure data.
@@@ NoSQL data : 
    1. No table.
    2. No row.
    3. No complex join.

@@@ Advantages :
    1. Schema-less
    2. Single Object
    3. No complex joins
    4. Deep query-ability
    5. Tuning
    6. Ease of scale-out
    7. Uses internal memory for storing

@@@ Where to Use MongoDB : 
    1. Big data
    2. Content Management and Delivery
    3. Mobile and Socila infrastructure
    4. User Data Management
    5. Data Hub
*/

/*####<< Epi-2 >>>><<<< Basic Terminology & Data Model >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/*@@@<< part-1 >>>><<<< Basic Terminology // Meet MongoDB ???????????????????????????????????? */

/* RDBMS ==>  stands for Relational Database Management System
<------RDBMS---------------------------MongoDB----------->
1. Database----------------------------Databse
2. Table-------------------------------Collection
2. Tuple/row---------------------------Document
3. Column------------------------------Field
4. Table join--------------------------Embedded Document
5. Primary Key-------------------------Default key_id provided by MongoDB itself

4. Embedded Data model: 
1. In this model, you can have (embed) all the related data in a single document.
2. It is also know as de-normalized data model.
*/

/*@@@@ Embedded Details : 

 {
    _id: 13454,
    Employment_Id: "823457",
    Personal_details: {
        First_name: "Azizul",
        Last_name: "Hakim",
        Data_of_Birth: 1997-02-03,
    },
    Contact: {
        email: asisu@gmail.com,
        phone: "0175785788",
    },
    Address: {
        city: "Brahmanbaria",
        Area: "Sarial",
        State: "Aruail"
    }
} 
    
*/

/*@@@@@@  Normalized Data model :
1. In this model, you can refer the sub document in the original document.

{
   _id: "50895-988"
   Emp_id: "857293487"
},

{
   _id: 13454,
    Employment_Id: "823457",
    Personal_details: {
        First_name: "Azizul",
        Last_name: "Hakim",
        Data_of_Birth: 1997-02-03,
},

{
Contact: {
          email: asisu@gmail.com,
          phone: "0175785788",
        }
},
    
{ 
   Address: {
        city: "Brahmanbaria",
        Area: "Sarial",
        State: "Aruail"
    }
}
 */

/*####<< Epi-3 >>>><<<< Data type & Understanding sample Document >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/*@@@<< part-1 >>>><<<< Datatype ????????????????????? */
/* 
1. Stirng(" ")
2. Integer
3. Boolean
4. Double
5. Min/Max keys
6. Arrays
7. Object
8. Null
9. Symbole
10. Data()
*/

/*@@@@ JSON() of Array :

  @@@@@@ _id: ObjectId('66cfcb45302d1bfde9c4ee2e')
       1. _id is a 12 bytes hexa-decimal number
       2. Firs 4 bytes => Current time-stamp
       3. Next 3 bytes => Machine id
       4. Next 2 bytes => Process id
       5. Nest 3 bytes => incrementerl value

{
    _id: DK58432(283457852ck3275)     
    title: iphone-14-pro-max
    tags: ["value", "value", "value"]
    link: 344,
    comments: [
        {
            user: "azizul",
            message: "document writes!",
            datecreate: new Date(2011,1,20),
        },
        {
            user: "azizul",
            message: "document writes!",
            datecreate: new Date(2011,1,20),
        },
    ]
} */

/*####<< Epi-4 >>>><<<< MongoDB Atlas >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/*@@@<< part-1 >>>><<<< MongoDB Atals ????????????????????? */

/* 
1. MongoDB Atlas is a cloud-based database service.
2. That makes it easy to deploy, manage, and scale MongoDB databases.
3. Atlas is a full managed service, so you don't need to worry about the underlying infrastructure.
4. Atlas is available on a varient of cloud providers, including AWS, Azure, and Google cloud Platform.

@@@ MongoDB Atlas : 
    1. https://www.mongodb.com/
    2. create project => new project 
                      => name your project = practice + next + 
                      => project Owner = azizulhakim22@gmail.com + create project
                      => project check = 2 
                      => Cluster Tier : 
                         Storage-512MB - M0-512MB // M2-2GB // M5-5GB
 */

/*####<< Epi-5 >>>><<<< MongoDB Compass >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/*@@@<< part-1 >>>><<<< Compass ????????????????????? */

/* 
1. installl ==> https://www.mongodb.com/try/download/compass
2. Compass to MongoDB Atlas connect ==> mongodb+srv://azizulhakim68178:azizulhakim68178@cluster0.bd9lr.mongodb.net/
3. create Database name => TestUsers
4. create Collection name => user
*/

/*####<< Epi-6 >>>><<<< MongoDB Compass >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/*@@@<< part-1 >>>><<<< Compass ????????????????????? */

/* 
1. compass monde show data => 
   1. document mode data
   2. json mode data 
   3. Table mode data

2. Export collection => exprot the full collection => PC downloaded => json(select) + exprort

3. 
 */

/*####<< Epi-7>>>><<<< MongoDB vs-code extention >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/*@@@<< part-1 >>>><<<< Compass ????????????????????? */

/* 
1. MongoDB extention install (vs-code)
2. vs-code => local add => add connection + connect + MongoDB + 
2. vs-code => MongoDB Atlas add 
   => Cluster + connect + MongoDB for VS-code + Copy link + 
   => VS-code MongoDB extention install + icon MongoDB click +
      add connection + connect + Atlas cluster copy to link past 

3. Atlas cluster connect link =>  mongodb+srv://azizulhakim68178:azizulhakim68178@cluster0.syaab.mongodb.net/
 */

/*####<< Epi-8 >>>><<<< MongoDB vs-code extention / insert/find/create/shwo_database-collection >>>>>>>>>>>>>>> */
/*###<< part-1 >>>><<<< MongoDB VS-code Sitting ????????????????????? */

/*### MongoDB VS-code Sitting .................................
1.  MongoDB extrention go ==> @ext:mongodb.mongodb-vscode
2. Use Default Template For Playground
   Use default template for playground files. 
   => Select  :::::: 

    @@@@ Select the database to use.
    use('mongodbVSCodePlaygroundDB');
    @@@Insert a few documents into the sales collection.
    db.getCollection('sales').insertMany([
    { 'item': 'abc', 'price': 10, 'quantity': 2, 'date': new Date('2014-03-01T08:00:00Z') },
    { 'item': 'jkl', 'price': 20, 'quantity': 1, 'date': new Date('2014-03-01T09:00:00Z') },
    { 'item': 'xyz', 'price': 5, 'quantity': 10, 'date': new Date('2014-03-15T09:00:00Z') },
    { 'item': 'xyz', 'price': 5, 'quantity': 20, 'date': new Date('2014-04-04T11:21:39.736Z') },
    { 'item': 'abc', 'price': 10, 'quantity': 10, 'date': new Date('2014-04-04T21:23:13.331Z') },
    { 'item': 'def', 'price': 7.5, 'quantity': 5, 'date': new Date('2015-06-04T05:08:13Z') },
    { 'item': 'def', 'price': 7.5, 'quantity': 10, 'date': new Date('2015-09-10T08:43:00Z') },
    { 'item': 'abc', 'price': 10, 'quantity': 5, 'date': new Date('2016-02-06T20:20:13Z') },
    ]);

=>  No Select :::: 

3. Mdb: Confirm Run All : 
   ==> select => popup message 
   ==> select no popup message.
   @@@ Show a confirmation message before running commands in a playground.

/*###<< part-1 >>>><<<< Create new Playground /  insert/find/create/shwo_database-collection ?????????? */
/*@@@@ 1. query data finding.................

use("TestTusers")
db.user.find()
*/

/*@@@@ 1. query data finding.................
use("TestTusers")
db.user.findOne({""})
*/

/*@@@@ 2. query data finding.................
use("TestTusers")
db.user.findMany({})
*/

/*@@@@ 3. query data input .................
use("TestTusaer")
db.user.insert([])
db.user.insertOne([])
db.user.insertMany([])
*/

/*@@@@ 4. Create collection .................
use("TestTuser")
db.createCollection(empoyment)
*/

/*####<< Epi-9 >>>><<<< MongoDB Community Server Download / install >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/*###<< part-1 >>>><<<< MongoDB Community Server ????????????????????? */

/* 
1. MongoDB Community Server Download / install => https://www.mongodb.com/try/download/compass
   => Platform => Windows
   => Package => msi

2. Compass => new connection + 
   ==> localhost connect => mongodb://localhost:27017
   ==> connect + Atlas copy link =>  mongodb+srv://azizulhakim68178:azizulhakim68178@cluster0.syaab.mongodb.net/
   ==> vs-code : connect link copy to pase => Atlas cluster : 
       connect link : mongodb+srv://azizulhakim68178:azizulhakim68178@cluster0.syaab.mongodb.net/

3. vs-code // compass Default sitting : 
   1. admin
   2. config
   3. local

4. VS-code connect => conpass local

/*###<< part-2 >>>><<<< js command create Database // Collection. ????????????????????? 
........ 
const database = "TestUsers";
const collection = "user"; 

use("database")
db.createCollection(collection)
*/

/*###<< part-2 >>>><<<< Database Related Methods ????????????????????? */
/*
@@ db.createCollection()
@@ db.collectionName.drop()

1. db.help()
2. db.hostInfo()
3. db.getName()
4. db.getMongo()
5. db.currentOp()
6. db.dropDatabase()
7. db.getCollectionInfos()
8. db.getCollectionNames()
9. db.getLastErrorObj()
10. db.inMaster()
11. db.getReplicationInfo()
12. db.logout()
13. db.printCollectionStats()
14. db.serverBuildInfo()
15. db.serverStatus() 
16. db.shutdownServer()  
17. db.stats()
18. db.version()
19. db.createCollection()
20. db.collectionName.drop()
*/

/*####<< Epi-10 >>>><<<< Database Related Methods >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/*###<< part-1 >>>><<<< Database create / Collection create  ????????????????????? */
/* 
use("sutdentPorfile")
db.createCollection("userID")
*/

/*###<< part-1 >>>><<<< db.help(); ??????? */
/* 
use("passporjwtDB");
db.help();
*/

/*###<< part-2 >>>><<<< db.hostInfo(); ????????? */
/* PC // Laptop Overal Details............
use("passporjwtDB");
db.hostInfo();
*/

/*###<< part-3 >>>><<<< db.getName(); ?????????? */
/* 
use("passporjwtDB");
db.getName();
$$$ Answare : Database name : passporjwtDB
*/

/*###<< part-4 >>>><<<< db.getMongo(); ?????????? */
/* 
use("passporjwtDB");
db.getMongo();
$$$ Ans :Current connected vs-code + mongoDB connect :  
"mongodb://localhost:27017/?appName=mongodb-vscode&directConnection=true&serverSelectionTimeoutMS=2000"
*/

/*###<< part-5 >>>><<<< db.currentOp() ????? */
/* 
use("passporjwtDB");
db.currentOp()
*/

/*###<< part-6 >>>><<<< db.dropDatabase() ????? */
/* 
use("NEW_DATABASE_NAME")
db.dropDatabase()
*/

/*###<< part-7 >>>><<<< db.getCollectionInfos() ??????? */
/* 
use("passporjwtDB")
db.getCollectionInfos()
*/

/*###<< part-8 >>>><<<< db.getLastError()?????? */
/* 
use("passporjwtDB")
db.getLastError()
*/

/*###<< part-9 >>>><<<< db.getLastErrorObj() ?????????? */
/* 
use("passporjwtDB")
db.getLastErrorObj()
*/

/*####<< Epi-11 >>>><<<< Database Related Methods >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

/*###<< part-10 >>>><<<< db.isMaster() ????????????????????? */
/* 
use("passporjwtDB")
db.isMaster()
*/

/*###<< part-11 >>>><<<< db.getReplicaionInfo() ?????*/
/* 
use("passporjwtDB")
db.getReplicaionInfo()
*/

/*###<< part-13 >>>><<<< db.listCommands() ????? */
/* 
use("passporjwtDB")
db.listCommands()
*/

/*###<< part-14 >>>><<<< db.logout() ??? */
/* 
use("passporjwtDB")
db.logout()
*/

/*###<< part-14 >>>><<<< db.printCollectionStats() ????????*/
/* 
use("passporjwtDB")
db.logout()
*/

/*####<< Epi-13 >>>><<<< Database Related Methods >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

/*###<< part-15 >>>><<<< db.serverBuiltInfo() ??????? */
/*###<< part-16 >>>><<<< db.serverStatus() ??????? */
/*###<< part-17 >>>><<<< db.shutdownServer() ???????? */
/*###<< part-18 >>>><<<< db.stats() ?????? */
/*###<< part-15 >>>><<<< db.version() ?????? */

/*####<< Epi-13 >>>><<<< insertOne() query >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/*###<< part-1 >>>><<<< insertOne() ?????????????? */
/* 
db.userID.insertMany(
    {"name" : "Jasim"},
)
*/

/*####<< Epi-14 >>>><<<< insertMany() query >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/*###<< part-1 >>>><<<< insertMany()) ?????????????? */
/* 
db.userID.insertMany(
  [
    {"name" : "Jasim"},
    {"title": "He is a stutent!"},
  ]
)
*/

/*####<< Epi-15 >>>><<<< find() query >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/*###<< part-1 >>>><<<< insertMany()) ?????????????? */
/* 
db.userID.find()
*/

/*####<< Epi-16 >>>><<<< Projection >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/*###<< part-1 >>>><<<< _id => not difind ?????????????? 
db.userID.find(
  {},
  {"_id": 0, salary: 9,}
)
$$ Answer :.......
  {
    "name": "Salam mia",
    "designtion": "Asst Engineer",
    "city": "Dhaka"
  },


###<< part-2 >>>><<<< _id, salary => finding ?????????????? 
db.userID.find(
  {},
  {_id: 1, salary: 1,}
)
$$ Answer: ..........
  {
    "_id": {
      "$oid": "66d5da17aab36a9929a44091"
    }
  },
*/

/*####<< Epi-17 >>>><<<< Comparison Query Operator >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* 
1. $eq => Equal 
2. $lt => less Then 
3. $lte => less Then Equal
4. $gt => Geater Then
5. $gte => Geater Then Equal
6. $ne => Not Equal
7. $in = in Operator
8. $nin => Not in Operator
*/
/* ###<< part-1 >>>> 01<<<< salary:{$eq: 30000} ??????????????*/

/* db.userID.find(
   {
     salary:{$eq: 30000} 
   }
  )
   
$$$ Answer: ...300000 => 30000.......
[
  {
    "_id": {
      "$oid": "66d6c9a2a8623185153ad6f8"
    },
    "name": "Salam mia",
    "designtion": "Asst Engineer",
    "salary": 30000,
    "city": "Dhaka"
  }
]

/* ###<< part-2 >>>>04<<<< salary:{$gt: 30000} ??????????????
salary:{$gt: 30000}

$$$ Answer:............
40000, 50000, 34000 
(Geater then results)

/* ###<< part-3 >>>><<<< salary:{$gte: 30000} ??????????????
salary:{$gte: 30000}

$$$ Answer:............
30000, 40000, 50000, 34000 
(Geater then Equal results)

/* ###<< part-4 >>>><<<< salary:{$lt: 30000} ??????????????
salary:{$gte: 30000}

$$$ Answer:............
27000, 3000, 5000
(Less then )

/* ###<< part-5 >>>><<<< salary:{$lte: 30000} ??????????????
salary:{$gte: 30000}

$$$ Answer:............
30000, 27000, 2000, 5000
(Less then Equal )

/* ###<< part-6 >>>><<<< salary:{$lte: 30000} ??????????????
salary:{$gte: 30000}

$$$ Answer:............
30000, 27000, 2000, 5000
(Less then Equal )

/* ###<< part-7 >>>><<<< salary:{$ne: 30000} ??????????????
salary:{$ne: 30000}

$$$ Answer:............
30000 (Not => Not Equal within all show)
( Not Eual )
 
/* ###<< part-7 >>>><<<< salary: { $in: [30000, 40000] }, ??????????????
db.userID.find({
  salary: { $in: [30000, 40000] },
});

$$$ Answer:....Match number........
30000, 40000 ( in ==> into )
( Not Eual )

/* ###<< part-8 >>>><<<< salary: { $nin: [30000, 40000] }, ??????????????
db.userID.find({
  salary: { $nin: [30000, 40000] },
});

$$$ Answer:......Not match number......
30000, 40000 ( nin ==> into )
( Not in )

*/

/*####<< Epi-18 >>>><<<< Comparison Query Operator >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* 
1. $and => Longical AND Operator
2. $or => Logincal OR Operator
3. $not => Logical NOT Operator
4. $nor => Logical Operator
*/

/* @@@@<< part-1 >>>>> $and => single/multiple data check ???????????????????
db.userID.find({
  $and: [
    {salary: {$eq: 27000}},
    {name: {$eq: "Sorna Akhter"}}
    ]
    })
    
    */

/* @@@@<< part-2 >>>>> $or => any one data check ???????????????????*/
/* 
db.userID.find({
  $or: [
    {salary: {$lte: 2000}},
    {name: {$eq: "Sorna Akhter"}}
  ]
})
*/

/* @@@@<< part-2 >>>>> $or => any one data check ???????????????????*/
/* 
db.userID.find({
  $not: [{ salary: { $gte: 55000 } }],
});
*/

/*####<< Epi-19/20 >>>><<<< Element query operator >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* 
element-query.js  //new file added....................
*/

/*####<< Epi-21/25 >>>><<<< Evaluation query operator >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* 
evaluation-query.js  //new file added....................
*/

/*####<< Epi-26 >>>><<<< sort-limit-distinct-row-count.js >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* 
sort-limit-distinct-row-count.js //new file added....................
*/

/*####<< Epi-27 >>>><<<< Delete One and Many >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/*@@@@<<< part-1 >>> Delete one methods ???????????????????
use("studentID");
db.userID.deleteOne({_id: ObjectId("66d5da17aab36a9929a44090")});

$$$ Answer : .........
    {
      "acknowledged": true,
      "deletedCount": 1
    }
*/

/*@@@@<<< part-2 >>> Delete Many methods ???????????????????
use("studentID");
db.userID.deleteOne({
  salary: { $in: [33000, 40000] },
});

$$$ Answer : .........
    {
      "acknowledged": true,
      "deletedCount": 1
    }
*/

/*####<< Epi-28 >>>><<<< update query >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>. */

/*@@@@<<< part-1 >>>  update (name) query change ??????????????????? 
=>>>>> userId> db.usersId.update({name: "Shayan"}, {$set: {age: 4}}) 
=>>>>> userId> db.usersId.find()

/*@@@@<<< part-1 >>>  update (_id) query change ??????????????????? 
db.userID.update(
  { _id: ObjectId("66d6c9a2a8623185153ad6fa")},
  { $set: { name: "sorn" } }
);
db.userID.find({});
*/
