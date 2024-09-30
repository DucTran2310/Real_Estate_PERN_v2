require("dotenv").config()

const express = require("express") 
const cors = require("cors")   
const { connectionDatabase } = require("./configs/dbconnect")

connectionDatabase()

const app = express()

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "PUT", "DELETE", "GET"]
  })
)

app.use(express.json({ limit: "5mb" }))
app.use(express.urlencoded({ extended: true, limit: "5mb" }))

const port = process.env.PORT_SERVER || 8888

app.listen(port, () => {
  console.log(`::: Server is running on port: ${port}`)
})