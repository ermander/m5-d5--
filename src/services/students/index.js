// Importo express
const express = require("express")

// express.Router contiene un gruppo di endpoints
const studentsRouter = express.Router()

// CRUDs per students
// (req, res) => è una fuzione di callback che "ascolta" ciò che gli viene passato dal frontend
studentsRouter.get("/", (req, res) => {
    console.log(req)
    // .send permette di "rispondere" alla richiesta
    res.send("ok")
})

studentsRouter.get("/:id", (req, res) => {
    // .send permette di "rispondere" alla richiesta
    res.send("ok")
})

studentsRouter.post("/", (req, res) => {
    // .send permette di "rispondere" alla richiesta
    res.send("ok")
})

studentsRouter.put("/:id", (req, res) => {
    // .send permette di "rispondere" alla richiesta
    res.send("ok")
})

studentsRouter.delete("/:id", (req, res) => {
    // .send permette di "rispondere" alla richiesta
    res.send("ok")
})

// Upload files
// studentsRouter.post()
// Check email
// studentsRouter.get()
// Send email
// studentsRouter.post()

// Esporto studentsRouter per poterlo utilizzare in altri file
module.exports = studentsRouter