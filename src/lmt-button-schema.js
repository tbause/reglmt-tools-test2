/** @module lmt-button-schema
 * 
 * validate LMT with the schema - provide a modal dialog
 */
class lmt_button_schema {

    consrtuctor() {
    }

    /** click handler  */
    eventListener() {
        app.render_element.innerHTML = "<h2>Validate an LMT document against the LMT Schema</h2>"

        //create a form using bootstrap styling
        let form = document.createElement('form')

        let form_group = document.createElement('div')
        form_group.setAttribute('class', 'form-group')

        let xml_label = document.createElement('label')
        xml_label.setAttribute("for", "lmt_xml_document")
        xml_label.innerHTML = "Replace the XML in the box below with an LMT document to validate"

        let xml_input = document.createElement('textarea')
        xml_input.setAttribute("id", "lmt_xml_document")
        xml_input.setAttribute("type", "text")
        xml_input.setAttribute("class", "form-control")
        let css = "font-size: 0.8em;text-align: left;white-space: pre;"
        css += "word-spacing: normal;word-break: normal;word-wrap: normal;"
        xml_input.setAttribute("style", css)
        xml_input.setAttribute("rows", "10")
        xml_input.innerText = "Loading current LMT ..."

        let button = document.createElement('button')
        //button.addEventListener('click', this.action_buttons[action].eventListener)
        button.innerHTML = "Validate the XML above"
        button.setAttribute('id', `btn-do-validation`)
        button.setAttribute('class', 'btn btn-primary')

        form_group.appendChild(xml_label)
        form_group.appendChild(xml_input)
        form_group.appendChild(button)

        form.appendChild(form_group)

        app.render_element.appendChild(form)

        //initialise the input with the current LMT document
        // this might take a while so it is done after display of the form
        xml_input.innerHTML = app.lmt
    }
}

export default lmt_button_schema