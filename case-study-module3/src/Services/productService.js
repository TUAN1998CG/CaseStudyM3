import axios from "axios";


export async function getAllFacilites() {
    try{
        const reponse = await axios.get(" http://localhost:8080/facility")
        return reponse.data;
    }
    catch(e){
        return [];
    }
}



export async function searchFacilitesByName(searchName) {
    try{
        const reponse = await axios.get(`http://localhost:8080/facility?name_like=${searchName}&sort=name&_order=asc` )
        return reponse.data;
    }
    catch(e){
        return [];
    }
}


export async function addNewFacility(facility){
    try{
        const reponse = await axios.post(" http://localhost:8080/facility",facility)

    }
    catch(e){
        console.log("Lỗi"+e)
    }
}

export async function findFacilityById(id){
    try{
        const reponse = await axios.get(" http://localhost:8080/facility/"+id)
        return reponse.data;
    }
    catch(e){
        return null;
    }

}

export  async function deleteFacilityById(id){
    try{
        const reponse = await axios.delete(" http://localhost:8080/facility/"+id)
    }
    catch(e){
        console.log("Lỗi"+e)
    }

}