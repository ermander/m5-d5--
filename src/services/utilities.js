// Importo fs-extra
const fs = require("fs-extra")


// Creo la mia funzione per leggere i file
const readFile = (filePath) => {
    // Legge il file e lo salva nella variabile in "linguaggio macchina"
    const buffer = fs.readFileSync(filePath)
    // Converte il contenuto in "linguaggio macchina" della variabile buffer in una stringa
    const bufferToString = buffer.toString()
    // Ritorno la variabile bufferToString convertira in formato JSON
    return JSON.parse(bufferToString)
}

module.exports = readFile