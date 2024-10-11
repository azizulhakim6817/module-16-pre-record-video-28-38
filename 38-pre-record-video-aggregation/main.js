/*####<< Epi-1 >>>><<<< MongoDB query writinn introduction >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/*@@@@<<< part-1 >>> Delete one methods ???????????????????*/
/* 
1. To become a master of MoongDB.
2. Enabale us to write deep query.
3. To manage relational data.
4. To learn database related problem solving.
5. To migrate SQL Database into MongoDB.

@@@@ Tools => MongoDB compass
@@@@ Tools => Studio 3T  
      => Studio 3T Free for MongoDB
*/

/*####<< Epi-2 >>>><<<< Studio 3T Free for MongoDB>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/*@@@@<<< part-1 >>> introduction // Studio 3T  ???????????????????*/

/*####<< Epi-3 >>>><<<< insert One // insert Many >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/*@@@@<<< part-1 >>> insert One  ???????????????????*/
/* 
1. Datatabase create => use employee
1. Datatabase delete => db.dropDatabase("employee")

2. collection create ..........................
   use 16-preRecordVideo-38
   db.createCollection("employee")

2. collection delete ..........................
  use 16-preRecordVideo-38
  db.CollectionName.drop("employee")

3. collection click -> intillShell open -> data json format add 
4. F5 enter => data save 

5. @@@ insert // insertOne .......data inpu.....F5.............
use 16-preRecordVideo-38
db.employee.insert({
    name: "Azizul hakim",
    roll: 3454,
    city: "Dhaka",
    salary: 4000
})  

6. db.employee.find({})  => all data find

@@@@<<< part-1 >>> insert One  ??????----F5 ---?????????????
7. @@@ insertMany data inpu........F5..........
use 16-preRecordVideo-38
db.employee.insertMany([
   {"name" : "Azizul hakim",
    "roll" : 3902,
    "city" : "Dhaka",
    "salary" : "50,000"
    },
      {"name" : "Jowal mia",
    "roll" : 4309,
    "city" : "Dhaka",
    "salary" :"4,0000"
    },
])*/

/* #### 8. update methods.................................................................
db.employee.update({"name" : "Azizul hakim"}, {$set: {salary : "50000"}}) 
*/

/*####<< Epi-4 >>>><<<< select all data find >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* 
@@@ db.employee.find()
@@@ db.employee.aggregate([])
*/

/*####<< Epi-5 >>>><<<< Row counts //Doument counts >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* 
@@@ db.employee.find({}).count("total")
@@@ db.employee.aggregate([{$count:"total"}])
*/

/*####<< Epi-6 >>>><<<< Sorting >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* 
@@@ aggregate([]) methode........................
1. Asending $sort{} => 1,2,3,4,5,6...................
   => db.employee.aggregate([{$sort:{salary: 1}}])
1. Dsending $sort{} => 5,4.3.2.1..................
   => db.employee.aggregate([{$sort:{salary: -1}}]) 
 
@@@ find() methode........................
1. Asending $sort{} => 1,2,3,4,5,6...................
   => db.employee.find().sort({salary: 1})
2. Dsending $sort{} => 5,4.3.2.1..................
   => db.employee.find().sort({salary: -1})
 */

/*####<< Epi-7 >>>><<<< limit // find (show data) >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* 
@@@ limite methods.......................................
1. find().limit(1) => 1 Data show browser.........
=> db.employee.find().limit(1)

2. aggregate([{$limit:1}]) => 1 Data show browser.........
=> db.employee.aggregate([{$limit:1}])
 */

/*####<< Epi-8 >>>><<<< limit // find first--last >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* 
@@@ {$sort: {_id: 1 }},{$limite:2} methods.......................................
1. db.employee.find().sort({_id: -1}).limit(1) 1 Data show browser.........
   => db.employee.find().sort({_id: 1}).limit(1)
   => db.employee.find().sort({_id: -1}).limit(1)

2. db.employee.aggregate([{$sort:{salary: 1}},{$limit: 1}]) => 1 Data show browser.........
   @@ Asending.....................................................
      => db.employee.aggregate([{$sort:{salary: 1}},{$limit: 3}])
   @@ Dessending.......................................................
      => db.employee.aggregate([{$sort:{salary: 1}},{$limit: 1}])
 */

/*####<< Epi-9 >>>><<<< slelect by match collection >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* 
#### 1. @@@@ Aggegate[{}] => More data show ....
@@@@@ $gt => Below data => 450000, 50000, 660000..
=> db.employee.aggregate([{$match: {salary: {$gt: 40000}}}])

@@@@  $lt => Download data .300000, 340000.................
=> db.employee.aggregate([{$match: {salary: {$lt: 40000}}}])

@@@ $lte =>  self or same more data show data 50000, 400000........
db.employee.aggregate([{$match: {salary: {$lte: 50000}}}])

@@@ $gte => self or same more data show data 50000, 600000.........
db.employee.aggregate([{$match: {salary: {$gte: 50000}}}])


#### 2. @@@@ find() => More data show ......................
=> db.employee.find({salary: {$gt: 40000}})
 */

/*####<< Epi-10 >>>><<<< Multi-condition >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
1. multi-condition.................
   => db.employee.aggregate([{$match: {salary: {$gt: 40000}}}, {$match: {city: "Dhaka"}}])

2. Nastings..$and // $or => ...2 condition => salary // city.......................
   => db.employee.aggregate([{$match: {$and : [{salary: {$gt: 40000}}, {city: "Dhaka"}]}}])
*/

/*####<< Epi-11 >>>><<<< $and // $or => find() >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
1. find()..=> 2 match condition...............
   => db.employee.find({},{$and: [{salary: {$gt: 40000}}, {city: "Dhaka"}]})
   
2. Have data find show ....................
   => db.employee.find({$or: [{salary: {$gt: 40000}}, {city: "Dhaka"}]})
*/

/*####<< Epi-12 >>>><<<< select Like match >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
1.Aggegate => Like =>  name => Azizul hakim ...............
   => db.employee.aggregate([{$match: {name: /A/}}])
   => db.employee.aggregate([{$match: {name: /m/}}])

1.Aggegate => Table name =>  roll =>  /483/ ....................
   => db.employee.aggregate([{$match: {roll:/5723/}}])
  
2. find() -> Table name =>  roll =>  /483/ ...................
   => db.employee.find({roll:/5723/})
   => db.employee.find({name:/Az/})
*/

/*####<< Epi-13 >>>><<<< select by match in >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 

1. find() methods.................................................................
   => db.employee.find({name: {$in : ["Azizul hakim", "Hassn"]}})
2. Aggragate method..........................................................
   => db.employee.aggregate([{$match: {name: {$in: ["Azizul hakim"]}}}])
*/

/*####<< Epi-14 >>>><<<< projection >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

1. find() methods.................................................................
  => db.employee.find({}, {_id: 1, name: 1, city: 1, salary: 1})

2. Aggragate method..........................................................
   => db.employee.aggregate([{$project: {_id: 1, name: 1, city: 1, salary: 1}}])
*/

/*####<< Epi-15 >>>><<<< skip // limit  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 

1. find() methods.................................................................
  => db.employee.find({}).skip(1).limit(1)

2. Aggragate => First data show........................................................
   => db.employee.aggregate([{$skip: 0}, {$limit: 1}])

2. Aggragate => First (Skip-1) 2 data show........................................................
   => db.employee.aggregate([{$skip: 1}, {$limit: 1}])
*/

/*####<< Epi-16 >>>><<<< Grop by name >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
@@@ 1. _id of Group => 
2. Aggragate method ==> aggregate([{$group: {_id: "$city // name // salary"}}])..........
   1. => db.employee.aggregate([{$group: {_id: "$city"}}])

   ---> Answare : {
    "_id" : "Dhaka"
}

2.  db.employee.aggregate([{$group: {_id: "$name"}}])
  ----> Answare : {
    "_id" : "Azizul hakim"
   }
   {
      "_id" : "Jowal mia"
   }
      
*/

/*####<< Epi-17 >>>><<<< Group by sum >>> >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

1. Aggragate method.....sum.........designation............................................
   => db.employee.aggregate([{$group: {_id: "$designation", total: {$sum: "$salary"}}}])

----> Answare : {
    "_id" : "Sr. engineer",
    "total" : NumberInt(115000)
}
{
    "_id" : "engineer",
    "total" : NumberInt(220000)
}

2. Aggragate method.....sum......city...............................................
=> db.employee.aggregate([{$group: {_id: "$designation", total: {$sum: "$salary"}}}])

   ----Answare : {
    "_id" : "Dhaka",
    "total" : NumberInt(335000)
}
*/

/*####<< Epi-18 >>>><<<< Group by Avarage => avg >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
1. Aggragate method.......avg...................................................
   => db.employee.aggregate([{$group: {_id: "$city", avg: {$avg: "$salary"}}}])
   => db.employee.aggregate([{$group: {_id: "$designation", avg: {$avg: "$salary"}}}])
 
   ----Answare : {
    "_id" : "Dhaka",
    "avg" : 47857.142857142855
}

*/

/*####<< Epi-19 >>>><<<< Group by Max & Min >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
1. Aggragate method.............................................
   => db.employee.aggregate([{$group: {_id: "$city", max: {$max: "$salary"}}}])
     
   ---- Answare : {
    "_id" : "Kulna",
    "max" : NumberInt(65000)
}

2. Aggragate method.............................................
   => db.employee.aggregate([{$group: {_id: "$city", mni: {$min: "$salary"}}}])
     
   ---- Answare : {
    "_id" : "Kulna",
    "min" : NumberInt(25000)
}
*/

/*####<< Epi-20>>>><<<< Without Group by sum -- avg - max - min ><<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>> 
1. Aggragate method......min... _id: 0 .............................
   => db.employee.aggregate([{$group: {_id: 0 , min: {$min: "$salary"}}}])

    ----Answare : {
    "_id" : 0.0,
    "max" : NumberInt(25000)
}

2. Aggragate method......max... _id: 0 .............................
   => db.employee.aggregate([{$group: {_id: 0 , max: {$max: "$salary"}}}])

   ----Answare : {
    "_id" : 0.0,
    "max" : NumberInt(70000)
}

3. Aggragate method......avg... _id: 0 .............................
   => db.employee.aggregate([{$group: {_id: 0 , avg: {$avg: "$salary"}}}])

   ----Answare : {
    "_id" : 0.0,
    "avg" : 48909.09090909091
}

3. Aggragate method......total + sum... _id: 0 .............................
   => db.employee.aggregate([{$group: {_id: 0 , total: {$sum: "$salary"}}}])

   ----Answare : {
    "_id" : 0.0,
    "total" : NumberInt(538000)
}

*/

/*####<< Epi-21 >>>><<<< Group by multiple >>>>>>>>>>>>>>>>><<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>> 
1. Aggragate method...... city............................. 
    => db.employee.aggregate([{$group: {_id:"$city"}}]) 

2. Aggragate method......_id .. designation.............................
    => db.employee.aggregate([{$group: {_id: {designation: "$designation"}} }])
    ------Answare : {
    "_id" : {
        "designation" : "engineer"
    }
   }

3. Aggragate method......_id .. designation.....city........................
   => db.employee.aggregate([{$group: {_id: {designation: "$designation",city: "$city" }} }])
   ---Answare : {
    "_id" : {
        "designation" : "engineer",
        "city" : "Rungpur"
      }
    }

4. Aggragate method......_id .. designation.....city....min/max/avg.. sum.. salary....................
    => db.employee.aggregate([{$group: {_id: {designation: "$designation",city: "$city" }, nim: {$sum: "$salary"}} }])
    => db.employee.aggregate([{$group: {_id: {designation: "$designation",city: "$city" }, nax: {$max: "$salary"}} }])


    ----Answare : {
    "_id" : {
        "designation" : "engineer",
        "city" : "Kulna"
    },
    "nim" : NumberInt(90000)
}

5. Aggragate method......_id .. designation.....avg... salary....................
=> db.employee.aggregate([{$group: {_id: {designation: "$designation",city: "$city" }, avg: {$avg: "$salary"}} }])
{
    "_id" : {
        "designation" : "engineer",
        "city" : "Kulna"
    },
    "avg" : 45000.0

6. Aggragate method......_id .. max, min, sum.....avg... salary....................
db.employee.aggregate([
{$group: 
    {_id:
         {designation: "$designation"
             ,city: "$city" }, 
             total: {$sum: "$salary"},                  
             max: {$max: "$salary"},          
             min: {$min: "$salary"},           
             avg: {$avg: "$salary"}
             } 
    }       
 ])

 ===== Answer :  {
    "_id" : {
        "designation" : "Sr. engineer",
        "city" : "Dhaka"
    },
    "total" : NumberInt(115000),
    "max" : NumberInt(55000),
    "min" : NumberInt(30000),
    "avg" : 38333.333333333336
}
*/

/*####<< Epi-22 >>>><<<< lookup by operator >>>>>>>>>>>>>>>>><<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>> 
1. Product..... ............................. 
{
    "_id" : ObjectId("67081b9c25cbc064e1072f8d"),
    "name" : "TV-21 ",
    "price" : "340000",
    "unit" : "inch",
    "Details" : "LED TV",
    "createData" : "10/11/24",
    "ProductID" : "5784937",
    "categoryID" : "1568234"
}

2. brands................................. 
{
    "_id" : ObjectId("670819ab25cbc064e1072f8a"),
    "name" : "LG",
    "createData" : "10/11/24",
    "brandID" : "5784937"
}

3. categories..... ............................. 
{
    "_id" : ObjectId("670819ab25cbc064e1072f8a"),
    "name" : "LG",
    "createData" : "10/11/24",
    "categoryID" :  "1568234"
}

4. 

*/

/*####<< Epi-23 >>>><<<< lookup join operator >>>>>>>>>>>>>>>>><<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>> 
1. Aggragate method...... $lookup.............................
  db.products.aggregate([
     {$lookup: {from: "categories", localField: "categoryID", foreignField: "categoryID", as: "Catagories"}}
   ])
   
2. Aggragate method...... $lookup.............................
   db.products.aggregate([
      {$lookup: {from: "categories", localField: "categoryID", foreignField: "categoryID", as: "Catagories"}},
      {$lookup: {from: "brands", localField: "brandID", foreignField: "brandID", as: "Brands"}}
  ])
*/

/*####<< Epi-24 >>>><<<< facet operator >>>>>>>>>>>>>>>>><<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
1. Aggragate method...... $facet // $count............................ 
db.products.aggregate([
 {
   $facet: {
      "Total": [{$count: "toatal"}],
       "data": []
   }
   }

2. Aggragate method...... $facet // $count.// brandID // categoryID...... 
       db.products.aggregate([
 {
   $facet: {
       "Total": [{$count: "toatal"}],
      "data": [],
      "LG": [{$match: {"brandID": "5784937"}}],
       "TV": [{$match: {"categoryID": "1568234"}}]
   }
 }

   */

/*####<< Epi-25 >>>><<<< Projection after join >>>>>>>>>>>>>>>>><<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>> 
1. Aggragate method...... $Project............................ 
   db.products.aggregate([
      {$lookup: {from: "categories", localField: "categoryID", foreignField: "categoryID", as: "Catagories"}},
      {$lookup: {from: "brands", localField: "brandID", foreignField: "brandID", as: "Brands"}},
      
    {  $project: {
          _id: 0,
          ProductID: 1,
          categoryID: 1,
          ProductName: "$name",
          price: {$toDouble: "$price"},
          unit: 1,
          Details: 1,
          createData: 1,
          categoryName : {$first: "$Catagories.name"},
          brandName : {$first: "$Brands.name"}
      }}
  ])

*/

/*####<< Epi-27 >>>><<<< Add new field with result >>>>>>>>>>>>>>>>><<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>> 
@@@ {$toDouble:("$price") => Number converts 
@@@ {$toString:("$price") => string
@@@ {$toDate:("$price") => date
@@@ {$toDecimail:("$price") => decimail
@@@ {$toObject:("$price") => Object
@@@ {$toLower:("$price") => lower
@@@ {$toInt:("$price") => Number converts 
 

1. Aggragate method......{$addFields ....{$match......................... 
db.products.aggregate([
{$match :{Details: "LED TV"}},
{$addFields: {"Propular": "Propular"}}
])

---Answers :  {
    "_id" : ObjectId("67081b9c25cbc064e1072f8d"),
    "name" : "TV-21 ",
    "price" : "340000",
    "unit" : "inch",
    "Details" : "LED TV",
    "createData" : "10/11/24",
    "ProductID" : "123854",
    "categoryID" : "1568234",
    "brand" : "5784937",
    "brandID" : "5784937",
    "Propular" : "Propular"
} 

2. Aggragate method......{$addFields ....{$match => price + add = new field + add......
db.products.aggregate([
{$match :{Details: "LED TV"}},
{$addFields: {"Propular": {$toDouble:("$price")}}}
])

----Answers : "Propular" : 340000.0
*/

/*####<< Epi-28 >>>><<<< Arithmetic aggregation operator >>>>>>><<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>> 
1.Arithmetic aggregation operator...................................
    1. $abs => absolute value
    1. $add => + // data + data 
    2. $cell => smallest integer then or equal to numbers
    3. $divide => /
    4. $exp   =? 
    5. $floor
    6. $in
    7. $log // log10
    8. $mod
    9. $multiply
    10. $pow
    11. $sqrt
    12. $subtract
    13. $trunc

2. String() Aggregate 0peraton...............

    15. $split
    16. $toLower
    17. $toUpper
    18. $substrBytes
    19. $indexOfBytes
    20. $indexOfCP
    21. $contcat

*/

/*####<< Epi-29 >>>><<<< Uses =>  Arithmetic aggregation operator >>>>>>><<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>> 
1. Aggragate method...... $add............................ 
db.products.aggregate([
{$match :{Details: "LED TV"}},
{$addFields: {"Propular": {$add:[2,2,3]}}}
])

---Answer : "Propular" : 7.0


2. Aggragate method...... $divide............................ 
db.products.aggregate([
{$match :{Details: "LED TV"}},
{$addFields: {"Propular": {$divide:[20,4]}}}
])

---Answer : "Propular" : 5.0

3. Aggragate method...... $multiply............................ 
db.products.aggregate([
{$match :{Details: "LED TV"}},
{$addFields: {"Propular": {$multiply:[20,4]}}}
])

---Answer : "Propular" : 80.0

4. Aggragate method...... $sqrt............................ 
{$addFields: {"Propular": {$sqrt:[20]}}}

---Answer : "Propular" : 4.47213595499958

5. Aggragate method...... $pow............................ 
{$addFields: {"Propular": {$pow:[10,2]}}}

---Answer : "Propular" : 100.0

6. Aggragate method...... $pow............................ 
{$addFields: {"Propular": {$mod:[10,3]}}}

---Answer : "Result " : 1.0

7. Aggragate method...... $toString............................ 
{$addFields: {"Result ": {$toString:[10]}}}

---Answer :"Result " : "10"

*/

/*####<< Epi-30 >>>><<<< String() aggregate operators >>>>>>>>><<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>> 
2. String() Aggregate 0peraton...............
    15. $split
    16. $toLower
    17. $toUpper
    18. $substrBytes
    19. $indexOfBytes
    20. $indexOfCP
    21. $contcat
    
*/

/*####<< Epi-31 >>>><<<< Uses =>  String() aggregate operators >>>>>>><<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>> 
1. Aggragate method........$split......................... 
db.products.aggregate([
{$match :{Details: "LED TV"}},
{$addFields: {"Results": {$split:["$name", " "]}}}
])

----- Answers :   "Results" : [
        "TV-21",
        ""
    ]

2. Aggragate method........$split......................... 
db.products.aggregate([
{$match :{Details: "LED TV"}},
{$addFields: {"Results": {$split:["$name", " "]}}}
])

----- Answers :   "Results" : [
        "TV-21",
        ""
    ]

3. Aggragate method........$toUpper......................... 
db.products.aggregate([
{$match :{Details: "LED TV"}},
{$addFields: {"Results": {$toUpper:["$name"]}}}
])

----- Answers : "Results" : "LG TILIVISION IN BANGLADESH "

4. Aggragate method........$toLower......................... 
{$addFields: {"Results": {$toLower:["$name"]}}}

----- Answers : "Results" : "lg tilivision in bangladesh "
}
*/

/*####<< Epi-32 >>>><<<< Data aggregate operators >>>>>><<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>> 
1. Aggragate method...... .............................
    1. $dayOfYear
    2. $dayOfMonth
    3. $dayOfWeek
    4. $year
    4. $week
    6. $hour
    7. $minute
    8. $second 
    9. $millisecond
    10. dateToString

*/

/*####<< Epi-33 >>>><<<< Uses => Data aggregate operators >>>><<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>> 
1. Aggragate method........dayOfYear.........................
   db.products.aggregate([
   {$match :{unit : "inch"}},
   {$addFields: {"Result": {$dayOfYear: "$createData"}}}
   ])
----- Answers : "Results" : NumberInt(332)

2. Aggragate method.......dayOfMothe..........................
   {$addFields: {"Result": {$dayOfMothe: "$createData"}}}
   {$addFields: {"Result": {$Mothe: "$createData"}}}
   ])
----- Answers : "Results" : NumberInt(2)

3. Aggragate method.......year..........................
   {$addFields: {"Result": {$$year: "$createData"}}}
   ])
----- Answers : "Results" : NumberInt(1)

4. Aggragate method.......dayOfMinute..........................
   {$addFields: {"Result": {$dayOfMinute: "$createData"}}}
   ])
----- Answers : "Results" : NumberInt(21)

2. Aggragate method.......$week..........................
   {$addFields: {"Result": {$week: "$createData"}}}
   {$addFields: {"Result": {$Month: "$createData"}}}
   {$addFields: {"Result": {$dateToString: "$createData"}}}
   {$addFields: {"Result": { $second: "$createData"}}}
   ])
----- Answers : "Results" : NumberInt(2)

*/

/*####<< Epi-34 >>>><<<< Comparison Aggregation Operator >>>>>>>>>>><<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>> 
1. Aggragate method......Comparison ............................
   1. $eq
   2. $gt
   3. $gte
   4. $lt
   5. $lte
   6. $ne
   
   1. {$addFields: {"Result" : "hello"}}
*/

/*####<< Epi-35 >>>><<<< Uses => Comparison Aggregation Operator  <<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>> 
1. Aggragate method..................................
   1. $eq
   2. $gt
   3. $gte
   4. $lt
   5. $lte
   6. $ne
 */

/*####<< Epi-36 >>>><<<< boolean operators >>>>>>>>>>>>>>>>><<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>> 
1. Aggragate method.................................
1. Aggragate method.................................
1. Aggragate method.................................
1. Aggragate method.................................
1. Aggragate method.................................
1. Aggragate method.................................
1. $and
2. $or
3. $not
4. $nor

db.products.aggregate([
   {$addFields: {"Result" : {
      $and: [
         {$eq: ["$salary", "30000"]},
         {$eq: ["$city", "Dhaka"]}
         ]
         }}}
         ])
         
         -------Answer : "Result" : false
         
         
  1. Aggragate method........$not.........................
  db.products.aggregate([
  {$addFields: {"Result" : {
    $not: [
    {$eq: ["$salary", "34000"]},
    ]
}}}
])

-------Answer : "Result" : true

*/

/*####<< Epi-37 >>>><<<< Practices to write nongo quries >>><<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>> 
  1. Projections
  2. projection before // after
  3. output description
  4. logics // calculations
  5. Datatabase 
  6. business logic
  7. server 
  8. database

  9. projection  =>  switch - case --beak --then -- default 
  10. projection => if -- else if -- else -- then 
  11. 

*/

/*####<< Epi-38 >>>><<<< Conditional aggregate Operator >>>>>if..then...else >>>>>>>>>>>>>>>>>>>>>>  
    1. $cond operator........... 
       => {$cond: {if: <boolean-expression>, then: <true-case>, else: <false-case> }}
      
2. $switch ....case...then.. default...................

3. 1. Aggragate method..........if..then...else......................
    db.employee.aggregate([
      {$project: { SalaryMargin : 
      {$cond: {if:{$lte: ["$salary", 30000]}, then: "Low salary", else: "Standard salary"}},
      salary: 1,
      city:1
}}
])

------Answer-1 : {
    "_id" : ObjectId("6706eab37f880f3d42072f8e"),
    "city" : "Dhaka",
    "salary" : NumberInt(30000),
    "SalaryMargin" : "Low salary"
}

------Answer-2: {
    "_id" : ObjectId("6705c0ab1c0f5baca9072f90"),
    "city" : "Dhaka",
    "salary" : NumberInt(40000),
    "SalaryMargin" : "Standard salary"
}
*/

/* 
@@@@ How do $switch catch-then-default create & setup 
2. $switch ....case...then.. default...................

*/
