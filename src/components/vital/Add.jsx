import  { useRef, useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios'
import toast from 'react-hot-toast';



export default function Add() {
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
       
    })
    const [dropdownOptions, setDropdownOptions] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
   // const [option, setoption] = useState(null);
    const CloseRef = useRef()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://biometric-medical-check-up-front-end.vercel.app/api/patient/get');
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
            const adduser = await axios.post('https://biometric-medical-check-up-front-end.vercel.app/api/vital/create', value)
            const response = adduser.data
            if (response.success) {
                toast.success(response.Message)
             //   CloseRef.current.click()
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
                                <h4 className="modal-title">Add client Examination</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true" ref={CloseRef}>&times;</button>
                            </div>
            <div className="modal-body">
                  <div className="form-grid">
                  <div className="partition">
                 
                           
                               <h5>Past Medical History</h5>
                               <div className="form-group row">
                               <div className="col-sm-10">
                          
                               <label >patient Id</label>
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
                               </div></div></div>
                               <div className="form-group row">
                               <div className="col-sm-10">
                                    <label >Medical Illness</label>
                                    <input type="text" value={value.medicalillness} name='medicalillness' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Disablity</label>
                                    <input type="text" value={value.passPort} name='disablity' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Allergy</label>
                                    <input type="text" value={value.alergy} name='alergy' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Previous Admission or Accident</label>
                                    <input type="text" value={value.previousAdAc} name='previousAdAc' onChange={handleOnchange} className="form-control" required />
                                </div></div><div className="partition">
                                <div className="partition">
                                <h5>Gastro Intestinal</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Abdomen</label>
                                    <input type="text" value={value.abdomen} name='abdomen' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Hernia</label>
                                    <input type="text" value={value.hemia} name='hemia' onChange={handleOnchange} className="form-control" required />
                                </div></div></div>
                                <h5>Mental Status Examination</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Apperance</label>
                                    <input type="text" value={value.apperance} name='apperance' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Behaviour</label>
                                    <input type="text" value={value.behaviour} name='behaviour' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Speech</label>
                                    <input type="text" value={value.speech} name='speech' onChange={handleOnchange} className="form-control" required />
                                </div></div></div>
                                
                                </div>
                                <div className="partition">
                              
                                <h5>Medical Examination</h5>

                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Height</label>
                                    <input type="text" value={value.height} name='height' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Weight </label>
                                    <input type="text" value={value.weight} name='weight' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">BMI</label>
                                    <input type="text" value={value.bmi} name='bmi' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Blood Pressure</label>
                                    <input type="text" value={value.bloodpresur} name='bloodpresur' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                               
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Pulse/min</label>
                                    <input type="text" value={value.pulsmin} name='pulsmin' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Pulse Vol.</label>
                                    <input type="text" value={value.vol} name='vol' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Pulse Rythm</label>
                                    <input type="text" value={value.prythm} name='prythm' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">RR/min</label>
                                    <input type="text" value={value.rrmin} name='rrmin' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                              
                           
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Temprature  </label>
                                    <input type="text" value={value.temp} name='temp' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">                               
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">spo2</label>
                                    <input type="text" value={value.spo2} name='spo2' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                              </div>
                                
                                <div className="partition">
                                <h5 >visual Acuty AIDED/UNAIDED </h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Visual Acuty</label>
                                    <input type="text" value={value.visualacuty} name='visualacuty' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="partition">
                                <h8> Near</h8>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >UNAIDED Left 6/ </label>
                                    <input type="text" value={value.unaidedL6N} name='unaidedL6N' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >UNAIDED Right 6/</label>
                                    <input type="text" value={value.unaidedR6N} name='unaidedR6N' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >AIDED Left 20/</label>
                                    <input type="text" value={value.aidedL20N} name='aidedL20N' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >AIDED Right 20/ </label>
                                    <input type="text" value={value.aidedR20N} name='aidedR20N' onChange={handleOnchange} className="form-control" required />
                                </div></div></div>
                                <div className="partition">
                                <h8> Distant</h8>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >UNAIDED Left 6/</label>
                                    <input type="text" value={value.unaidedL6D} name='unaidedL6D' onChange={handleOnchange} className="form-control" required />
                  
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >UNAIDED Right 6/</label>
                                    <input type="text" value={value.unaidedR6D} name='unaidedR6D' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >AIDED Left 20/</label>
                                    <input type="text" value={value.aidedL20D} name='aidedL20D' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >AIDED Right 20/</label>
                                    <input type="text" value={value.aidedR20D} name='aidedR20D' onChange={handleOnchange} className="form-control" required />
                                </div></div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Color Vision</label>
                                    <input type="text" value={value.colorvision} name='colorvision' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                
                                </div>
                                <div className="partition">
                                <h5 >clinical Examination</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >General Apperance</label>
                                    <input type="text" value={value.generalapperance} name='generalapperance' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Rsystem</label>
                                    <input type="text" value={value.Rsystem} name='Rsystem' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                              
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >CV System</label>
                                    <input type="text" value={value.cvSystem} name='cvSystem' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">EBT</label>
                                    <input type="text" value={value.ent} name='ent' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">HEENT</label>
                                    <input type="text" value={value.heent} name='heent' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Breast</label>
                                    <input type="text" value={value.breast} name='breast' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Precordium</label>
                                    <input type="text" value={value.precordium} name='precordium' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Lymphnodes</label>
                                    <input type="text" value={value.lymphnodes} name='lymphnodes' onChange={handleOnchange} className="form-control" required />
                                    
                                </div></div><h5 >Hearing</h5>
                                <div className="partition">
                               
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Left</label>
                                    <input type="text" value={value.hearingLeft} name='hearingLeft' onChange={handleOnchange} className="form-control" required />
                                </div></div>

                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Right</label>
                                    <input type="text" value={value.hearingright} name='hearingright' onChange={handleOnchange} className="form-control" required />
                                </div></div></div>
                              </div>
                                
                                <div className="partition">
                                <h5 >Musculoskeletal</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Exterimities</label>
                                    <input type="text" value={value.exterimities} name='exterimities' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Skin</label>
                                    <input type="text" value={value.skin} name='skin' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Deformities</label>
                                    <input type="text" value={value.deformities} name='deformities' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Back</label>
                                    <input type="text" value={value.back} name='back' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">CNS </label>
                                    <input type="text" value={value.cns} name='cns' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="partition">
                                <h5>Genitourinary</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Genitourinary</label>
                                    <input type="text" value={value.genitourinary} name='genitourinary' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Hydrocele</label>
                                    <input type="text" value={value.hydrocele} name='hydrocele' onChange={handleOnchange} className="form-control" required />
                                </div></div></div>
                               
                                </div>
                                
                                
                                <div className="partition">
                                <h5>Cognition</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Cognition</label>
                                    <input type="text" value={value.cognition} name='cognition' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                              
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Memory</label>
                                    <input type="text" value={value.memory} name='memory' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                
                                <div className="col-sm-10">
                                <label className="col-sm-2 col-form-label">Mood</label>
                                <input type="text" value={value.mood} name='mood' onChange={handleOnchange} className="form-control" required />

                                  
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Attention</label>
                                    <input type="text" value={value.attention} name='attention' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Orientation</label>
                                    <input type="text" value={value.orientation} name='orientation' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Concentration</label>
                                    <input type="text" value={value.concentration} name='concentration' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Thoughts</label>
                                    <input type="text" value={value.thoughts} name='thoughts' onChange={handleOnchange} className="form-control" required />
                                </div></div></div>
                                <div className="partition">
                                <h5>Other</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Cranial nerve</label>
                                    <input type="text" value={value.cranialnerve} name='cranialnerve' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Motor Exam</label>
                                    <input type="text" value={value.MotorExam} name='MotorExam' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Sensor Exam</label>
                                    <input type="text" value={value.passPort} name='sensorExam' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Suprefical Reflexes</label>
                                    <input type="text" value={value.supreficalReflexis} name='supreficalReflexis' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">DTR</label>
                                    <input type="text" value={value.dtr} name='dtr' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Other CNS  Exam</label>
                                    <input type="text" value={value.otherCnsExam} name='otherCnsExam' onChange={handleOnchange} className="form-control" required />
                                </div></div>    </div>
                            
                               
                                <div className="partition">
                                <h5>Activity log</h5>
                            
                               
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">comment</label>
                                    <textarea  type="text" value={value.comment} name="comment" className="form-control" onChange={handleOnchange} rows="10" required></textarea>
                                    
                                </div> </div>
                                <div className="form-group row">
    <label className="col-sm-2 col-form-label">Conclusion</label>
    <div className="col-sm-10">
        <div className="custom-radio-group">
            <label className={`custom-radio ${value.finalconclution === 'Fit' ? 'selected' : ''}`}>
                <input
                    type="radio"
                    id="fit"
                    name="finalconclution"
                    value="Fit"
                    checked={value.finalconclution === 'Fit'}
                    onChange={handleOnchange}
                />
                <span className="custom-radio-label">Fit</span>
            </label>
            <label className={`custom-radio ${value.finalconclution === 'Unfit' ? 'selected' : ''}`}>
                <input
                    type="radio"
                    id="unfit"
                    name="finalconclution"
                    value="Unfit"
                    checked={value.finalconclution === 'Unfit'}
                    onChange={handleOnchange}
                />
                <span className="custom-radio-label">Unfit</span>
            </label>
            <label className={`custom-radio ${value.finalconclution === 'Pending' ? 'selected' : ''}`}>
                <input
                    type="radio"
                    id="pending"
                    name="finalconclution"
                    value="Pending"
                    checked={value.finalconclution === 'Pending'}
                    onChange={handleOnchange}
                />
                <span className="custom-radio-label">Pending</span>
            </label>
        </div>
    </div>
</div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Created By</label>
                                    <input type="text" value={value.createdBy} name='createdBy' onChange={handleOnchange} className="form-control" required />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Updated By</label>
                                    <input type="text" value={value.UpdatedBy} name='UpdatedBy' onChange={handleOnchange} className="form-control" required />
                                </div></div></div>
                                </div>
                            </div>
                            
                            
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
