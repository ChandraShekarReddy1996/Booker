var express = require("express");
var bodyparser = require("body-parser");
var mongoose = require("mongoose");

var constants = require("./constants/constants");

var app = express();
var jsonparser = bodyparser.json();


var customerController = require("./Routes/./customer");

app.use(bodyparser.json({ type: "application/*+json" }));
app.listen(constants.PORT, () => {
  onConnection();
});


//Customer
app.post("/addcustomer", jsonparser, customer.addcustomer);

var onConnection = () => {
  mongoose.connect(
    "mongodb://localhost:27017/Booker",
    (err) => {
      console.log("Mondoose is connected Sucessfully");
    }
  );
};
