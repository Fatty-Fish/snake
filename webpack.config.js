module.exports = {
    mode: "development",
    entry: {
        snake:"./src/js/index.js"
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/out',
        publicPath: __dirname + "out"
    },
    module:{
        rules:[
            { test: /\.(css|less)$/, use: ["style-loader",'css-loader',"less-loader"] },
            {test: /\.js$/, use: ["babel-loader"]},
            {test: /\.(jpg|png)$/, use: ["url-loader?limit=10&name=/[name].[ext]"]}
        ]
    }

}