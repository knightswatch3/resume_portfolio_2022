import baseConfig from "./webpack.base"
import { Configuration, EnvironmentPlugin} from "webpack";
 
const config : Configuration = Object.assign({
    mode:"production",
    plugins: [new EnvironmentPlugin({
        DEBUG: false,
        NODE_ENV: false
    })]
}, baseConfig)

export default config;