const User = require("../models/User")


exports.getUsers = async () => {
  return await User.find()
}


exports.createUser = async (data) => {
  return await User.create(data)
}


exports.findUserByEmail = async (email) => {
  return await User.findOne({ email })
}


exports.updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(
    id,
    data,
    { new: true }
  )
}


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