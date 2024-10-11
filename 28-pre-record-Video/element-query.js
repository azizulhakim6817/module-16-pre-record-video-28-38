/*####<< Epi-19 >>>><<<< Element query operator >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* 
1. $exists : Matches document that have the specified field.
2. $type : Selects document if a field is of the specified type.

Type-----------------------------Number----------------------Atlas--------------------------> 
Double-----------------------------1--------------------------"double"------------------------>
String-----------------------------2--------------------------String------------------------>
Object-----------------------------3--------------------------Object------------------------>
Array------------------------------4--------------------------Array------------------------>
Binary Data------------------------5--------------------------binData------------------------>
ObjectId---------------------------7--------------------------ObjectId------------------------>
Boolean----------------------------8--------------------------bool------------------------>
Date-------------------------------9--------------------------"date"------------------------>
Nul--------------------------------10--------------------------"null"------------------------>
Regular expression-----------------11--------------------------"regex"------------------------>
32-bit integer----------------------16--------------------------"int"------------------------>
Timestamp---------------------------17--------------------------"timestamp"------------------------>
64-bitinteger -----------------------18--------------------------"long"------------------------>
Decimal128-----------------------------19--------------------------decimal------------------------>
*/

//@@@<<< part-1 >>>>>>>>> $exists : Matches document that have the specified field.????????????
/* 1. $exists : Matches document that have the specified field.
use("studentID");
db.userID.find({
  city: {$exists: true}
});

$$$ Answer : all city show data
*/

//@@@<<< part-2 >>>>>>>>> $exists : Matches document that have the specified field.????????????
/* 
use("studentID");
db.userID.find({
  designtion: { $exists: false },
});

$$$ Answer : discription data is not find
*/

/*####<< Epi-20 >>>><<<< Element query operator >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

/* 2. $type : Selects document if a field is of the specified type.
use("studentID");
db.userID.find({
salary:{$type:2}  //String("34000")
});

$$$ Answer : ......................
[
  {
    "_id": {
      "$oid": "66d80d115fb6ef9c3393ea2c"
    },
    "name": "Alal uddin",
    "description": "director-2",
    "salary": "34000",
    "city": "Dhaka"
  }
]
*/
