import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    devtool: 'inline-source-map',
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [],
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }
            ]
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    }
}