// Importo express
const express = require("express")

// Importo studentsRouter
const studentsRouter = require("./services/students/index")
const projectsRouter = require("./services/projects/index")

// Un pacchetto utile per controllare gli endpoints presenti
const listEndpoints = require("express-list-endpoints")

const server = express()

// Dichiaro la porta/e sulla/e quale/i sarà avviato il mio server
const port = process.env.PORT || 3002

// Importo una funzione per leggere il body di una richiesta in arrivo (post, put ecc)
server.use(express.json())

/*
 Permetto al server di usare studentsRouter e projectsRouter.
"/students o /projects" sarà il nostro percorso (path) aggiunto all'URL di base 
(è possibile sceglierne uno discrezionalmente) 
*/
server.use("/students", studentsRouter)
server.use("/projects", projectsRouter)

// Stampa in console gli endpoints presenti
console.log(listEndpoints(server))

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})