
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/test", {
  useNewUrlParser: true
})

const db = mongoose.connection

db.once("open", () => {
  console.log("Connected to DB....")
})

db.on("error", (error) => {
  console.log("Error on DB Connection : " + error)
})