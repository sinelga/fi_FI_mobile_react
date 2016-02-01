var webpack = require('webpack');

module.exports = {
		entry: {
		    app: [ './src/app.js'],
			vendor: ["react","react-router","jquery","react-bootstrap"],
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