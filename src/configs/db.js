const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://ajay:ajay@cluster0.1a6qo.mongodb.net/appartment?retryWrites=true&w=majority"
  );
};

module.exports = connect;

  // OR

// const mongoDB = "mongodb://localhost:27017/apartmentmanagement";
// module.exports = () => mongoose.connect(mongoDB)