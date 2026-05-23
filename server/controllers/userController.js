const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const UserService = require("../services/userService")

// SIGNUP
exports.signup = async (req, res) => {

  try {

    const data = req.body

    const existingUser =
      await UserService.findUserByEmail(
        data.email
      )

    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists",
      })
    }

    const hashedPassword =
      await bcrypt.hash(data.password, 10)

    const user =
      await UserService.createUser({
        ...data,
        password: hashedPassword,
      })

    res.json(user)

  } catch (err) {

    res.status(500).json({
      message: err.message,
    })
  }
}

// LOGIN
exports.login = async (req, res) => {

  try {

    const { email, password } = req.body

    const user =
      await UserService.findUserByEmail(email)

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      })
    }

    if (user.status === "inactive") {
  return res.status(403).json({
    message: "Your account is inactive. Please contact support.",
  })
}

    if (user.role === "viewer") {
      return res.status(403).json({
        message: "Viewers cannot login",
      })
    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      )

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      })
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    )

    res.json({
      token,
      user,
    })

  } catch (err) {

    res.status(500).json({
      message: err.message,
    })
  }
}

// GET USERS
exports.getUsers = async (req, res) => {

  try {

    const users =
      await UserService.getUsers()

    res.json(users)

  } catch (err) {

    res.status(500).json({
      message: err.message,
    })
  }
}

// UPDATE USER
exports.updateUser = async (req, res) => {

  try {

    const data = req.body

    if (data.password?.trim()) {

  data.password =
    await bcrypt.hash(
      data.password,
      10
    )

} else {

  delete data.password
}

    const updatedUser =
      await UserService.updateUser(
        req.params.id,
        data
      )

    res.json(updatedUser)

  } catch (err) {

    res.status(500).json({
      message: err.message,
    })
  }
}

// TOGGLE STATUS
exports.toggleStatus = async (req, res) => {

  try {

    const user =
      await UserService.toggleUserStatus(
        req.params.id
      )

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      })
    }

    res.json(user)

  } catch (err) {

    res.status(500).json({
      message: err.message,
    })
  }
}