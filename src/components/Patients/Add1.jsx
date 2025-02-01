import  {  useRef, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
export default function Add1() {
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


    const [showPhoto, setShowPhoto] = useState(false); 
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    
    const handleOnchange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    };

  
    


   

 

    const startCamera = () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
            })
            .catch(err => console.error(err));
    };
  

    const captureImage = () => {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(blob => {
            setPhoto(blob);
            setShowPhoto(true); 
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
         //   if (fingerKey) {
              //  formData.append('fingerKey', fingerKey); // Append fingerprint data
          //  }
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
                            
                                      
                                  
                              {/*    <div>
      <h5>Biometric Data</h5>
      <button onClick={handleexe}>Capture Fingure</button>
      <input type="text" value={value.fingerKey} name='fingerKey' onChange={handleOnchange} className="form-control"  required />

    </div> 
                  */}             <div className="partition">
                          <div className="form-group">
                                    <label>FingePrintData</label>
                                    <input type="text" value={value.fingerKey} name='fingerKey' onChange={handleOnchange} className="form-control"  required />
                                </div>
                          <div className="form-group">
                                    <label>Pass.Port No</label>
                                    <input type="text" value={value.passPort} name='passPort' onChange={handleOnchange} className="form-control"  required />
                                </div>
                                <div className="form-group">
                                    <label>Labour Id</label>
                                    <input type="text" value={value.labourId} name='labourId' onChange={handleOnchange} className="form-control"  required />
                                </div>
                                <div className="form-group">
                                    <label>Pass.Port Issued Date</label>
                                    <input type="date" value={value.pissuedD} name='pissuedD' onChange={handleOnchange} className="form-control"  />
                                </div>
                                <div className="form-group">
                                    <label>Pass.Port Expire Date</label>
                                    <input type="date" value={value.pExpireD} name='pExpireD' onChange={handleOnchange} className="form-control"  />
                                </div>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" value={value.fname} name='fname' onChange={handleOnchange} className="form-control" />
                                </div>
                                
                                <div className="form-group">
                                    <label>Father Name </label>
                                    <input type="text" value={value.mname} name='mname' onChange={handleOnchange} className="form-control"  />
                                </div></div><div className="partition">
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
                                    <label>Marrietal Status</label>
                                    <input type="text" value={value.marrietalStatus} name='marrietalStatus' onChange={handleOnchange} className="form-control"  />
                                </div></div>
                                <div className="partition">
                                <div className="form-group">
                                    <label>Religion</label>
                                    <input type="text" value={value.relogion} name='relogion' onChange={handleOnchange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Traveling To</label>
                                    <input type="text" value={value.travelingto} name='travelingto' onChange={handleOnchange} className="form-control"/>
                                </div>
                               
                                <div className="form-group">
                                    <label>Job Titel</label>
                                    <input type="taxt" value={value.jobtitel} name='jobtitel' onChange={handleOnchange} className="form-control"  />
                                </div>
                                
                                <div className="form-group">
                                    <label>cpr</label>
                                    <input type="text" value={value.cpr} name='cpr' onChange={handleOnchange} className="form-control"  />
                                </div>
                                <div className="form-group">
                                    <label>Agency</label>
                                    <input type="text" value={value.agency} name='agency' onChange={handleOnchange} className="form-control"  />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" value={value.phone} name='phone' onChange={handleOnchange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Is Payed</label>
                                    <input type="text" value={value.ispayed} name='ispayed' onChange={handleOnchange} className="form-control"  />
                                </div></div>
                               
                                
                                       
            
                                        <div className="partition">
                                    <label>Photo</label>
                                    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        {!showPhoto && (
                                            <>
                                                <video ref={videoRef} width="120%" height="auto" autoPlay style={{ marginBottom: '10px' }}></video>
                                                <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
                                               
                                            </>
                                        )}
                                        {showPhoto && photo && (
                                            <img src={URL.createObjectURL(photo)} alt="Captured" width="100%" height="auto" />
                                        )}
                                         <div style={{ display: 'flex', gap: '10px' }}>
                                                   
                                                </div>
                                    </div> </div>
                                    <button type="button" onClick={startCamera}>Start Camera</button>
                                    <button type="button" onClick={captureImage}>Capture Image</button>  
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="appointment-btn" value="Add" />
                            </div></div>
                           </div>
                        </form>
                    </div>
                </div>
            </div>



        </>
    )
}
