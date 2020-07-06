const HttpResponse = require('../helpers/http-response')
const { InvalidParamError, MissingParamError } = require('../../utils/errors')
const { UnauthorizedError, ServerError } = require('../errors/index')
module.exports = class RecipeRouter {
  constructor ({ puppyRecipe, giphyRecipe }) {
    this.puppyRecipe = puppyRecipe
    this.giphyRecipe = giphyRecipe
  }

  async route (httpRequest) {
    try {
      const { query } = httpRequest
      const puppyRecipe = await this.puppyRecipe.index(query)

      if (puppyRecipe.statusCode === 400) {
        return HttpResponse.badRequest(new MissingParamError(puppyRecipe.body))
      }
      if (puppyRecipe.statusCode === 404) {
        return HttpResponse.NotFoundError(new InvalidParamError(puppyRecipe.body))
      }
      const recipes = await Promise.all(
        puppyRecipe.result.map(async recipe => {
          const giphy = await this.giphyRecipe.index(recipe.title)
          if (giphy.statusCode === 404) {
            return { statusCode: 404 }
          }
          return {
            title: recipe.title,
            ingredients: recipe.ingredients,
            link: recipe.href,
            gif: giphy.url
          }
        })
      )

      if (recipes[0].statusCode === 404) {
        return HttpResponse.unauthorizedError(new UnauthorizedError())
      }

      return HttpResponse.ok({
        keywords: puppyRecipe.stuffs,
        recipes
      })
    } catch (error) {
      return HttpResponse.serverError(new ServerError())
    }
  }
}
