require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const Person = require('./models/person')

var morgan = require('morgan')
app.use(express.json())
app.use(cors())
app.use(express.static('build'))

morgan.token('object', function getObject (req) {
    return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :object'))


app.get('/api/persons', (req, res, next) => {
    Person.find({}).then(persons => {
        //console.log(persons)
        res.json(persons)
    })
        .catch(error => next(error))
})

app.get('/info', (req, res) => {
    res.end(`Phonebook has info for ${Person.length} people 
${new Date()}`)
})

app.get('/api/persons/:id', (req, res, next) => {
    const id = req.params.id
    Person.findById(id)
        .then(person => {
            if(person) {
                res.json(person)
            } else {
                res.status(404).end()
            }
        })
        .catch(error => next(error))
})

app.delete('/api/persons/:id', (req,res,next) => {
    const id = req.params.id
    Person.findByIdAndDelete(id)
        .then(
            res.status(204).end()
        )
        .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
    const newPerson = req.body
    if(newPerson.name === false ) {
        return res.status(400).json({
            error: 'Missing name'
        })
    } else if (newPerson.number === false) {
        return res.status(400).json({
            error: 'Missing phonenumber'
        })
    }
    else {
        const person = new Person ({
            name: newPerson.name,
            number: Number(newPerson.number)
        })
        console.log(person)
        person.save().then(savedPerson => {
            res.json(savedPerson)
        })
            .catch(error => next(error))
    }
})

app.put('/api/persons/:id', (req, res, next) => {
    const id = req.params.id
    const newPerson = req.body
    const person = {
        name: newPerson.name,
        number: newPerson.number
    }
    Person.findByIdAndUpdate(id, person, { new:true })
        .then(updatedPerson => {
            res.json(updatedPerson)
        })
        .catch(error => next(error))

})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


// Errorhandler:

const errorHandler = (error, req, res, next) => {
    console.error(error.message)

    if(error.name === 'CastError') {
        return res.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message })
    }
    next(error)
}

app.use(errorHandler)

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)
