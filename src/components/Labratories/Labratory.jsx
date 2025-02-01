import  {useEffect ,useState} from "react";
//import { useParams, useNavigate} from "react-router-dom";
import Table from '../Labratories/Table'
import Add from '../Labratories/Add'
import Update from '../Labratories/Update'
import Delete from '../Labratories/Delete'
import axios from 'axios'
import toast from 'react-hot-toast'


export default function Labratory() {
    const [userId, setUserId] = useState()
    const [updatedUserId, setUpdatedUserId] = useState()
    //console.log(updatedUserId)
    const [value, setValue] = useState({
        name: "",
        category : "",
        price: "",
        status: "",
        regDate:""  });



        useEffect(() => {
            if (userId) {
                axios.get(`http://localhost:8000/api/labratory/get/${userId}`)
                    .then(result => {
                        setValue({
                            name: result.data.name,
                            category: result.data.category,
                            price: result.data.price,
                            status: result.data.status,
                            regDate: result.data.regDate
                        });
                    })
                    .catch(err => console.log(err));
            }
        }, [userId]);
    
        useEffect(() => {
            if (updatedUserId) {
                axios.get(`http://localhost:8000/api/labratory/get/${updatedUserId}`)
                    .then(result => {
                        setValue({
                            name: result.data.name,
                            category: result.data.category,
                            price: result.data.price,
                            status: result.data.status,
                            regDate: result.data.regDate
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
            const DeletUser = await axios.delete(`http://localhost:8000/api/labratory/delete/${userId}`)
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

   /* useEffect(()=>{
        axios.get('http://localhost:8000/api/labratory/getone/'+userId) 
        .then(result=>{console.log(result)
            
            setValue({
                name: result.data.name,
                category: result.data.category,
                price: result.data.price,
                status: result.data.status,
                regDate: result.data.regDate
            });


        })

        .catch(err=>console.log(err))
      }, [userId])
   */
    const handleOnSubmit = async (e) => {
       
        e.preventDefault();
    
        try {
            const UpdatedUser = await axios.put(`http://localhost:8000/api/labratory/update/${updatedUserId}`,value)
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

