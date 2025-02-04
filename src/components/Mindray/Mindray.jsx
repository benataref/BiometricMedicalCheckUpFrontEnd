import  { useEffect, useState } from 'react'
import Table from '../Mindray/Table'
import Add from '../Mindray/Add'
//import AddImage2 from '../Patients/AddImage2'
//import AddImage from '../Patients/AddImage'

import Delete from'../Patients/Delete'
import Update from '../Mindray/Update'

import axios from 'axios'
import toast from 'react-hot-toast'

export default function Mindray() {
    const [userId, setUserId] = useState()
    const [updatedUserId, setUpdatedUserId] = useState()
    //console.log(updatedUserId)
    const [value, setValue] = useState({
          pid: '',
          lableName: '',
          file:''       
    });
    useEffect(() => {
        if (updatedUserId) {
            axios.get(`https://biometric-medical-check-up-backend.vercel.app/api/Mindray/get/${updatedUserId}`)
                .then(result => {
                    setValue({
                        pid:result.data.pid,
                        lableName:result.data.lableName,
                        file:result.data.file

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
            const DeletUser = await axios.delete(`https://biometric-medical-check-up-backend.vercel.app/api/Patients/delete/${userId}`)
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
            const UpdatedUser = await axios.put(`https://biometric-medical-check-up-backend.vercel.app/api/Mindray/update/${updatedUserId}`,value)
            const response = UpdatedUser.data

            if (response.success) {
                toast.success(response.message)
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
            <Update handleOnSubmit={handleOnSubmit} value={value} handlechange={handlechange}></Update>
            <Delete handleUserDelet={handleUserDelet} ></Delete>




        </>
    )
}
