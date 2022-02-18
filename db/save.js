const util = require('util')
const fs = require('fs')
const {v4: uuidv4} = require('uuid')
const readNote = util.promisify(fs.readFile)
const writeNote = util.promisify(fs.writeFile)

class Save {
    write(note) {
        return writeNote('db/db.json', JSON.stringify(note))
    }

    read() {
        return readNote('db/db.json', 'utf8')
    }

    async retrieveNotes() {
        const notes = await this.read()
        let parsedNotes
        try {
            parsedNotes = [].concat(JSON.parse(notes))
        } catch (err) {
            parsedNotes = []
        }
        return parsedNotes
    }

}