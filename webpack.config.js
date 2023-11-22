/** @type {import('webpack').Configuration} */
const config = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        static: {
            directory: './dist',
        },
    },
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.[jt]s$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },
};

// Export the completed configuration object to be consumed by webpack as CommonJS module
module.exports = config;