const express = require("express")
const cors = require("cors")

require("dotenv").config()

const connectDB =
  require("./config/db")

const userRoutes =
  require("./routes/userRoutes")

const app = express()

app.use(cors())

app.use(express.json())

app.use("/api/auth", userRoutes)

connectDB()

app.listen(process.env.PORT, () => {
  console.log(
    `Server running on port ${process.env.PORT}`
  )
})