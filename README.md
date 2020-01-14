# proto-lmt

Simple JS to display LMT in a browser

To test the page, you will need to run a minimal web server. This can be
done by installing NodeJS (Mac, Win, Linux), typing `npm install` and then
`npm start` in the root folder.

All the files needed for deployment are in the `dist/` folder:

* `index.html` this is just a demo html file for demonstrating the functionality - load it in a browser.
  * `<link rel="stylesheet" href="css/prism-twilight.css" />` in the header loads the styles for syntax highlighting
  * `<script src="proto-lmt.js"></script>` in the header loads the javascript to run the page
  * `<div id="lmt-narrative"></div>` is where `abstract.md` will be rendered ass HTML with the current styles
  * `<div id="lmt-buttons"></div>`  is where the buttons will be rendered (one per transform type)
  * `<div id="lmt-rendering"></div>`  is where the output of a rendering is written
* `lmt-narrative.md` is the markrdown file with the introduction to a version of LMT
* `lmt.xml` is the full XML of the LMT to be published
* `lmt-schema.xsd` is the schema that is used for validation (defined in the RDD)
* `css/` folder with various style sheets
  * `site.css` should contain any custom css to make this page display correctly
  * `prism-xxx.css` is the highglight style for doing the xml pretty printing

If you update the app in the `src/` folder then you need to `npm run build` to package all the javascript before
running `npm start` to do testing.