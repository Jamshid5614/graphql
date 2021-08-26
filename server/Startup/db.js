const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect("mongodb://localhost/Users", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("successfully connected to databse"))
    .catch((err) => console.log(`*****${err}*****`));
};
