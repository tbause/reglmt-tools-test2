/** @module proto-lmt entry point
 * 
 * Just for building the dependencies an linking everything together
 */

import thisapp from './thisapp.js'
import defaults from './config.js'

//make app a global variable
window.app = new thisapp
app.defaults = defaults
