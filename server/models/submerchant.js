var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var SubMerchantSchema = new Schema({
  firstName: {
    type: String,
    default: '',
    required: 'Please fill in with your first name',
    trim: true
  },
  lastName: {
    type: String,
    default: '',
    required:   'Please fill in with your last name',
    trim: true
  }, 
  email: {
    type: String,
    default: '',
    required: 'Please fill in with Email'
  },
  phone: {
    type: Number,
    default: '',
    required: 'Please fill in with your Phone Number'
  }, 
  dateOfBirth: {
     type: Number,
    default: '',
    required: 'Please fill date of birth'
  }, 
  ssn: {
    type: Number,
    default: '',
    required: 'Please fill in with the last four of your socail'
  }, 
  streetAddress: {
     type: Number,
    default: '',
    required: 'Please fill in with your street Address'
  }, 
  locality: {
     type: String,
    default: '',
    required: 'Please fill please in with the City'
  },  
  region: {
    type: String,
    default: '',
    required: 'Please fill in with your State' 
  }, 
  postalCode: {
    type: Number,
    default: '',
    required: 'Please fill in with your postal Code'
  },
  email: {
     type: String,
    default: '',
    required: 'Please fill in with your email'
  }, 
  mobilePhone:  {
    type: String,
    default: '',
    required: 'Please fill in with you mobile number'
  }, 
  accountNumber: {
    type: Number,
    default: '',
    required: 'Please fill in with your account number'
  },
  routingNumber: {
    type: Number,
    default: '',
    required: 'Please fill in with the routingNumber'
  },
  tosAccepted: {
       type: Boolean,
    default: '',
    required: 'Please Aggree to the terms and conditions'
  } 


});


module.exports = mongoose.model('SubMerchant', SubMerchantSchema); 