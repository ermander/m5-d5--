// Importo express
const express = require("express")

// express.Router contiene un gruppo di endpoints
const projectsRouter = express.Router()

// CRUDs per students
projectsRouter.get("/")

projectsRouter.get("/:id")

projectsRouter.post("/")

projectsRouter.put("/:id")

projectsRouter.delete("/:id")

// Upload files
// studentsRouter.post()
// Check email
// studentsRouter.get()
// Send email
// studentsRouter.post()

// Esporto studentsRouter per poterlo utilizzare in altri file
module.exports = projectsRouter