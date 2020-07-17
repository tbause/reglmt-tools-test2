const config=require('config')
const app = require( './app-lmt.js')

const port = process.env.PORT || 3000;
const server = app.listen(port)

const log = require('pino')(config.get('logging'))
log.info(`LMT Server Listening to http://localhost:${port} with prefix(${config.get('url_prefix')})`);