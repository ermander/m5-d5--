// Importo express
const express = require("express")
// Importo cors
const cors = require("cors")

// Importo studentsRouter
const studentsRouter = require("./services/students/index")
const projectsRouter = require("./services/projects/index")

// Un pacchetto utile per controllare gli endpoints presenti
const listEndpoints = require("express-list-endpoints")

const server = express()

// Dichiaro la porta/e sulla/e quale/i sarà avviato il mio server
const port = process.env.PORT || 3002

// Permetto la comunicazione fra front-end e back-end. Deve essere usato prima dei router
server.use(cors())

// Una middleware ha sempre bisogno di 3 parametri: req, res, e next
const myMiddleware = (req, res, next) => {
    req.body.currentTime = new Date()
    next()
}

// Importo una funzione per leggere il body di una richiesta in arrivo (post, put ecc), trasformandolo in un oggetto
server.use(express.json())

/* 
Utilizzo la mia middleware. Se i parametri all'interno saranno rispettati, la middleawre passerà avanti
la richiesta. In caso contrario, restituirà qualcos'altro
*/
server.use(myMiddleware)

/*
 Permetto al server di usare studentsRouter e projectsRouter.
"/students o /projects" sarà il nostro percorso (path) aggiunto all'URL di base 
(è possibile sceglierne uno discrezionalmente) 
*/
server.use("/students", 
/* myMiddleware, puà essere inserita anche qui, se deve essere usata solo in determinate parti del codice*/
studentsRouter)
server.use("/projects", projectsRouter)

// Stampa in console gli endpoints presenti
console.log(listEndpoints(server))

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})