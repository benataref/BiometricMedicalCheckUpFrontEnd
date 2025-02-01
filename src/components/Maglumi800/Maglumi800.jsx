import  { useEffect, useState } from 'react'
import Table from '../Maglumi800/Table'
import Add from '../Maglumi800/Add'
//import AddImage2 from '../Patients/AddImage2'
//import AddImage from '../Patients/AddImage'

import Delete from'../Patients/Delete'
import Update from '../Maglumi800/Update'

import axios from 'axios'
import toast from 'react-hot-toast'

export default function Maglumi800() {
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
            axios.get(`http://localhost:8000/api/maglumi800/get/${updatedUserId}`)
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
            const DeletUser = await axios.delete(`http://localhost:8000/api/maglumi800/delete/${userId}`)
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
            const UpdatedUser = await axios.put(`http://localhost:8000/api/maglumi800/update/${updatedUserId}`,value)
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
