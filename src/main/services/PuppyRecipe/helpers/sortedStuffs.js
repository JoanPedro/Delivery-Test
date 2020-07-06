const { badRequest } = require('../../../../presentation/helpers/http-response')

module.exports = query => {
  const stuffs = query.i !== undefined
    ? Array.from(query.i.split(',')).sort()
    : []
  if (stuffs.length > 3) {
    return badRequest('You can not order recipes up to three stuffs')
  }
  return stuffs
}
