const mongoose = require("mongoose");

const connection = mongoose
  .connect("mongodb://127.0.0.1:27017/Assignment")
  .then(() => console.log("Mongo is connected successfully"))
  .catch((error) => console.log(error));



const UserSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model(User, UserSchema)

module.exports= {
    User
}