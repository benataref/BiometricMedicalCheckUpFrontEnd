import  { useRef, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';



export default function Add() {
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
    })
    const [file, setFile] = useState(null); // New state for file

    const handleOnchange = (e) => {
        if (e.target.name === 'photo') {
            setFile(e.target.files[0]); // Update file state with selected file
        } else {
            setValue({
                ...value,
                [e.target.name]: e.target.value
            });
        }
    };

    const CloseRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('photo', file); // Append file to FormData
        for (const key in value) {
            formData.append(key, value[key]); // Append other form values
        }

        try {
            const adduser = await axios.post('http://localhost:8000/api/patient/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data' // Required for file upload
                }
            });
            const response = adduser.data;
            if (response.success) {
                toast.success(response.message);
                CloseRef.current.click();
            }
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>


            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Employee</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true" ref={CloseRef}>&times;</button>
                            </div>
                            <div className="modal-body">
                            <div className="form-grid">
                            <div className="form-group">
                                        <label>Photo</label>
                                        <input type="file" name='photo' onChange={handleOnchange} className="form-control" />
                                    </div>
                                    <div className="partition">
                                    <div className="form-group">
                                    <label>Scan Finger print</label>
                                    <input type="text" value={value.fingerKey} name='fingerKey' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>passPort</label>
                                    <input type="text" value={value.passPort} name='passPort' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>labourId</label>
                                    <input type="labourId" value={value.passPort} name='labourId' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>pissuedD</label>
                                    <input type="text" value={value.pissuedD} name='pissuedD' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>pExpireD</label>
                                    <input type="text" value={value.pExpireD} name='pExpireD' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" value={value.fname} name='fname' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Father Name </label>
                                    <input type="text" value={value.mname} name='mname' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" value={value.lname} name='lname' onChange={handleOnchange} className="form-control" required />

                                </div>
                                <div className="form-group">
                                    <label>Nationality</label>
                                    <input type="text" value={value.nationality} name='nationality' onChange={handleOnchange} className="form-control" required />
                                </div>
                                 <div className="form-group">
                                    <label>Date Of Birth</label>
                                    <input type="date" value={value.dob} name='dob' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="partition">
                                <div className="form-group">
                                    <label>Gender</label>
                                    <input type="date" value={value.gender} name='gender' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Age</label>
                                    <input type="date" value={value.age} name='age' onChange={handleOnchange} className="form-control" required />
                                </div>
                                
                                <div className="form-group">
                                    <label>marrietalStatus</label>
                                    <input type="text" value={value.marrietalStatus} name='marrietalStatus' onChange={handleOnchange} className="form-control" required />
                                </div>
                              
                                <div className="form-group">
                                    <label>relogion</label>
                                    <input type="text" value={value.relogion} name='relogion' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>travelingto</label>
                                    <input type="text" value={value.travelingto} name='travelingto' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>jobtitel</label>
                                    <input type="date" value={value.jobtitel} name='jobtitel' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>cpr</label>
                                    <input type="text" value={value.cpr} name='cpr' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>agency</label>
                                    <input type="text" value={value.agency} name='agency' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" value={value.phone} name='phone' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>ispayed</label>
                                    <input type="text" value={value.ispayed} name='ispayed' onChange={handleOnchange} className="form-control" required />
                                </div>
                            </div></div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" value="Add" />
                            </div>
</div>
                        </form>
                    </div>
                </div>
            </div>



        </>
    )
}
