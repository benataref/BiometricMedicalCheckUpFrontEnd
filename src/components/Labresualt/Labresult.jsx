import  {  useState, useEffect } from 'react';

//import { useParams, useNavigate} from "react-router-dom";
//import Table from '../vital/Table'
import Add from '../Labresualt/Add'
import Update from '../Labresualt/Update'
import Delete from '../Labresualt/Delete'
import axios from 'axios'
import toast from 'react-hot-toast'

import Table from './Table';

export default function Vital() {
    const [userId, setUserId] = useState()
    const [updatedUserId, setUpdatedUserId] = useState()
    //console.log(updatedUserId)
    const [value, setValue] = useState({
        pid:'',
        bloodGroup:'',
        rh:'' ,
        hemoglobin:'' ,
        plateletes:'',
        wbc:'',
        rbc:'', 
        rbsfbs:'',
        creatine:'', 
        lft:'', 
        sgot:'' ,
        sgpt:'' ,
        alp:'',
        bun:'',
        malaria:'',
        microfilaria:'',
        hivll:'' ,
        antihcv:'' ,
        tpha:'',
        hbsag:'',
        vdrl:'',
        pregnancy:'',
        appearance:'', 
        color:'',
        ph:'' ,
        spgravity:'' ,
        keton:'',
        sugar:'',
        alnumin:'', 
        nitrate:'', 
        leukocyte:'', 
        blood:'',
        rbchpf:'',
        wbchpf:'',
        epithcelllpf:'',
        heminths:'',
        cyst:'',
        ova:'' ,
        other:'' ,
        comment:'',
        registerdby:'',
        aprovedby:'',
        aproveddate:'',
        coclusionStatus:''
     });
     


      
    
        useEffect(() => {
            if (updatedUserId) {
                axios.get(`https://biometric-medical-check-up-backend.vercel.app/api/labresult/get/${updatedUserId}`)
                    .then(result => {
                        setValue({
                            
                            pid:result.data.pid,
                            bloodGroup:result.data.bloodGroup,
                            rh:result.data.rh ,
                            hemoglobin:result.data.hemoglobin,
                            plateletes:result.data.plateletes,
                            wbc:result.data.wbc,
                            rbc:result.data.rbc, 
                            rbsfbs:result.data.rbsfbs,
                            creatine:result.data.creatine, 
                            lft:result.data.lft, 
                            sgot:result.data.sgot,
                            sgpt:result.data.sgpt,
                            alp:result.data.alp,
                            bun:result.data.bun,
                            malaria:result.data.malaria,
                            microfilaria:result.data.microfilaria,
                            hivll:result.data.hivll ,
                            antihcv:result.data.antihcv ,
                            tpha:result.data.tpha,
                            hbsag:result.data.hbsag,
                            vdrl:result.data.vdrl,                            
                            pregnancy:result.data.pregnancy,
                            appearance:result.data.appearance, 
                            color:result.data.color,                              
                            ph:result.data.ph,
                            spgravity: result.data.spgravity, 
                            keton: result.data.keton,                               
                            sugar: result.data.sugar,
                            alnumin: result.data.alnumin, 
                            nitrate: result.data.nitrate, 
                            leukocyte: result.data.leukocyte, 
                            blood: result.data.blood,
                            rbchpf: result.data.rbchpf ,
                            wbchpf: result.data.wbchpf,
                            epithcelllpf: result.data.epithcelllpf,
                            heminths: result.data.heminths,
                            cyst: result.data.cyst,
                            ova: result.data.ova,
                            other : result.data.other,
                            comment: result.data.comment,
                            registerdby: result.data.registerdby,
                            aprovedby: result.data.aprovedby,                            
                            aproveddate: result.data.aproveddate,
                            coclusionStatus: result.data.coclusionStatus
                            
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
            const DeletUser = await axios.delete(`https://biometric-medical-check-up-backend.vercel.app/api/labresult/delete/${userId}`)
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
            const UpdatedUser = await axios.put(`https://biometric-medical-check-up-backend.vercel.app/api/labresult/update/${updatedUserId}`,value)
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
            <Update handleOnSubmit={handleOnSubmit} value={value} setValue={value} handlechange={handlechange}></Update>
            <Delete handleUserDelet={handleUserDelet} ></Delete>




        </>
    )
    }

