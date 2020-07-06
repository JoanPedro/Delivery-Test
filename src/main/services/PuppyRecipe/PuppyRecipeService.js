const axios = require('axios')
const HttpResponse = require('../../../presentation/helpers/http-response')
const sortedStuffs = require('./helpers/sortedStuffs')

module.exports = class PuppyRecipe {
  async index (stuff) {
    try {
      if (!stuff) {
        return HttpResponse.badRequest('Stuff must be provided')
      }
      const sorted = sortedStuffs(stuff)
      if (sorted.statusCode === 400) {
        return HttpResponse.badRequest(sorted.body)
      }
      console.log(sorted)
      const recipes = await axios.get(`http://www.recipepuppy.com/api/?i=${sorted}`)
      if (recipes.data.results.length === 0) {
        return HttpResponse.NotFoundError('This recipe can not be found!')
      }
      console.log(typeof recipes)
      return {
        result: recipes.data.results,
        stuffs: sorted
      }
    } catch (error) {
      return HttpResponse.NotFoundError('Stuff must be provided')
    }
  }
}
