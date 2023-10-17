import { OIDCConfigType } from "../types";

export const getLoginURI = (config: OIDCConfigType) => {
    const uri = Object.entries(config).filter(item => item[0] !== 'authorize_uri').map(item => `${item[0]}=${item[1]}`).join('&');
    return `${config.authorize_uri}?${uri}`;
}