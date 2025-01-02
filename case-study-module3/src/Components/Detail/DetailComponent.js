import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {findFacilityById, getAllFacilites} from "../../Services/productService";

function DetailComponent() {

    const [facility,setFacility] = useState({id:"",name:""});

    const {id}= useParams()

    useEffect(()=>{
      const fetchData= async ()=>{
          const list = await findFacilityById(id)
          setFacility(list)
      }
      fetchData()
    },[])
    return (
        <>
            <h3>Chi tiết</h3>
            <div className="card" style={{width: '18rem'}}>
                <img
                    src="https://banoca.com/wp-content/uploads/2021/03/logo-khach-san.jpg"
                    className="card-img-top"
                    alt="Placeholder"
                />
            </div>
                <p>ID:{facility.id}</p>
                <p>Name:{facility.name}</p>
            </>
            )
            }

            export default DetailComponent;