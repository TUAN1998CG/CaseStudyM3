import React, {useEffect, useRef, useState} from "react";
import {addNewFacility} from "../../Services/productService";
import {useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {customTypeService} from "../../Services/customTypeService";
import 'react-toastify/dist/ReactToastify.css'
import {toast} from "react-toastify";


function AddComponent() {
    const[customTypeList,setCustomTypeList]=useState([]);
  const[facility,setFacility]=useState({
      name:"",
      bed:"1",
      type:"",
      direction:"",
      floor:""});
  useEffect(()=>{
      const fecthData= async ()=>{
          const list = await customTypeService();
          setCustomTypeList(list);
      }
      fecthData();
  })
    const navigate=useNavigate();
    const handleSubmit = async (value) => {
        const facility ={
            ...value,
            type:JSON.parse(value.type)
        }
        await addNewFacility(facility)
        toast.success("Them moi thanh cong")
        navigate('/list')
    }
    const handleValidate = Yup.object({
        // id:Yup.number().required('Khong de trong').min(1),
        name:Yup.string().required('Khong de trong').matches(/^[a-zA-Z0-9]+$/),

    })


    return(
        <>
            <Formik initialValues={facility} onSubmit={handleSubmit} validationSchema={handleValidate}>
            <Form>
                <div>
                    <label htmlFor="">Name:</label>
                    <Field type='text' name ='name'></Field>
                    <ErrorMessage style={{color:'red'}} name='name' component='div'></ErrorMessage>
                </div>
                <div>
                    <label htmlFor="">Giường</label>
                    <Field type='radio' name ='bed' value='1'></Field>Single
                    <Field type='radio' name ='bed' value='2'></Field>Double
                    <ErrorMessage style={{color:'red'}} name='bed' component='div'></ErrorMessage>
                </div>
                <div>
                    <label htmlFor="">Hướng</label>
                    <Field type='radio' name ='direction' value='Moutain'></Field>Moutain
                    <Field type='radio' name ='direction' value='Sea'></Field>Sea
                    <ErrorMessage style={{color:'red'}} name='bed' component='div'></ErrorMessage>
                </div>
                <div>
                    <label>Type</label>
                    <Field as='select' name ='type'>
                        <option value={''}>----Select----</option>
                        {customTypeList.map((m)=>(
                            <option value={JSON.stringify(m)}>{m.name}</option>
                        ))}
                    </Field>
                    <ErrorMessage style={{color:'red'}} name='bed' component='div'></ErrorMessage>
                </div><div>
                    <label>Floor</label>
                    <Field as='select' name ='floor'>
                        <option value={''}>----Select----</option>
                        <option value={'1'}>1</option>
                        <option value={'2'}>2</option>
                        <option value={'3'}>3</option>
                    </Field>
                    <ErrorMessage style={{color:'red'}} name='floor' component='div'></ErrorMessage>
                </div>
               <div>
                   <button type={'submit'}>Save</button>
               </div>
            </Form>
            </Formik>
        </>
    )
}
export default AddComponent;