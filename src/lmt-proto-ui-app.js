/** @module lmt-proto-ui-app
 * 
 * provide the following methods:
 * 
 *  - fetch( url )             return {async} a document from the server
 *  - transform ( lmt, xform ) return {async} the transformed doc
 *  - element ( id )           return {sync} an element by id or throw an exception
 * 
 *  - defaults are loaded from config.js at packing time
 *  - start() is called when the page has loaded
 */

import marked from 'marked'
import Prism from 'prismjs'

import lmt_actions from './deprecated/lmt-ui-buttons'

class thisapp {

    constructor() {

        this.lmt = `<?xml version="1.0" encoding="UTF-8"?>\n<Zthes>Loaded during start()</Zthes>`
        this.render_element = 'set-during-start()'
    }

    element(id) {
        return document.getElementById(id)
    }

    async fetch(url) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState == 4) {
                    let msg = xhr.responseText
                    resolve(msg)
                }
            };
            xhr.open('GET', url, true);
            xhr.send()
        })
    }

    render_xml() {

        code = `<pre><code class="language-css">p {color: red }</code></pre>`
        const htm = Prism.highlight(code, Prism.languages.html, 'html');
        return htm
    }

    async start() {
        let metadata = await this.fetch(`metadata`)
        metadata = JSON.parse(metadata)
        document.title = metadata.app_title
        this.element("doc-title").innerHTML = metadata.app_title
        this.element("doc-description").innerHTML = metadata.app_description

        //initialise the element for rendering the output
        this.render_element = this.element('lmt-rendering')

        //create the action buttons in the element with the given id
        let buttons = new lmt_actions()
        buttons.render('lmt-action-buttons')

        this.element("lmt-rendering").innerHTML = `<p>XML loading...</p>`

        this.lmt_narrative = await this.fetch("lmt-narrative.md")
        this.element("lmt-narrative").innerHTML = marked(this.lmt_narrative)

        this.lmt = await this.fetch('lmt.xml')
        this.schema = await this.fetch('lmt-schema.xsd')

        this.render_element.innerHTML = "rendering..."
        buttons.default_action()
    }
}
export default thisapp