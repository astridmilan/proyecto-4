const express = require('express')

const app = express()
const apiRouter= require("./routes")

const cors = require("cors")
app.use(express.json())
app.use(cors())
app.get(`/`, (req, res) => {
    res.json({message: `welcome to the application.`})
})
app.use("/api/prueba",apiRouter)

app.listen(3000, () => {
    console.log(`server is ruming on port 3000`)

})






