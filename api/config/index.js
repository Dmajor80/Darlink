import CONFIG from "./env";

const config = {
    API:()=>`${CONFIG.baseUrl()}:${CONFIG.port()}/api/v1/`,
}

const getConfig = () =>{
    return config.API();
}
export default getConfig;