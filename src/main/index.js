const env = require('./config/env')
const app = require('./config/app')

app.listen(env.port, () => console.log(`Server running on http://localhost:${env.port}`))
