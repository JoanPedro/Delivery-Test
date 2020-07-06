const axios = require('axios')
const HttpResponse = require('../../../presentation/helpers/http-response')
const env = require('../../config/env')

module.exports = class GiphyRecipe {
  async index (find) {
    try {
      const URL = `https://api.giphy.com/v1/gifs/search?api_key=${env.giphyKey}&q=${find}&limit=1`
      const giphy = await axios.get(URL)

      if (giphy.data.data.length === 0) {
        return HttpResponse.NotFoundError('This gif can not be found!')
      }

      return giphy.data.data[0]
    } catch (error) {
      return HttpResponse.NotFoundError('This gif can not be found!')
    }
  }
}
