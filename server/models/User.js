const mongoose = require("mongoose")
const {
  ROLE_ADMIN,
  ROLE_EDITOR,
  ROLE_VIEWER,
  STATUS_ACTIVE,
  STATUS_INACTIVE,
} = require("../constants/constants")

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  email: String,
  username: String,
  password: String,
  contact: String,

  role: {
    type: String,
    enum: [
    ROLE_ADMIN,
    ROLE_EDITOR,
    ROLE_VIEWER,
  ],
    default: "viewer",
  },

  gender: String,

  status: {
    type: String,
    enum: [
    STATUS_ACTIVE,
    STATUS_INACTIVE,
  ],
    default: "active",
  },
})

module.exports = mongoose.model("User", userSchema)