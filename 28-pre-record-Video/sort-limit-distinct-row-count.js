/*####<<< Epi-26 >>>>>>>sort-limit-distinct-row-count.js >>>>>>>>>>>>>>>>>>> */
/* 
1. db.userID.find().sort({salary: 1/-1})

1. db.userID.find().count({totl})

1. db.userID.find().limit(2)

1. db.userID.find().sort({-id: 1 /-1}).limit(2)

1. db.userID.find().distinct("name")
*/

//###<< part-1 >>>>db.userID.find().sort({name:1})?????????
/*@@@ Accending order (A-Z)..................
use("studentID");
db.userID.find().sort({name:1})
*/

//@@@@<< part-1 >>>>db.userID.find().sort({name:1})?????????
/*@@@ Deccending order (Z-A)..................
use("studentID");
db.userID.find().sort({name:-1})
*/

//@@@@<< part-1 >>>>db.userID.find().sort({salary:-1})?????????
/*@@@ Deccending order (Z-A)..................
use("studentID");
use("studentID");
db.userID.find().sort({salary:-1})
*/

//####<< part-2 >>>> db.userID.find().count("totol") ?????????
/*@@@ Deccending order ()..................
use("studentID");
db.userID.find().count("totol")

$$$ Answer : total : 10 data 
*/

//####<< part-3 >>>> db.userID.find().limit(2);  ?????????
/*@@@ list first 2 data finding............
use("studentID");
db.userID.find().limit(2);

$$$ Answer : 2 => first 2 data finding.....
*/

//####<< part-4 >>>> db.userID.find().sort({ _id: -1 }).limit(2); ?????????
/*@@@ List fist/last 2 data finding............
use("studentID");
db.userID.find().sort({ _id: -1 }).limit(2);

db.userID.find().sort({ _id: 1 }).limit(2);

$$$ Answer : 2 => last 2 data finding.....
*/

//####<< part-5 >>>> db.userID.distinct("name"); ?????????
/*@@@ List fist/last 2 data finding............
use("studentID");
db.userID.distinct("name");

$$$ Answer : .....
     [
  "Alal uddin",
  "Ali",
  "Azizul hakim",
  "Jasim",
  "Rabbil Hossain",
  "Ramjan",
  "Salam mia",
  "Shayan",
  "Sorna Akhter"
]
*/
