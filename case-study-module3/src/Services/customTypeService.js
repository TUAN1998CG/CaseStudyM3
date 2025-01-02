import axios from "axios";


export async function customTypeService() {
    try{
        const res =await axios.get(' http://localhost:8080/type')
        return res.data;
    }catch(e){
        return []

    }
}