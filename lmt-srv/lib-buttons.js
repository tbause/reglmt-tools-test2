/** @module lib-buttons
 * prepare the text body of the message
 */
const fs = require('fs')
const path = require('path')
const config = require('config')
const mustache = require('mustache')
const marked = require('marked')
const log = require('pino')(config.get('logging'))

const button_template = `<button id="btn-{{ name }}" class="btn btn-{{ class }} ml-1" onClick='location.href="{{{ url }}}"'>{{{ text }}}</button>\n`
module.exports.html = function () {
    buttons_html = `<div id="lmt-action-buttons" class="col">\n`
    buttons_html += mustache.render(button_template, { name: "xml", text: "xml<br>endpoint", url: "/xml", class: "primary" })
    buttons_html += mustache.render(button_template, { name: "view-xml", text: "view<br>xml", url: "/view-xml", class: "info" })
    buttons_html += mustache.render(button_template, { name: "view-schema", text: "view<br>schema", url: "/view-schema", class: "info" })
    buttons_html += mustache.render(button_template, { name: "view-ctrl", text: "control<br>document", url: "/view-control-doc", class: "info" })
    buttons_html += mustache.render(button_template, { name: "lang-table", text: "table<br>lang", url: "/table-lang", class: "info" })
    buttons_html += mustache.render(button_template, { name: "group-table", text: "table<br>group", url: "/table-group", class: "info" })
    buttons_html += mustache.render(button_template, { name: "tool-validate", text: "LMT<br>convert", url: "/tool-converter", class: "secondary" })
    buttons_html += mustache.render(button_template, { name: "tool-validate", text: "validate<br>tool", url: "/tool-validate", class: "secondary" })
    buttons_html += mustache.render(button_template, { name: "tool-diff", text: "diff<br>tool", url: "/tool-diff", class: "secondary" })
    buttons_html += `</div>`
    return buttons_html
}