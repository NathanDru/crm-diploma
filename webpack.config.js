var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'boot.jsx'),

    output: {
        path: path.join(__dirname, 'public', 'build'),
        filename: 'app.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react'],
                },
            },
        ]
    },

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
    },

    devtool: 'source-map',
};