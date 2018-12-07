var async = require("async");
var jwt = require("jsonwebtoken");
var dbservice = require("../services/mongoService");

var addcustomer = async (req, res) => {
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var address = req.body.address;
  var email = req.body.email;
  var password = req.body.password;
  var phone = req.body.phone;

var data = data1(req) 

console.log(data)
res.send({'Number' : data})
};


var data1 = (req) => {
  console.log('The Number Should be -|/')
  return 5
}


module.exports = { addcustomer };
