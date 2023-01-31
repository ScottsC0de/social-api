// async await for each method in routes
// async readAllThought (req, res) {try await Thought.find()}
const Thought = require('../models/Thought')

const readAllThoughts = async (req, res) => {
    try {
        const allThoughts = await Thought.find({}).exec() // need exec to use await for .find()
        res.json(allThoughts)
        console.log(allThoughts)
    }
    catch (err) {
        res.status(404).send('A 404 error has occured...')
    }
}

const createThought = async (req, res) => {
    try {
        const newThought = await Thought.create(req.body)
        res.json(newThought)
        console.log(newThought)
    }
    catch (err) {
        console.log(err)
        res.status(404).send('A 404 error has occured...')
    }
}

module.exports = {
    readAllThoughts,
    createThought
}