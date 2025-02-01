import React, { useRef, useState, useEffect } from 'react';
import Select from 'react-select';
//import { useParams, useNavigate} from "react-router-dom";
//import Table from '../vital/Table'
import Add from '../vital/Add'
import Update from '../vital/Update'
import Delete from '../vital/Delete'
import axios from 'axios'
import toast from 'react-hot-toast'

import CombinedTable from './CombinedTable';

export default function Vital() {
    const [userId, setUserId] = useState()
    const [updatedUserId, setUpdatedUserId] = useState()
    //console.log(updatedUserId)
    const [value, setValue] = useState({
        pid:"",        
        medicalillness:"", 
        disablity:"",
        alergy:"",
        previousAdAc:"", 
        height:"", 
        weight:"",
        bmi:"",
        bloodpresur:"", 
        pulsmin:"",
        rrmin:"",
        colorvision:"",
        temp:"",
        spo2:"",
        vol:"",
        prythm:"",
        hearingLeft:"",        
        hearingright:"",
        visualacuty:"", 
        unaidedL6N:"",
        unaidedR6N:"",
        aidedL20N:"", 
        aidedR20N:"",
        unaidedL6D:"", 
        unaidedR6D:"", 
        aidedL20D:"",
        aidedR20D:"",
        generalapperance:"",
        Rsystem:"",
        cvSystem:"",
        ent:"", 
        heent:"",
        breast:"",
        precordium:"",
        lymphnodes:"",
        abdomen:"",
        hemia:"",
        exterimities:"",        
        skin:"",
        deformities:"",
        back:"",
        cns:"",
        genitourinary:"",        
        hydrocele:"",
        apperance:"", 
        behaviour:"",
        speech:"",
        cognition:"",
        memory:"", 
        mood:"",
        attention:"", 
        orientation:"", 
        concentration:"",
        thoughts:"",
        cranialnerve:"",
        MotorExam:"",
        sensorExam:"",
        supreficalReflexis:"", 
        dtr:"",
        otherCnsExam:"",
        finalconclution:"",
        createdBy:"",
        UpdatedBy:""
     });
     


      
    
        useEffect(() => {
            if (updatedUserId) {
                axios.get(`http://localhost:8000/api/vital/get/${updatedUserId}`)
                    .then(result => {
                        setValue({
                            
                            pid: result.data.pid,        
                            medicalillness: result.data.medicalillness, 
                            disablity: result.data.disablity,
                            alergy: result.data.alergy,
                            previousAdAc: result.data.previousAdAc, 
                            height: result.data.height, 
                            weight: result.data.weight,
                            bmi: result.data.bmi,
                            bloodpresur: result.data.bloodpresur, 
                            pulsmin: result.data.pulsmin,
                            rrmin: result.data.rrmin,
                            colorvision: result.data.colorvision,
                            temp: result.data.temp,
                            spo2: result.data.spo2,
                            vol: result.data.vol,
                            prythm: result.data.prythm,
                            hearingLeft: result.data.hearingLeft,        
                            hearingright: result.data.hearingright,
                            visualacuty: result.data.visualacuty, 
                            unaidedL6N: result.data.unaidedL6N,
                            unaidedR6N: result.data.unaidedR6N,
                            aidedL20N: result.data.aidedL20N, 
                            aidedR20N: result.data.aidedR20N,
                            unaidedL6D: result.data.unaidedL6D, 
                            unaidedR6D: result.data.unaidedR6D, 
                            aidedL20D: result.data.aidedL20D,
                            aidedR20D: result.data.aidedR20D,
                            generalapperance: result.data.generalapperance,
                            Rsystem: result.data.Rsystem,
                            cvSystem: result.data.cvSystem,
                            ent:result.data.ent, 
                            heent: result.data.heent,
                            breast: result.data.breast,
                            precordium: result.data.precordium,
                            lymphnodes:result.data.lymphnodes,
                            abdomen:result.data.abdomen,
                            hemia:result.data.hemia,
                            exterimities:result.data.exterimities,        
                            skin:result.data.skin,
                            deformities:result.data.deformities,
                            back:result.data.back,
                            cns:result.data.cns,
                            genitourinary:result.data.genitourinary,        
                            hydrocele:result.data.hydrocele,
                            apperance:result.data.apperance, 
                            behaviour:result.data.behaviour,
                            speech:result.data.speech,
                            cognition:result.data.cognition,
                            memory:result.data.memory, 
                            mood:result.data.mood,
                            attention:result.data.attention, 
                            orientation:result.data.oarientation, 
                            concentration:result.data.concentration,
                            thoughts:result.data.thoughts,
                            cranialnerve:result.data.cranialnerve,
                            MotorExam:result.data.MotorExam,
                            sensorExam:result.data.sensorExam,
                            supreficalReflexis:result.data.supreficalReflexis, 
                            dtr:result.data.dtr,
                            otherCnsExam:result.data.otherCnsExam,
                            finalconclution:result.data.finalconclution,
                            createdBy:result.data.createdBy,
                            UpdatedBy:result.data.UpdatedBy
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
            const DeletUser = await axios.delete(`http://localhost:8000/api/vital/delete/${userId}`)
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
            const UpdatedUser = await axios.put(`http://localhost:8000/api/vital/update/${updatedUserId}`,value)
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
            <CombinedTable Deletuser={deletuser} UpdatedUser={UpadteUserData}></CombinedTable>

            <Add></Add>
            <Update handleOnSubmit={handleOnSubmit} value={value} setValue={value} handlechange={handlechange}></Update>
            <Delete handleUserDelet={handleUserDelet} ></Delete>




        </>
    )
    }

