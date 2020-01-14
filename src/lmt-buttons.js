/** @module lmt-buttons
 * 
 * render all the buttons and link them to the required render function
 */

import xml_button from './lmt-button-xml'
import schema_button from './lmt-button-schema'

let xml_eventListener = new xml_button().eventListener
let schema_eventListener = new schema_button().eventListener


class lmt_buttons {

    constructor() {
        this.action_buttons = {
            xml: {
                title: "raw",
                eventListener: xml_eventListener,
            },
            "schema": {
                title: "validate",
                eventListener: schema_eventListener,
            },
        }
    }

    render( buttons_id ) {
        let buttons_element = document.getElementById(  buttons_id  )
        let btn_class = "btn btn-primary"

        for (let action in this.action_buttons) {
            let button = document.createElement('button')
            button.addEventListener('click', this.action_buttons[action].eventListener)
            button.innerHTML = this.action_buttons[action].title
            button.setAttribute('id', `btn-${this.action_buttons[action].title}`)
            button.setAttribute('class', btn_class)
            btn_class = "btn btn-info"

            buttons_element.appendChild(button)
        }
    }
}
export default lmt_buttons