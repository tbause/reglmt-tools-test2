/** @module proto-lmt entry point
 * 
 * Just for building the dependencies an linking everything together
 */

import lmt_ui_app from './lmt-proto-ui-app.js'
let defaults = {
    app_title: "Proto-LMT",
    app_description: `LMT viewer`,
    version: "0.3",
}

//make app a global variable
window.app = new lmt_ui_app
app.defaults = defaults
