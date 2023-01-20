import CONFIG from "./env";
import '../../.env'

const config = {
    API:()=>`${CONFIG.baseUrl()}/api/v1`,
    LOCAAPI:()=>`${CONFIG.baseUrl()}/api/v1`,
}

const getConfig = () =>{
    return config.API();
}
export default getConfig;