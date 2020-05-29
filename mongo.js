const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

if(process.argv.length<3) {
    console.log('give passoword')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://testikayttaja:${password}@testia-zhaxe.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
    name : { type:String, required: true, unique:true },
    number : Number
})
personSchema.plugin(uniqueValidator)

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name : process.argv[3],
    number : process.argv[4]
})
console.log(process.argv.length)

if(process.argv.length === 3) {
    Person.find({}).then(result => {
        console.log(result)
        mongoose.connection.close()
    })
}

if(process.argv.length === 5) {
    console.log(process.argv)
    person.save().then(result => {
        console.log('onnistunut tallennus')
        console.log(`result sisältää:${result}`)
        mongoose.connection.close()
    })
}



