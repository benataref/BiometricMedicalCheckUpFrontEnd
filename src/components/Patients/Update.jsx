import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Update({ handleOnSubmit, value, handlechange }) {
    console.log("Update Component Props:", { handleOnSubmit, value, handlechange });

  /* const [photo, setPhoto] = useState(null);
  
    useEffect(() => {
       
        const fetchImageUrls = async () => {
            try {
              
                const response = await axios.get(`http://localhost:8000/uploads/${photo}`);
                console.log("Fetched Image Data:", response.data);
                setPhoto(response.data[0].photo);
            } catch (error) {
               
                console.error('Error fetching image URLs:', error.response ? error.response.data : error.message);
            }
        };

        if (photo) {
            fetchImageUrls();
        }
    }, [photo]); 
    console.log("Photo URL:", photo); */
 
    
    return (
        <>


            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleOnSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Update User</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                            <div className="form-grid">
                            <div className="form-group">
                                    <label>Photo</label>
                                    <div>
                                       
                                 <img src={`https://biometric-medical-check-up-front-end.vercel.app/${value.photo}`} alt="Fetched" style={{ width: '100%', height: 'auto' }} />
                               
                                    </div>
                                </div>
                                <div className="partition">
                          <div className="form-group">
                                    <label>Scan Finger print</label>
                                    <input type="text" value={value.fingerKey} name='fingerKey' onChange={handlechange} className="form-control"  />
                                </div>
                                <div className="form-group">
                                    <label>Pass.Port No.</label>
                                    <input type="text" value={value.passPort} name='passPort' onChange={handlechange} className="form-control"  />
                                </div>
                                <div className="form-group">
                                    <label>Labour Id</label>
                                    <input type="text" value={value.labourId} name='labourId' onChange={handlechange} className="form-control"  />
                                </div>
                                <div className="form-group">
                                    <label>Pass.Port Issued Date</label>
                                    <input type="date" value={value.pissuedD} name='pissuedD' onChange={handlechange} className="form-control"  />
                                </div>
                                <div className="form-group">
                                    <label>Pass.Port Expire Date</label>
                                    <input type="date" value={value.pExpireD} name='pExpireD' onChange={handlechange} className="form-control"  />
                                </div>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" value={value.fname} name='fname' onChange={handlechange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Father Name </label>
                                    <input type="text" value={value.mname} name='mname' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="partition">
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" value={value.lname} name='lname' onChange={handlechange} className="form-control" />

                                </div>
                                <div className="form-group">
                                    <label>Nationality</label>
                                    <input type="text" value={value.nationality} name='nationality' onChange={handlechange} className="form-control"  />
                                </div>
                                 <div className="form-group">
                                    <label>Date Of Birth</label>
                                    <input type="date" value={value.dob} name='dob' onChange={handlechange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Gender</label>
                                    <input type="text" value={value.gender} name='gender' onChange={handlechange} className="form-control"  />
                                </div>
                                <div className="form-group">
                                    <label>Age</label>
                                    <input type="number" value={value.age} name='age' onChange={handlechange} className="form-control"  />
                                </div>
                                
                                <div className="form-group">
                                    <label>Marrietal Status</label>
                                    <input type="text" value={value.marrietalStatus} name='marrietalStatus' onChange={handlechange} className="form-control"  />
                                </div>
                              
                                <div className="form-group">
                                    <label>Religion</label>
                                    <input type="text" value={value.relogion} name='relogion' onChange={handlechange} className="form-control" />
                                </div></div>
                                <div className="partition">
                                <div className="form-group">
                                    <label>Traveling To</label>
                                    <input type="text" value={value.travelingto} name='travelingto' onChange={handlechange} className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Jo Title</label>
                                    <input type="taxt" value={value.jobtitel} name='jobtitel' onChange={handlechange} className="form-control"  />
                                </div>
                                <div className="form-group">
                                    <label>cpr</label>
                                    <input type="text" value={value.cpr} name='cpr' onChange={handlechange} className="form-control"  />
                                </div>
                                <div className="form-group">
                                    <label>Agency</label>
                                    <input type="text" value={value.agency} name='agency' onChange={handlechange} className="form-control"  />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" value={value.phone} name='phone' onChange={handlechange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Is payed</label>
                                    <input type="text" value={value.ispayed} name='ispayed' onChange={handlechange} className="form-control"  />
                                </div></div>
                            </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" value="Update" data-bs-dismiss="modal" />
                            
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </>
    )
}
