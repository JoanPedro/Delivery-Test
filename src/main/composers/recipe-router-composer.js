const RecipeRouter = require('../../presentation/routers/recipe-router')
const PuppyService = require('../services/PuppyRecipe/PuppyRecipeService')
const GiphyService = require('../services/Giphy/GiphyRecipeService')

module.exports = class RecipeRouterComposer {
  static compose () {
    const puppyRecipe = new PuppyService()
    const giphyRecipe = new GiphyService()

    return new RecipeRouter({
      puppyRecipe,
      giphyRecipe
    })
  }
}
