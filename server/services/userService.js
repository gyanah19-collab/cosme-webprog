const User = require("../models/User")

// GET USERS
exports.getUsers = async () => {
  return await User.find()
}

// CREATE USER
exports.createUser = async (data) => {
  return await User.create(data)
}

// FIND USER BY EMAIL
exports.findUserByEmail = async (email) => {
  return await User.findOne({ email })
}

// UPDATE USER
exports.updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(
    id,
    data,
    { new: true }
  )
}

// TOGGLE STATUS
exports.toggleUserStatus = async (id) => {

  const user = await User.findById(id)

  if (!user) return null

  user.status =
    user.status === "active"
      ? "inactive"
      : "active"

  await user.save()

  return user
}