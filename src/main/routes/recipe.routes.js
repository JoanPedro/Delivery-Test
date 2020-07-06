const { adapt } = require('../adapters/express-router-adapter')
const RecipeRouterComposer = require('../composers/recipe-router-composer')

module.exports = router => {
  router.get('/', adapt(RecipeRouterComposer.compose()))
}
