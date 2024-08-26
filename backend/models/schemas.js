const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    min: 18,
  },
  occupation: String,
  salary: {
    type: Number,
    min: 0,
  },
  entryDate: {
    type: Date,
    default: Date.now(),
  },
});

const contactSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  website: { type: String, required: true },
  message: { type: String, required: true },
  entryDate: { type: Date, default: Date.now },
  //if using Data.now() here, this function is executed once when the schema is defined, not each time a new document is created
  //so all documents would then have the same timestamp
});

const Users = mongoose.model("Users", userSchema);
const Contacts = mongoose.model("Contacts", contactSchema, "contact_form");
//in case we want to name a collection from BE code, we can use 3rd paramter of model function like this
//then, once saved, this collection will be created in cloud mongo Atlas
const mySchemas = { Users: Users, Contacts: Contacts };

module.exports = mySchemas;
