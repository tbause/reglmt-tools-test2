/** @module proto-lmt entry point
 * 
 * Just for building the dependencies an linking everything together
 */

import client_side_app from './client-side-app.js'
import defaults from './client-side-config.js'

//make app a global variable
window.app = new client_side_app
app.defaults = defaults
