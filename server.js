const express = require('express');
const app = express()
const PORT = process.env.PORT || 5000

const connectDB = require('./db')

connectDB()

const server = app.listen(PORT, () => {
    console.clear()
    console.log(`Server Connected to port ${PORT}`)
})

app.use("/api/auth", require("./Auth/route"))

// Handling Error
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
})