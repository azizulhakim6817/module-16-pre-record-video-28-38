/*####<< Epi-21 >>>><<<< Evaluation query operator >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* 
1. $expr :
   => Allows use of aggregation expressions with the query language.

2. $jsonSchema : 
   => Validate document against the given JSON Schema.

3. $mod : 
   => Performs module operation on the value of a field and select document with a specified result.

4. $regex :  v.v.v
   => Select document where values match a specified regular expression.

5. $text : 
   => Performs text search.

6. $where :  v.v.v
   => Matches document that satisfy a javascript expression.
*/

/*####<< Epi-21 >>>><<<< Evaluation query operator >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* @@@@<< part-1 >>>>> $expr:{$gt: ["$salary", "$spent"]} ???????????????????*/
/* 
use("studentID");
db.userID.find({
  $expr:{$gt: ["$salary", "$spent"]}
});

$$ Answer : .$gt/lt......
($salary)30000 > ($spent)400 => 30000
*/

/*####<< Epi-22 >>>><<<< Evaluation query operator >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* @@@@<< part-1 >>>>>  salary: {$mod: [2,0]} ???????????????????*/
/* 
use("studentID");
db.userID.find({
  salary: {$mod: [2,0]}
});

$$ Answer : .30000/2 => 0......
(salary)30000 / 4 = result = 0
*/

/*####<< Epi-23 >>>><<<< Evaluation query operator >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* @@@@<< part-1 >>>>> name: {$regex: "A"} ???????????????????*/
/* 
use("studentID");
db.userID.find({
 name: {$regex: "A"}
});

$$ Answer : find => name = "A" => A list all name findable......
*/

/*####<< Epi-24 >>>><<<< Evaluation query operator >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
//@@ comparisom operator show work => gt/lt/gte/lte/not/in....
/* @@@@<< part-1 >>>>>$where: "this.salary==/</>/this.spent", ???????????????????*/
/* 
use("studentID");
db.userID.find({
  $where: "this.salary==/</>/this.spent",
});

$$ Answer : ....$where: "this.salary==/</>/this.spent",............
*/
