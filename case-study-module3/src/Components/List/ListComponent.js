
import React, {useEffect, useRef, useState} from "react";
// import './List.css'
import {deleteFacilityById, getAllFacilites, searchFacilitesByName} from "../../Services/productService";
import {Link} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";
import {useSelector} from "react-redux";


function ListComponent() {
    const account=useSelector(state => state.user.account);
    const[facilityList,setFacilityList]=useState([]);
    const[show,setShow]=useState(false);
    const[isLoading,setIsLoading]=useState(false);
    const[deleteFacility,setDeleteFacility]=useState({id:"",name:""});
    const searchRef = useRef();
    useEffect( ()=>{
        const fetchData= async ()=>{
            const list = await getAllFacilites()
            setFacilityList(list);

        }
        fetchData()
    },[isLoading]);
    const handleClose=()=>{
        setShow((pre)=>!pre)
    }
    const handleShow=(facility)=> {
        setShow((pre) => !pre)
        setDeleteFacility(facility)
    }

    const handleDelete = async () => {
        await deleteFacilityById(deleteFacility.id)
        setIsLoading((pre)=>!pre)
        handleClose()
    }
    const handleSearch=()=>{
        let searchName=searchRef.current.value;
        const fetchData= async ()=>{
            const searchList = await searchFacilitesByName(searchName);
            setFacilityList(searchList);
        }
fetchData()
    }

    return (
        <>
            <h1>Facility</h1>
            <Link className={'btn btn-success btn btn-sm'} to={'/list/create'}>Add new Facility</Link>
            <input ref={searchRef} className={'form-control'} name={'searchName'} placeholder={'Enter Search Name'}/>
            <button onClick={handleSearch} className={'btn btn-warning btn btn-sm'} type={'button'}>Search</button>
            <table className={'table table-dark'}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Bed</th>
                    <th>Type</th>
                    <th>Direction</th>
                    <th>Floor</th>
                    <td>Pic</td>
                    <th>Detail</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {facilityList.map((f, i) => (
                    <tr key={f.id}>
                        <td>{i + 1}</td>
                        <td>{f.id}</td>
                        <td>{f.name}</td>
                        <td>{f.bed}</td>
                        <td>{f.type.name}</td>
                        <td>{f.direction}</td>
                        <td>{f.floor}</td>
                        <td>
                            <img src={f.image} alt={f.name} style={{width: "10rem"}}/>
                        </td>
                        <td><Link to={'/list/detail/' + f.id} className={'btn btn-secondary'}>Detail</Link></td>
                        <td>
                            {account&&((account.role=="ADMIN")?
                                <Button variant="danger" onClick={() => {
                                handleShow(f)
                            }}>
                                Delete
                            </Button>:(''))}

                        </td>
                    </tr>
                ))}

                </tbody>
            </table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Ban co muon xoa {deleteFacility.name}??</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

        </>


    )
}

export default ListComponent;