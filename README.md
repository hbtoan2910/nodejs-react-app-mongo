#
## Main notes:

DB_URI=mongodb+srv://hbtoan2910:Civic2013EX@ryanmongodb.ta3871k.mongodb.net/react_db?retryWrites=true&w=majority&appName=ryanmongodb

=> ryanmongodb is Cluster in cloud mongo Atlas
=> react_db is is Database in cloud mongo Atlas, inside this db, there are collections which are basically tables

const contactSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  website: { type: String, required: true },
  message: { type: String, required: true },
  entryDate: { type: Date, default: Date.now },
  
  => if using Data.now() here, this function is executed once when the schema is defined, not each time a new document is created
  => so all documents would then have the same timestamp
});

const Contacts = mongoose.model("Contacts", contactSchema, "contact_form");

=> in case we want to name a collection from BE code, we can use 3rd paramter of model function like this
=> then, once saved, this collection will be created in cloud mongo Atlas.
