const express = require("express")

const router = express.Router()

const {
  signup,
  login,
  getUsers,
  updateUser,
  toggleStatus,
} = require("../controllers/userController")

router.post("/signup", signup)

router.post("/login", login)

router.get("/users", getUsers)

router.put("/users/:id", updateUser)

router.patch(
  "/users/:id/status",
  toggleStatus
)

module.exports = router

