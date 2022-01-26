import path from "path" 
import { Configuration } from "webpack"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
const config : Configuration = {
    entry : {
        main: path.resolve(__dirname, "../../src/client/index.tsx")
    },
    output: {
        filename: "[name]-client-bundle.js",
        path: path.resolve(__dirname, "build")
    },
    module:{
        rules:[
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ]
                    }
                }
            }
        ]
    },
    resolve:{
        extensions: [".tsx",".ts",".js"]
    }, 
    devServer:{
        static: path.join(__dirname, "build"),
        compress: true,
        port: 4000
    },
    plugins:[
        new ForkTsCheckerWebpackPlugin({
            async: false,
            eslint:{
                files: "./src/**/*"
            }
        })
    ]
}

export default config;