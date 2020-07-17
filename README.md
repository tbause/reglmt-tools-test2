# proto-lmt

Simple app to display LMT client side or server side

There are 2 ways of testing the rendering. Both will need to
run a minimal web server. This can be done by installing
[NodeJS](https://nodejs.org/en/) (Mac, Win, Linux), 
cloning the repo 

```sh
$ git clone https://github.com/mrmxf/proto-lmt.git
$ cd proto-lmt
```

and then typing `npm install`. To see the outputs:

1. **Client side**
  * To test the page, you need to run
    the minimal client and the work is done in the browser.
  * This method **will crash** many mobile devices because the
    data sets are big.
  * Type `npm run client-side` in the root folder.
  * Navigate to `http://localhost:8080` in a browser on the same machine
2. **Server Side**
  * To test the page, you need to run the server and do the rendering on
    on in the koa server
  * The `/config/` folder contains the paths to the pages (that can be changed)
  * Type `npm start`
  * Navigate to `http://localhost:3000` in a browser on the same machine

All the files needed for deployment are in the `/dist/` folder:

* `/dist/client-side/`
  * `/dist/client-side/index.html` this is the client side demo html file for
     demonstrating the functionality - load it in a browser.
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

## Configuration

The file `/config/default.json` contains the following configuration settings:

* `app_title` A short string used in the window `<title>` attribute and the main header
* `app_description` An HTML string inserted below the tile on the page,
* `version` version number of the app
* `port` The port that the app will respond to (default=3000)
* `static` controls the static files served to the client
  * `root` name of the folder from which all static assets will be served (`css` files, `index.html`, javascript files etc.
  * `template` name of the template file for serving the content
* `url_prefix` a prefix beginning with `/` indicating a mount point that the app should respond to (default = empty, typical = `/vocabularies/lmt`)
* `cache` temp folder where server can store rendered copies of its assets
* `logging` control the logging ofd the outputs
  * `level` minimum error level for the app to log (`info`, `warning`, `error`)
  * `log_requests` set to `true` or `false`

## Logging

The app uses the [pino](https://github.com/pinojs/pino) logger.