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

  async.waterfall(
    [
      function getPhone(callback) {
        var data = {phone : phone}
        return callback(null,data)
      },
      function customerslist(data,callback){
        dbservice.find(data, "customers", (err, result) => {
          //console.log(data, ">>>>>>>>>", err, result);
          if (!Object.keys(result).lenth || result == null)
          return callback(null,'UNIQUE')
          else
          return callback(null,'EXISTS')
        })
      },
      (data,callback) => {
        //console.log('>>>>>>>>>>>>> : ',data)
        res.send({ message: "Its working" });
        callback(null,data)
      }
    ],
    function (err,result){
      if(err)
      console.log('EveryThing is woring Finresult',err)
      else
      console.log('Got it',result)
    }
  );
};



module.exports = { addcustomer };
