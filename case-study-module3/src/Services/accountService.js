import axios from "axios";

export async function checkLogin(loginInfo){
    try{
        const response= await axios.get(" http://localhost:8080/account");
        const account = response.data.find(ac=>ac.username===loginInfo.username&&ac.password===loginInfo.password);
        if(account!=null){
            return account;
        }else {
            return null;
        }
    }catch(e){
        return null
    }


}