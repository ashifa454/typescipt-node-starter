const nodeExternal = require("webpack-node-externals");
const WebpackShellPlugin = require('webpack-shell-plugin');

const {
    NODE_ENV = 'prodcution'
} = process.env;

module.exports = {
    entry: './src/index.ts',
    mode: NODE_ENV,
    target: 'node',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader'
                ]
            }
        ]
    },
    watch: NODE_ENV === 'development',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    externals: [nodeExternal()],
    plugins: [
        new WebpackShellPlugin({
            onBuildEnd: ['npm run start:dev']
        })
    ]

}