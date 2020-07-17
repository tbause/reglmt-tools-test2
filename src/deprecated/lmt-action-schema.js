/** @module lmt-action-xml
 * 
 * render LMT as raw XML using prismjs
 */
import Prism from 'prismjs'

class lmt_action_xml {

    consrtuctor() {
        this.title= "<h2>Language Metadata Table XML Schema</h2>"
    }

    /** click handler  */
    async eventListener(self) {

        app.render_element.innerHTML = "rendering..."

        const html = '<pre>' + Prism.highlight(app.schema, Prism.languages.xml, 'xml') + '</pre>'

        app.render_element.innerHTML = html
    }
}

export default lmt_action_xml