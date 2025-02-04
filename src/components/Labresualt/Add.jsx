import  { useRef, useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios'
import toast from 'react-hot-toast';



export default function Add() {
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
       
    })
    const [dropdownOptions, setDropdownOptions] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
   // const [option, setoption] = useState(null);
    const CloseRef = useRef()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://biometric-medical-check-up-backend.vercel.app/api/patient/get');
                console.log(response.data); // Check what data you receive
                // Check if the response.data is an array or object containing the array
                const options = Array.isArray(response.data)
                    ? response.data.map(option => ({
                          value: option._id, 
                          label:  `${option.fname} ${option.mname} ${option.lname}` 
                      }))
                    : [];
                setDropdownOptions(options);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleOnchange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
             pid: selectedOptions ? selectedOptions.value : ""
             
        })
    };

    const handleSelectChange = (selectedOption) => {
        setSelectedOptions(selectedOption);
        // Assuming the select component is for a field named `pid`
        setValue({
            ...value,
            pid: selectedOption ? selectedOption.value : ""
            
        });
       
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const adduser = await axios.post('https://biometric-medical-check-up-backend.vercel.app/api/labresult/create', value)
            const response = adduser.data
            if (response.success) {
                toast.success(response.Message)
                CloseRef.current.click()
                window.location.reload();
            }
            console.log(response)
        } catch (error) {
            console.log(error)
        }


    };
    return (
        <>


            <div id="addEmployeeModal" className="modal fade" tabIndex="-1">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Labratory Resultes</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true" ref={CloseRef}>&times;</button>
                            </div>
                            <div className="modal-body">
                            <div className="form-grid">
                           
                            
                             <div className="partition">
                                <div className="partition">
                                
                                <div className="form-group">

                                    <label>patient Id</label>
                                    <div className="col-sm-10">
                                    <Select
                                        // isMulti
                                        name='pid'
                                        value={selectedOptions}
                                        onChange={handleSelectChange}
                                        options={dropdownOptions}
                                        isClearable
                                        hideSelectedOptions={false}
                                    />
                                   
                             </div></div>
                             <h5 className="heading">Blood Tests</h5>
                             <h5> hematology</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Blood Group</label>
                                    <input type="text" value={value.bloodGroup} name='bloodGroup' onChange={handleOnchange} className="form-control" />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Rh</label>
                                    <input type="text" value={value.rh} name='rh' onChange={handleOnchange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Hemoglobin </label>
                                    <input type="text" value={value.hemoglobin} name='hemoglobin' onChange={handleOnchange} className="form-control"  />

                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Plateletes</label>
                                    <input type="text" value={value.plateletes} name='plateletes' onChange={handleOnchange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">WBC</label>
                                    <input type="text" value={value.wbc} name='wbc' onChange={handleOnchange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">RBC</label>
                                    <input type="text" value={value.rbc} name='rbc' onChange={handleOnchange} className="form-control"  />
                                </div> </div>
                                </div>
                                
                                <div className="partition">
                               
                                <h5>Serology</h5>
                                
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">HIV& ll</label>
                                    <input type="text" value={value.hivll} name='hivll' onChange={handleOnchange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Anti HCV</label>
                                    <input type="text" value={value.antihcv} name='antihcv' onChange={handleOnchange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">TPHA </label>
                                    <input type="text" value={value.tpha} name='tpha' onChange={handleOnchange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">HBs Ag</label>
                                    <input type="text" value={value.hbsag} name='hbsag' onChange={handleOnchange} className="form-control"  />

                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">VDRL</label>
                                    <input type="text" value={value.vdrl} name='vdrl' onChange={handleOnchange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Pregnancy</label>
                                    <input type="text" value={value.pregnancy} name='pregnancy' onChange={handleOnchange} className="form-control"  />
                                </div> </div>
                                </div> </div>
                                <div className="partition">
                                <div className="partition">
                                <h5>Urine</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Appearance</label>
                                    <input type="text" value={value.appearance} name='appearance' onChange={handleOnchange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Color </label>
                                    <input type="text" value={value.color} name='color' onChange={handleOnchange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">PH </label>
                                    <input type="text" value={value.ph} name='ph' onChange={handleOnchange} className="form-control"  />

                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Sp.Gravity</label>
                                    <input type="text" value={value.spgravity} name='spgravity' onChange={handleOnchange} className="form-control"  />
                                </div> </div></div>
                                <div className="partition">
                                <h5>Chemical Examination</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Keton</label>
                                    <input type="text" value={value.keton} name='keton' onChange={handleOnchange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Sugar</label>
                                    <input type="text" value={value.sugar} name='sugar' onChange={handleOnchange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Albumin </label>
                                    <input type="text" value={value.alnumin} name='alnumin' onChange={handleOnchange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Nitrate</label>
                                    <input type="text" value={value.nitrate} name='nitrate' onChange={handleOnchange} className="form-control"  />

                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Leukocyte</label>
                                    <input type="text" value={value.leukocyte} name='leukocyte' onChange={handleOnchange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Blood</label>
                                    <input type="text" value={value.blood} name='blood' onChange={handleOnchange} className="form-control"  />
                                </div> </div></div>
                                <div className="partition">
                                <h5>Microscopic Examination</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">RBC/hpf</label>
                                    <input type="text" value={value.rbchpf} name='rbchpf' onChange={handleOnchange} className="form-control"  />
                                </div> </div>

                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">WBC/hpf</label>
                                    <input type="text" value={value.wbchpf} name='wbchpf' onChange={handleOnchange} className="form-control"  />
                                </div></div>
                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Epith.Cell/lpf </label>
                                    <input type="text" value={value.epithcelllpf} name='epithcelllpf' onChange={handleOnchange} className="form-control"  />
                                
                                </div> </div></div></div>
                                <div className="partition">
                                <div className="partition">
                                <h5>Stool Routine</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Helminths</label>
                                    <input type="text" value={value.heminths} name='heminths' onChange={handleOnchange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">CYST</label>
                                    <input type="text" value={value.cyst} name='cyst' onChange={handleOnchange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">OVA</label>
                                    <input type="text" value={value.ova} name='ova' onChange={handleOnchange} className="form-control"  />
                                </div> </div>
                                <h5>Bio Chemistry</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">RBS/FBS(T) </label>
                                    <input type="text" value={value.rbsfbs} name='rbsfbs' onChange={handleOnchange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Creatine(T) </label>
                                    <input type="text" value={value.creatine} name='creatine' onChange={handleOnchange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">LFT</label>
                                    <input type="text" value={value.lft} name='lft' onChange={handleOnchange} className="form-control"  />

                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">SGOT</label>
                                    <input type="text" value={value.sgot} name='sgot' onChange={handleOnchange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">SGPT</label>
                                    <input type="text" value={value.sgpt} name='sgpt' onChange={handleOnchange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">ALP</label>
                                    <input type="text" value={value.alp} name='alp' onChange={handleOnchange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">BUN </label>
                                    <input type="text" value={value.bun} name='bun' onChange={handleOnchange} className="form-control" />
                                </div></div>
                                </div>
                                <div className="partition">
                                <h5>Thick Film for</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Malaria </label>
                                    <input type="text" value={value.malaria} name='malaria' onChange={handleOnchange} className="form-control"  />

                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Micro Filaria</label>
                                    <input type="text" value={value.microfilaria} name='microfilaria' onChange={handleOnchange} className="form-control"  />
                                </div> </div>
                                </div>
                              
                              
                        </div>
                        <div className="partition">
                        <div className="partition">
                                <h5>Other</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">other </label>
                                    <textarea value={value.other} name="other" className="form-control" onChange={handleOnchange} rows="10" required></textarea>
                                </div> </div></div>
                                <div className="partition">
                                <h5>comment</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">comment</label>
                                    <textarea value={value.comment} name="comment" className="form-control" onChange={handleOnchange} rows="10" required></textarea>
                                    </div>
                                </div> </div>
                            
                        <h5>Activity Log</h5>
                        <div className="form-group row">
    <label className="col-sm-2 col-form-label">Conclusion</label>
    <div className="col-sm-10">
        <div className="custom-radio-group">
            <label className={`custom-radio ${value.coclusionStatus === 'Fit' ? 'selected' : ''}`}>
                <input
                    type="radio"
                    id="fit"
                    name="coclusionStatus"
                    value="Fit"
                    checked={value.coclusionStatus === 'Fit'}
                    onChange={handleOnchange}
                />
                <span className="custom-radio-label">Fit</span>
            </label>
            <label className={`custom-radio ${value.coclusionStatus === 'Unfit' ? 'selected' : ''}`}>
                <input
                    type="radio"
                    id="unfit"
                    name="coclusionStatus"
                    value="Unfit"
                    checked={value.coclusionStatus === 'Unfit'}
                    onChange={handleOnchange}
                />
                <span className="custom-radio-label">Unfit</span>
            </label>
            <label className={`custom-radio ${value.coclusionStatus === 'Pending' ? 'selected' : ''}`}>
                <input
                    type="radio"
                    id="pending"
                    name="coclusionStatus"
                    value="Pending"
                    checked={value.coclusionStatus === 'Pending'}
                    onChange={handleOnchange}
                />
                <span className="custom-radio-label">Pending</span>
            </label>
        </div>
    </div>
</div>
                               
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Registered By</label>
                                    <input type="text" value={value.registerdby} name='registerdby' onChange={handleOnchange} className="form-control"required/>
                                </div> </div>
                                
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Approved By</label>
                                    <input type="text" value={value.aprovedby} name='aprovedby' onChange={handleOnchange} className="form-control"required/>
                                </div></div>
                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Aproved Date</label>
                                    <input type="date" value={value.aproveddate} name='aproveddate' onChange={handleOnchange} className="form-control"required  />
                                </div></div>
                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">coclusionStatus</label>
                                    <input type="text" value={value.coclusionStatus} name='coclusionStatus' onChange={handleOnchange} className="form-control"required/>
                                </div> 
                            </div></div> </div></div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" value="Add" />
                            </div>
                            
                        </form>
                    
                    </div>
                </div>
            </div>



        </>
    );
}
