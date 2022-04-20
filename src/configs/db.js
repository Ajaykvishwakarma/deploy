const mongoose = require("mongoose");

// const connect = () => {
//   return mongoose.connect(
//     "mongodb+srv://ajaykv054:ajay12345@cluster0.o8wiv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//   );
// };

// module.exports = connect;

  // OR

const mongoDB = "mongodb://localhost:27017/apartmentmanagement";
module.exports = () => mongoose.connect(mongoDB)