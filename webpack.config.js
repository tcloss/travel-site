const path = require('path');
const postCSSPlugins = [require('postcss-import'),
                        require('postcss-mixins'),
                        require('postcss-simple-vars'),
                        require('postcss-nested'),
                        require('autoprefixer'),
                        ]
// const postCSSPlugins = [require("postcss-simple-vars"), require("postcss-nested"), require("autoprefixer")]
module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        contentBase: path.join(__dirname, 'app'),
        hot: true,
        port: 3000,
        host: '0.0.0.0',
        before: function(app,server){
            server._watch('./app/**/*.html')
        }
    },
    mode: 'development',
    // watch: true,
    module: {
        rules: [
            {
                test: /\.CSS$/i,
                use: ['style-loader', 'css-loader?url=false',           { loader: 'postcss-loader', options: { postcssOptions: { plugins: postCSSPlugins}}}]
                // use: ["style-loader", "css-loader?url=false", { loader: "postcss-loader", options: { postcssOptions: { plugins: postCSSPlugins } } }]
            }
        ]
    }
}