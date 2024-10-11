use("studentID");
//db.userID.update({ _id: "66d6c9a2a8623185153ad6fa" }, { name: "sorna" });

db.userID.update(
  { _id: ObjectId("66d6c9a2a8623185153ad6fa")},
  { $set: { name: "sorn" } }
);
db.userID.find({});
