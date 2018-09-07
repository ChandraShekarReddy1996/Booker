var mongoose = require("mongoose");

var schema = mongoose.Schema;

var customers = new schema({
  firstName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  LastName: {
    type: String,
    required: true,
    minlength: 1
  },
  phone: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength : 10,
    trim: true
  },
  password: {
    type: String,
    required: true,
    maxlength: 10,
    trim: true
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address"
    ],
    minlength: 5,
    required: true
  },
  address: {
    type: String,
    required: true,
    minlength: 1
  },
  Id: {
    type: Number,
    required: true,
    minlength: 1
  },
  department: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("customers", customers);
