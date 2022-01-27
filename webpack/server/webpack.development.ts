import path from "path"
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import baseConfiguration from "./webpack.base" 


interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
  }

const config : Configuration = Object.assign({
        mode:"development", 
        watch: true
}, baseConfiguration)

export default config;