const mongoose = require('mongoose')
const recipe = require('./models/recipe')
const dotenv = require("dotenv").config()

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('connected successfully')
    } catch (error) {
        console.log('failed to connect')
    }
}
connectDB()

async function createRecipe() {
    try {
        const newRecipe = {
            name: "pasta",
            ingredients: ["macaroni", "veggies", 'sauce'],
            instructions: "do a lot of things",
            prepTime: 120,
            difficulty: "Easy"
        }
        const createdRecipe = await recipe.create(newRecipe)
        console.log(createdRecipe)
    } catch (error) {
        console.log('failed to create recipe.')
    }
}
// createRecipe()

async function getallRecipes() {
    const allRecipes = await recipe.find()
    console.log(allRecipes)
}
// getallRecipes()

async function updateRecipe() {
 const updatedRecipe = await recipe.findByIdAndUpdate("6880837e381979228b9d050f", { name: "my goated pasta" }, { new: true }) 
    console.log(updatedRecipe)


}
updateRecipe()

async function deleteRecipe(){
    try {
        const deletedRecipe = await recipe.findByIdAndDelete('6880060a13b1c3d19c1d3652')
        console.log('recipe eradicated successfully')
    } catch (error) {
        console.log('failed to eradicate recipe')
    }
}
// deleteRecipe()

async function getRecipeById(){
    try {
        const idFilteredRecipe = await recipe.findById('688003dbd1bb005e43dc3a44')
        console.log('recipe found!')
        console.log(idFilteredRecipe)
    } catch(error) {
        console.log('No recipe with this ID exists.')
    }
}
getRecipeById()





