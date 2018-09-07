var async = require("async");
var jwt = require("jsonwebtoken");
var dbservice = require("../services/mongoService");

var addcustomer = (req, res) => {
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var address = req.body.address;
  var email = req.body.email;
  var password = req.body.password;
  var phone = req.body.phone;

  var data = {phone : phone}
  async.waterfall(
    [
      (data) => {
        res.send({ message: "Its working" });
        return data;
      },
      customerslist(data)
    ],
    (err, result) => {
      console.log('GOT IT HERE',err,result);
    }
  );
};

var customerslist = (data,callback) => {
  dbservice.find(data, "customers", (err, result) => {
    console.log(data, ">>>>>>>>>", err, result);
    if (result.keys == 0)
      return callback(null, "UNIQUE")
    else
      return callback(null,'EXISTS');
  });
};

module.exports = { addcustomer };
