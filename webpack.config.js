const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

//配置首页文件
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
})

module.exports = {
    mode: 'development',
    plugins: [
        htmlPlugin
    ],
    module: {
        rules: [
            {test: /.js|jsx$/, use: 'babel-loader', exclude:/node_modules/},
            //modules表示为普通的样式表启用模块化
            {test: /\.css$/, use:['style-loader', 'css-loader?modules']},
            {test:/\.ttf|woff|woff2|eot|svg$/, use: 'url-loader'},
        ]
    },
    resolve: {
        //后缀补全
        extensions: ['.js', 'jsx', '.json'],
        //根路径设定，@表示src这层目录
        alias: {'@': path.join(__dirname, './src')}
    }
}
