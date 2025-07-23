const mongoose = require('mongoose')
//make model and schema 
const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
    },
    instructions: {
        type: String,
        required: true,
    },
    prepTime: {
        type: Number
    },
    difficulty: {
        type: String,
        enum:['Easy','Medium','Hard'],
        default: 'Easy'
    }
})
// console.log('the list works without issues')


const recipe = mongoose.model('recipe',recipeSchema)

module.exports = recipe


