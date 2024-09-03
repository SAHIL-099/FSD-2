// Write a script to define a schema having fields like name,age,gender,email. 
// Apply following validations:
// (1) name field must remove leading/trailing spaces,minimum and maximum length should be 3 & 
// 10 respectively
// (2) age must accept a value from 1<=age<=100 only.
// (3) Perform Email ID validation on Email field.
// (4) gender must accept values in small letters only and allowed values are “male” & “female” only
const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/qb')
  .then(() => { console.log("Connected to the database") })
  .catch((err) => { console.log("Database connection error:", err) });

const myschema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,  
    minlength: 3,
    maxlength: 10,
    required: true  
  },
  age: {
    type: Number,
    min: 1,
    max: 100,
    required: true  
  },
  email: {
    type: String,
    required: true,  
    validate: {
      validator: (v) => validator.isEmail(v)
    }
  },
  gender: {
    type: String,
    lowercase: true,  
    enum: ['male', 'female'], 
    required: true  
  }
});

const Person = mongoose.model('Person', myschema);

// Example of creating a new document
const person = new Person({
  name: 'John',
  age: 25,
  email: 'john@example.com',
  gender: 'male'
});

person.save()

