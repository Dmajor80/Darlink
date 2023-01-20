import CONFIG from "./env";
import '../../.env'
import Config from "chart.js/dist/core/core.config";

const config = {
    API:()=>`${CONFIG.baseUrl()}/api/v1`,
    LOCAL_API:()=>`${CONFIG.baseUrl()}:${Config}/api/v1`,
}

const getConfig = () =>{
    return config.API();
}
export default getConfig;