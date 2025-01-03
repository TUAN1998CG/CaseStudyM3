
// account={
//     userName:"",
//     password:"",
//     role:""
// }
import {checkLogin} from "../Services/accountService";

export function login(loginInfo){
    return async (dispatch)=>{
        const account= await checkLogin(loginInfo);
        if(account!=null){
            dispatch({
                type:'LOGIN',
                payload:account
            })
            return true
        }else {
            console.log("Login Failed");
            return false;
        }
    }
}


export function logout(){
    return{
        type:"LOGOUT",
        payload:null
    }
}