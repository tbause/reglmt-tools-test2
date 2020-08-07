/** @module lmt-buttons
 * 
 * render all the buttons and link them to the required render function
 */

import action_xml from './deprecated/lmt-action-xml'
import action_table_languages from './deprecated/lmt-action-table-languages'
import action_table_groups from './deprecated/lmt-action-table-groups'
import action_validate from './deprecated/lmt-action-validate'
import action_schema from './deprecated/lmt-action-schema'

class lmt_actions {

    constructor() {
        this.action_buttons = {
            xml: {
                title: "raw",
                handler: new action_xml(),
            },
            table_languages: {
                title: "table: languages",
                handler: new action_table_languages(),
            },
            table_groups: {
                title: "table: groups",
                handler: new action_table_groups(),
            },
            schema: {
                title: "schema",
                handler: new action_schema(),
            },
            validate: {
                title: "validate",
                handler: new action_validate(),
            },
        }
        this.default_handler = this.action_buttons.xml.handler
    }

    render(buttons_id) {
        let buttons_element = document.getElementById(buttons_id)
        let btn_class = "btn btn-primary"
        //remember the value of `this` for the instance of this class
        //When the eventListener is invoked, `this` points to the button
        let self = this

        for (let action in this.action_buttons) {
            let button = document.createElement('button')

            //wrap the event listener so that it has a pointer to its own instance
            button.addEventListener('click', function() {
                self.action_buttons[action].handler.eventListener(self.action_buttons[action].handler)
            })
            button.innerHTML = this.action_buttons[action].title
            button.setAttribute('id', `btn-${this.action_buttons[action].title}`)
            button.setAttribute('class', btn_class+' ml-1')
            btn_class = "btn btn-info"

            buttons_element.appendChild(button)
        }
    }

    default_action(){
        this.default_handler.eventListener( this.default_handler)
    }
}
export default lmt_actions