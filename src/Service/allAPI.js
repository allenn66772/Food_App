import CommonAPI from "./commonAPI"
import SERVERURL from "./serverURL"



//register
export const registerAPI =async (reqBody)=>{
    return await CommonAPI ("POST",`${SERVERURL}/register`,reqBody)
}
//login
export const LoginAPI =async (reqBody)=>{
    return await CommonAPI ("POST",`${SERVERURL}/login`,reqBody)
}