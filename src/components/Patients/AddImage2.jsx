import  {  useRef, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';



export default function AddImage2() {
    const [photo, setPhoto] = useState(null);
   

    //const [fingerKey, setFingerKey] = useState();
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

/* 
    const handleProcessFingerprint = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/patient/processFingerprint');
          console.log(response.data);
        } catch (error) {
          console.error('Error capturing fingerprint:', error);
        }
      }; */
    
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    
    const handleOnchange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    };

   /*  const verifyFingerprint = async (patientId) => {
        try {
            const response = await axios.post('http://localhost:8000/api/patient/verify-fingerprint', {
                patientId,
                newFingerprintData: value.fingerKey // Send the captured fingerprint data
            });
            console.log('Verification response:', response.data);
        } catch (error) {
            console.error('Error verifying fingerprint:', error);
        }
    }; */
      


   

  /*   useEffect(() => {
        // Fetch device data if necessary
        axios.get('/device-data')
            .then(response => setValue(prevState => ({
                ...prevState,
                // Assuming the response structure matches this update
                ...response.data.data
            })))
            .catch(error => console.error('Error fetching device data', error));
    }, []); */

    const startCamera = () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
            })
            .catch(err => console.error(err));
    };
  /*  const handleexe=()=>{
    axios.get('http://localhost:8000/api/patient/exe')

  }  */

    const captureImage = () => {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(blob => {
            setPhoto(blob);
        }, 'image/jpeg');
    };
  

    const CloseRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        console.log('Form data:', value); // Log the value object
        console.log('Captured image blob:', photo); // Log the image blob
    
        try {
            const formData = new FormData();
    
            if (photo) {
                formData.append('photo', photo, 'photo.jpg'); // Append image blob
            }
           // if (fingerKey) {
              //  formData.append('fingerKey', fingerKey); // Append fingerprint data
           // }
            for (const [key, val] of Object.entries(value)) {
                formData.append(key, val);
            }
    
            const response = await axios.post('http://localhost:8000/api/patient/create1', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    
            if (response.data.success) {
                toast.success('Image uploaded successfully!');
                window.location.reload();
            } else {
                toast.error('Failed to upload image.');
            }
        } catch (error) {
            console.error('Error during submission:', error);
            toast.error('An error occurred.');
        }
    };
    
   
    return (
        <>


            <div id="addEmployeeModal" className="modal fade">
            <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Client</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true" ref={CloseRef}>&times;</button>
                            </div>
                            <div className="modal-body">
                            <div className="form-grid">
                            
                                        <label>Photo</label>
                                        <div>
            <button  type="button" onClick={startCamera}>Start Camera</button>
            <video ref={videoRef} width="100" height="80" autoPlay></video>
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
            <button onClick={captureImage}>Capture Image</button>
            {photo && <img src={URL.createObjectURL(photo)}  alt="Captured" width="100" height="100" />}

                                    </div>        
                                  
                              {/*    <div>
      <h5>Biometric Data</h5>
      <button onClick={handleexe}>Capture Fingure</button>
      <input type="text" value={value.fingerKey} name='fingerKey' onChange={handleOnchange} className="form-control"  required />

    </div> 
                  */}            
                           <div className="form-group">
                                    <label>fingerKey</label>
                                    <input type="text" value={value.fingerKey} name='fingerKey' onChange={handleOnchange} className="form-control"  required />
                                </div>
                          <div className="form-group">
                                    <label>passPort</label>
                                    <input type="text" value={value.passPort} name='passPort' onChange={handleOnchange} className="form-control"  required />
                                </div>
                                <div className="form-group">
                                    <label>labourId</label>
                                    <input type="text" value={value.labourId} name='labourId' onChange={handleOnchange} className="form-control"  required />
                                </div>
                                <div className="form-group">
                                    <label>pissuedD</label>
                                    <input type="date" value={value.pissuedD} name='pissuedD' onChange={handleOnchange} className="form-control"  />
                                </div>
                                <div className="form-group">
                                    <label>pExpireD</label>
                                    <input type="date" value={value.pExpireD} name='pExpireD' onChange={handleOnchange} className="form-control"  />
                                </div>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" value={value.fname} name='fname' onChange={handleOnchange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Father Name </label>
                                    <input type="text" value={value.mname} name='mname' onChange={handleOnchange} className="form-control"  />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" value={value.lname} name='lname' onChange={handleOnchange} className="form-control" />

                                </div>
                                <div className="form-group">
                                    <label>Nationality</label>
                                    <input type="text" value={value.nationality} name='nationality' onChange={handleOnchange} className="form-control"  />
                                </div>
                                 <div className="form-group">
                                    <label>Date Of Birth</label>
                                    <input type="date" value={value.dob} name='dob' onChange={handleOnchange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Gender</label>
                                    <input type="text" value={value.gender} name='gender' onChange={handleOnchange} className="form-control"  />
                                </div>
                                <div className="form-group">
                                    <label>Age</label>
                                    <input type="number" value={value.age} name='age' onChange={handleOnchange} className="form-control"  />
                                </div>
                                
                                <div className="form-group">
                                    <label>marrietalStatus</label>
                                    <input type="text" value={value.marrietalStatus} name='marrietalStatus' onChange={handleOnchange} className="form-control"  />
                                </div>
                              
                                <div className="form-group">
                                    <label>relogion</label>
                                    <input type="text" value={value.relogion} name='relogion' onChange={handleOnchange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>travelingto</label>
                                    <input type="text" value={value.travelingto} name='travelingto' onChange={handleOnchange} className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>jobtitel</label>
                                    <input type="taxt" value={value.jobtitel} name='jobtitel' onChange={handleOnchange} className="form-control"  />
                                </div>
                                <div className="form-group">
                                    <label>cpr</label>
                                    <input type="text" value={value.cpr} name='cpr' onChange={handleOnchange} className="form-control"  />
                                </div>
                                <div className="form-group">
                                    <label>agency</label>
                                    <input type="text" value={value.agency} name='agency' onChange={handleOnchange} className="form-control"  />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" value={value.phone} name='phone' onChange={handleOnchange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>ispayed</label>
                                    <input type="text" value={value.ispayed} name='ispayed' onChange={handleOnchange} className="form-control"  />
                                </div>
                            </div></div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" value="Add" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>



        </>
    )
}
