/** @module prot-lmt
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
import loadLanguages from 'prismjs/components'

class thisapp {

    cosntructor(){

        this.lmt = `<?xml version="1.0" encoding="UTF-8"?>\n<Zthes></Zthes>`
    }

    element(id) {
        return document.getElementById(id)
    }

    async fetch(url) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState == 4) {
                    msg = xhr.responseText
                    callback(msg)
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

        this.element("doc-title").innerHTML = this.defaults.app_title
        this.element("doc-description").innerHTML = this.defaults.app_description
        this.element("rendering").innerHTML = `<p>XML loading...</p>`

        let introduction = this.element("introduction-markdown")
        introduction.innerHTML = marked(introduction.textContent)

        loadLanguages(['html', 'xml'])
        this.lmt = await this.fetch('lmt.xml ')
    }
}
export default thisapp