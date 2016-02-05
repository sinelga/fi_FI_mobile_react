var webpack = require('webpack');

module.exports = {
		entry: {
		    app: [ './src/app.js'],
			vendor: ["react","react-router","react-bootstrap","node-uuid"],
		  },
   output: {
     path: __dirname + '/dist',
     filename: 'bundle.js',
     publicPath: '/'
   },
   module: {
     loaders: [
       { test: /\.js$/, loader: 'babel', exclude: [/node_modules/]  }
      ]
   },
   
   plugins: [
             new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
           ]
};