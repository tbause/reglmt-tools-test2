/** @module lmt-action-table-languages
 * 
 * Display LMT as a table of languages
 */
import xml2js from 'xml2js'

class lmt_action_table_languages {

    constructor() {
        this.title= "<h2>Language Metadata Table Vocabulary Elements</h2><p>(can be printed as PDF)</p>"
    }

    /** true if this is a group term
     * 
     * identified by the termVocabulary element equalling `Language Groupings LMT`
     */
    is_group_term(term) {
        return term.termVocabulary == 'Language Groupings LMT'
    }

    /** get `td` element with a Value of the LMT term matching a given Attribute label
     * e.g. td_with_text_of(term[t], 'termNote', 'label', 'Audio Language Tag')
     */
    td_with_text_of(term, element, attribute, attribute_value) {
        let td = document.createElement('td')
        td.innerHTML = '&nbsp;'

        //assuming the element exists
        if (term && term[element]) {
            td.innerHTML = term[element][0]
            // under some circumstances (e.g. getting a language code for written languages)
            // the inner HTML might be an object at this point. If so, then there is no valid
            //value - set to empty string
            if (typeof term[element][0] == 'object'){ 
                td.innerHTML= '&nbsp;'
            }

            //now match any label
            term[element].forEach((e) => {
                if (e && e.$ && e.$[attribute] && (e.$[attribute] == attribute_value)) {
                    //this element has the right attribute so extract the value
                    td.innerHTML = e._
                }
            })

        }

        return td
    }

    th_with_text(heading) {
        let hdr = document.createElement('th')
        hdr.setAttribute('scope', 'col')
        hdr.setAttribute('class', 'text-center')
        hdr.innerHTML = heading
        return hdr
    }

    /** click handler
     * @param {Object} self - pointer to the instance of the class to prevent
     *                        `this` pointing to the button object when some browsers handle the call
     */
    eventListener(self) {
        app.render_element.innerHTML = self.title

        //create a form using bootstrap styling
        let theTable = document.createElement('table')
        theTable.setAttribute('class', 'table table-sm table-striped table-bordered small')

        theTable.appendChild(this.th_with_text('term Id'))
        theTable.appendChild(this.th_with_text('term Name'))
        theTable.appendChild(this.th_with_text('Audio<br>Language<br>Tag'))
        theTable.appendChild(this.th_with_text('Code'))

        theTable.appendChild(this.th_with_text('Long<br>Description<br>1'))
        theTable.appendChild(this.th_with_text('Audio<br>Language<br>Display Name 1'))
        theTable.appendChild(this.th_with_text('Visual<br>Language<br>Tag 1'))
        theTable.appendChild(this.th_with_text('Visual<br>Language<br>Display Name 1'))

        theTable.appendChild(this.th_with_text('Long<br>Description<br>2'))
        theTable.appendChild(this.th_with_text('Audio<br>Language<br>Display Name 2'))
        theTable.appendChild(this.th_with_text('Visual<br>Language<br>Tag 2'))
        theTable.appendChild(this.th_with_text('Visual<br>Language<br>Display Name 2'))

        let parser = new xml2js.Parser()

        parser.parseStringPromise(app.lmt)
            .then((result) => {
                let term = result.Zthes.term
                for (let t in term) {
                    //only include non-group entries
                    if (!self.is_group_term(term[t])) {
                        let row = document.createElement('tr')

                        row.appendChild(self.td_with_text_of(term[t], 'termId'))
                        row.appendChild(self.td_with_text_of(term[t], 'termName'))

                        //Handle the termNote fields
                        row.appendChild(self.td_with_text_of(term[t], 'termNote', 'label', 'Audio Language Tag'))
                        row.appendChild(self.td_with_text_of(term[t], 'termNote', 'label', 'Code'))

                        row.appendChild(self.td_with_text_of(term[t], 'termNote', 'label', 'Long Description 1'))
                        row.appendChild(self.td_with_text_of(term[t], 'termNote', 'label', 'Audio Language Display Name 1'))
                        row.appendChild(self.td_with_text_of(term[t], 'termNote', 'label', 'Visual Language Tag 1'))
                        row.appendChild(self.td_with_text_of(term[t], 'termNote', 'label', 'Visual Language Display Name 1'))

                        row.appendChild(self.td_with_text_of(term[t], 'termNote', 'label', 'Long Description 2'))
                        row.appendChild(self.td_with_text_of(term[t], 'termNote', 'label', 'Audio Language Display Name 2'))
                        row.appendChild(self.td_with_text_of(term[t], 'termNote', 'label', 'Visual Language Tag 2'))
                        row.appendChild(self.td_with_text_of(term[t], 'termNote', 'label', 'Visual Language Display Name 2'))

                        theTable.appendChild(row)
                    }
                }
                app.render_element.appendChild(theTable)
            })
    }
}

export default lmt_action_table_languages