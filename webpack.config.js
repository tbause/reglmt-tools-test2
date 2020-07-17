const path = require('path');

module.exports =[ {
  name:'client-side',
  entry: './src/deprecated/client-side-index.js',
  mode:'development',
  output: {
    filename: 'client-side-proto-lmt.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
},{
  name:'lmt',
  entry: './src/lmt-proto-ui-index.js',
  mode:'development',
  output: {
    filename: 'lmt-proto.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
},]