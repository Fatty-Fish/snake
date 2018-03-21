//引入独立打包公共文件对象
var webpack = require("webpack");

//引入独立打包css文件的对象
var ExtractTextPlugin = require("extract-text-webpack-plugin");

//引入压缩out文件夹里的文件的代码的对象
var UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "[name].js",
        path: __dirname + "/out",
        //打包后的资源文件路径：不写，会依然在C/file:....那就localhost找不到了。
        //除了写：http://localhost:8080，还可以是./out/
        publicPath: ".out/"
    },
    module: {
        rules: [
            //打包js文件
            { test: /.js$/, use: ["babel-loader"] },
            //未独立打包css文件：顺序不能变：先css-loader,再丢给style-loader;
            // { test: /.css$/, use: ["style-loader", "css-loader"] },
            //独立打包css文件:
            { test: /.css$/, use: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader" }) },
            //打包图片:8192是限制：图片未超出8192/1024=8k,则打包为base64格式url即为base64编码，否则单独打包出来,单独打包出来图片名字
            //随机生成，会找不到对应的如pug.jpg,所以得：name=./[name].[ext]
            // { test: /.(jpg|png|gif|svg)$/, use: ["url-loader?limit=8192&name=./[name].[ext]"] },
            //打包less文件
            // { test: /.less$/, use: ["style-loader", "css-loader", "less-loader"] }
        ]
    },
    //压缩文件对象@独立打包分页HTML的公共文件，如：'tool.js'@独立打包css文件对象@全局挂载jquery的对象
    plugins: [new UglifyJSPlugin(), new webpack.optimize.CommonsChunkPlugin("common"), new ExtractTextPlugin("[name].css")]
}