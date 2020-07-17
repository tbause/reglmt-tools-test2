/** @module lib-lmt-xml
 * 
 * read and return the lmt xml file and schema
 */
const fs = require('fs')
const path = require('path')
const config = require('config')
const log = require('pino')(config.get('logging'))

module.exports.xml = () => {
    let xml_doc
    let xml_doc_file_path = path.join(config.get('static.root'), config.get('static.lmt'))
    try {
        xml_doc = fs.readFileSync(xml_doc_file_path, 'utf-8')
    } catch (err) {
        log.error(`route:/  cannot read lmt xml file ${xml_doc_file_path}`)
        xml_doc = false
    }
    return xml_doc
}

module.exports.xml_ref = () => {
    let xml_doc
    let xml_doc_file_path = path.join(config.get('static.root'), config.get('static.lmt_ref'))
    try {
        xml_doc = fs.readFileSync(xml_doc_file_path, 'utf-8')
    } catch (err) {
        log.error(`route:/  cannot read lmt reference xml file ${xml_doc_file_path}`)
        xml_doc = false
    }
    return xml_doc
}

module.exports.schema = () => {
    let xml_doc
    let xml_doc_file_path = path.join(config.get('static.root'), config.get('static.schema'))
    try {
        xml_doc = fs.readFileSync(xml_doc_file_path, 'utf-8')
    } catch (err) {
        log.error(`route:/  cannot read lmt schema ${xml_doc_file_path}`)
        xml_doc = false
    }
    return xml_doc
}
