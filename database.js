const mongoose = require("mongoose");
const uuid = require('node-uuid');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/finalProject');

const userSchema = new Schema({
  _id:{ type: String, default: function genUUID() {
    return uuid.v1()
  }},
  user: String,
  password: String,
  role: String,
  person_id: String,
})

const personSchema = new Schema({
  _id:{ type: String, default: function genUUID() {
    return uuid.v1()
  }},
  nombre: String,
  apellido: String,
  cedula: Number,
  edad: Number,
  ocupacion: String,
  localidad: String,
})

const messageSchema = new Schema({
  _id:{ type: String, default: function genUUID() {
    return uuid.v1()
  }},
  message: String,
  date: Date,
  sender: String,
  recipient: String
})



const User = mongoose.model('users', userSchema);
const Person = mongoose.model('person', personSchema);
const Message = mongoose.model('message', messageSchema);

module.exports = {
  User,
  Person,
  Message
}
