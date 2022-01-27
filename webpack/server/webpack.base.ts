import path from "path" 
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import { Configuration } from "webpack";
 
 
const config : Configuration = { 
    entry : {
        main: path.resolve(__dirname, "../../src/server/index.ts")
    },
    output: {
        filename: "[name]-server-bundle.js",
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
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    resolve:{
        extensions: [".ts",".js"]
    },
    plugins:[
        new ForkTsCheckerWebpackPlugin({
            async: false,
            eslint:{
                files: "./src/server/**/*"
            }
        })
    ]
}

export default config;