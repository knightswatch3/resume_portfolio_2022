import path from "path"
import { Configuration } from "webpack";
import baseConfiguration from "./webpack.base" 
const config : Configuration = Object.assign({
        mode:"development",
        devServer:{
            static: path.join("./public"),
            compress: true,
            port: 4001
        },
}, baseConfiguration)

export default config;