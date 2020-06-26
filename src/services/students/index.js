// Importo express
const express = require("express")

// Importo la mia funzione readFile
const readFile = require("../utilities")

// Importo path per creare i percorsi dei miei file
const path = require("path")

// Import uniqid
const uniqid = require("uniqid")

// Importo fs-extra
const fs = require("fs-extra")

// Import express-validator
const expressValidator = require("express-validator")

// Creo la mia variabile contenente il percorso del file da utilizzare
const studentFilePath = path.join(__dirname, "students.json")

// express.Router contiene un gruppo di endpoints
const studentsRouter = express.Router()

// CRUDs per students
// (req, res) => è una fuzione di callback che "ascolta" ciò che gli viene passato dal frontend
studentsRouter.get("/", (req, res) => {
    try{
        console.log(req)

        const arrayOfStudents = readFile(studentFilePath)

        // .send permette di "rispondere" alla richiesta
        if(arrayOfStudents.length > 0) {
            res.send(arrayOfStudents)
        }else{
            res.status(404).send("No studens found!")
        }
    } catch (error) {
        res.status(505).send("File not found!")
    }
})

studentsRouter.get("/:id", (req, res) => {
    const arrayOfStudents = readFile(studentFilePath)
    console.log("Student id: ", req.params.id)
    // Creo una funzione che vada ad inserire nella mia nuova variabile solo l'oggetto con il corrispondente parametro .id
    const studentFound = arrayOfStudents.find(
        (student) => student.id === req.params.id
    )
    res.send(studentFound)
})

studentsRouter.post("/",
 (req, res) => {
    const newStudent = {
        ...req.body, 
        id: uniqid(), 
        createdAt: new Date(),
        numberOfProjects : 0,
    } // Importare nel file server.js server.use(express.json())    
    const arrayOfStudents = readFile(studentFilePath)
    arrayOfStudents.push(newStudent)
    /* 
    fs.writeFileSync riscrive il file precedente con il nuovo che inseriamo (arrayOfStudent.push ecc).
    JSON.Stringify converte in formato stringa ciò che gli viene passato come parametro
    */
   fs.writeFileSync(studentFilePath, JSON.stringify(arrayOfStudents))
    res.send(arrayOfStudents)
})

studentsRouter.put("/:id", (req, res) => {
    res.status(201).sene("ok")
})

studentsRouter.delete("/:id", (req, res) => {
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