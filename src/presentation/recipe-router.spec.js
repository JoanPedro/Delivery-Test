class RecipeRouter {
  route (httpRequest) {
    if (!httpRequest.query) {
      return {
        statusCode: 400
      }
    }
  }
}

describe('Recipe Router', () => {
  test('Should return 400 if no params is provided', () => {
    const sut = new RecipeRouter()
    const httpRequest = {}
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
