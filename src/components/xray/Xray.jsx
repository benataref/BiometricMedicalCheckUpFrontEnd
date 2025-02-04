import React, { useRef, useState, useEffect } from 'react';
//import Select from 'react-select';
//import { useParams, useNavigate} from "react-router-dom";
import Table from './Table'
import Add from './Add'
import Update from './Update'
import Delete from './Delete'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Navigate } from 'react-router-dom';



export default function Xray() {
    const [userId, setUserId] = useState()
    const [updatedUserId, setUpdatedUserId] = useState()
    const CloseRef = useRef();
    //console.log(updatedUserId)
    const [value, setValue] = useState({
        pid:"",        
        chestxray:"" ,
        filmno:"" ,
        comment:"",           
        conclusion:"",
        registerdby:"", 
        updatedby:""
     });
     


      
    
        useEffect(() => {
            if (updatedUserId) {
                axios.get(`https://biometric-medical-check-up-backend.vercel.app/api/xray/get/${updatedUserId}`)
                    .then(result => {
                        setValue({
                            pid: result.data.pid,        
                            chestxray:result.data.chestxray,
                            filmno:result.data.filmno,
                            comment:result.data.comment,           
                            conclusion:result.data.conclusion,
                            registerdby:result.data.registerdby, 
                            updatedby:result.data.updatedby
                        });
                    })
                    .catch(err => console.log(err));
            }
        }, [updatedUserId]);
    
    const deletuser = (userid) => {
        setUserId(userid)
    }
    const handleUserDelet = async () => {
        try {
            const DeletUser = await axios.delete(`https://biometric-medical-check-up-backend.vercel.app/api/xray/delete/${userId}`)
            const response = DeletUser.data
            if (response.success) {
                toast.success(response.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handlechange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })

    }
    const UpadteUserData = (Updatedid) => {

        setUpdatedUserId(Updatedid)

    }

  
    const handleOnSubmit = async (e) => {
       
        e.preventDefault();
    
        try {
            const UpdatedUser = await axios.put(`https://biometric-medical-check-up-backend.vercel.app/api/xray/update/${updatedUserId}`,value)
            const response = UpdatedUser.data

            if (response.success) {
                toast.success(response.message)
                CloseRef.current.click();
                window.location.reload();
               
                Navigate('/Xray');
            }
            // console.log(response)
        } catch (error) {
            console.log(error)
        }
        // console.log(value) 
    }
    return (
        <>
            <Table Deletuser={deletuser} UpdatedUser={UpadteUserData}></Table>

            <Add></Add>
            <Update handleOnSubmit={handleOnSubmit} value={value} setValue={value} handlechange={handlechange}></Update>
            <Delete handleUserDelet={handleUserDelet} ></Delete>




        </>
    )
    }

