const HttpResponse = require('../helpers/http-response')

module.exports = class RecipeRouter {
  constructor ({ puppyRecipe, giphyRecipe }) {
    this.puppyRecipe = puppyRecipe
    this.giphyRecipe = giphyRecipe
  }

  async route (httpRequest) {
    const { query } = httpRequest
    const puppyRecipe = await this.puppyRecipe.index(query)
    if (puppyRecipe.statusCode === 400) {
      return HttpResponse.badRequest(puppyRecipe.body)
    }
    if (puppyRecipe.statusCode === 404) {
      return HttpResponse.NotFoundError(puppyRecipe.body)
    }
    const recipes = await Promise.all(
      puppyRecipe.result.map(async recipe => {
        const giphy = await this.giphyRecipe.index(recipe.title)
        return {
          title: recipe.title,
          ingredients: recipe.ingredients,
          link: recipe.href,
          gif: giphy.url
        }
      })
    )

    return HttpResponse.ok({
      keywords: puppyRecipe.stuffs,
      recipes
    })
  }
}
