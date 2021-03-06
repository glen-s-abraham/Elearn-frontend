var path = require('path');
module.exports={
	entry:[
		 'babel-polyfill',
		'./src/index.js'
	],
	output:{
		  
		  path:path.resolve(__dirname,'dist'),
		  filename:'bundle.js',
		  publicPath:'/dist'	
	},
	module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          
        }
      }
    }
  ]
}

}