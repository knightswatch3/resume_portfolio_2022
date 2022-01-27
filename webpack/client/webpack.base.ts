import path from "path" 
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import { Configuration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin"; 

const config : Configuration = { 
    entry : {
        main: path.resolve(__dirname, "../../src/client/index.tsx")
    },
    output: {
        filename: "[name]-client-bundle.js",
        path: path.join(__dirname, "../../public/build")
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
    plugins:[
        new ForkTsCheckerWebpackPlugin({
            async: false,
            eslint:{
                files: "./src/client/**/*"
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            title: "PORTFOLIO",
            inject: "body"
        })
    ]
}

export default config;