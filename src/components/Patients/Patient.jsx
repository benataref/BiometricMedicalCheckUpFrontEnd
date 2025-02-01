import  { useEffect, useState } from 'react'
import Table from '../Patients/Table'
import Add1 from '../Patients/Add1'
//import AddImage2 from '../Patients/AddImage2'
//import AddImage from '../Patients/AddImage'

import Delete from'../Patients/Delete'
import Update from '../Patients/Update'

import axios from 'axios'
import toast from 'react-hot-toast'

export default function Patient() {
    const [userId, setUserId] = useState()
    const [updatedUserId, setUpdatedUserId] = useState()
    //console.log(updatedUserId)
    const [value, setValue] = useState({
        photo:'',
        fingerKey:'',
        passPort :'',
        labourId :'',
        pissuedD:'',
        pExpireD:'',
        fname:'', 
        mname :'',
        lname:'', 
        nationality:'',
        dob :'',
        gender:'',
        age:'',
        marrietalStatus:'',
        relogion:'',
        travelingto :'',
        jobtitel :'',
        cpr:'',
        agency:'',
        phone:'',
        ispayed:''
    });
    useEffect(() => {
        if (updatedUserId) {
            axios.get(`http://localhost:8000/api/patient/get/${updatedUserId}`)
                .then(result => {
                    setValue({
                        photo:result.data.photo,
                        fingerKey:result.data.fingerKey,
                        passPort :result.data.passPort,
                        labourId :result.data.labourId,
                        pissuedD:result.data.pissuedD,
                        pExpireD:result.data.pExpireD,
                        fname:result.data.fname, 
                        mname :result.data.mname,
                        lname:result.data.lname, 
                        nationality:result.data.nationality,
                        dob :result.data.dob,
                        gender:result.data.gender,
                        age:result.data.age,
                        marrietalStatus:result.data.marrietalStatus,
                        relogion:result.data.relogion,
                        travelingto :result.data.travelingto,
                        jobtitel :result.data.jobtitel,
                        cpr:result.data.cpr,
                        agency:result.data.agency,
                        phone:result.data.phone,
                        ispayed:result.data.ispayed
                       
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
            const DeletUser = await axios.delete(`http://localhost:8000/api/patient/delete/${userId}`)
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
            const UpdatedUser = await axios.put(`http://localhost:8000/api/patient/update/${updatedUserId}`,value)
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

            <Add1></Add1>
            <Update handleOnSubmit={handleOnSubmit} value={value} handlechange={handlechange}></Update>
            <Delete handleUserDelet={handleUserDelet} ></Delete>




        </>
    )
}
