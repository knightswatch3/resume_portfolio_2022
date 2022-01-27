import baseConfig from "./webpack.base"
import { Configuration} from "webpack";
 
const config : Configuration = Object.assign({
    mode:"production" 
}, baseConfig)

export default config;