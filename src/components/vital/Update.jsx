import React from 'react'

export default function Update({ handleOnSubmit, value, handlechange })  {
    console.log("Update Component Props:", { handleOnSubmit, value, handlechange });
    return (
        <>
        <div id="editEmployeeModal" className="modal fade" >
                <div className="modal-dialog modal-lg" >
                    <div className="modal-content">
                        <form onSubmit={handleOnSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">view vital signs </h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                         
                            <div className="modal-body">
                            <div className="form-grid">
                            <div className="partition">
                           
                                
                                     
                            <div className="form-group">
                                    <label>Patient id</label>

                                    <input type="text" value={value.pid} name='pid' onChange={handlechange} className="form-control" />
                                </div>

                                <div className="form-group row">
                               <div className="col-sm-10">
                                    <label >Medical Illness</label>
                                    <input type="text" value={value.medicalillness} name='medicalillness' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Disablity</label>
                                    <input type="text" value={value.passPort} name='disablity' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Allergy</label>
                                    <input type="text" value={value.alergy} name='alergy' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Previous Admission or Accident</label>
                                    <input type="text" value={value.previousAdAc} name='previousAdAc' onChange={handlechange} className="form-control"  />
                                </div></div><div className="partition">
                                <div className="partition">
                                <h5>Gastro Intestinal</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Abdomen</label>
                                    <input type="text" value={value.abdomen} name='abdomen' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Hernia</label>
                                    <input type="text" value={value.hemia} name='hemia' onChange={handlechange} className="form-control"  />
                                </div></div></div>
                                <h5>Mental Status Examination</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Apperance</label>
                                    <input type="text" value={value.apperance} name='apperance' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Behaviour</label>
                                    <input type="text" value={value.behaviour} name='behaviour' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Speech</label>
                                    <input type="text" value={value.speech} name='speech' onChange={handlechange} className="form-control"  />
                                </div></div></div>
                                
                                </div>
                                <div className="partition">
                              
                                <h5>Medical Examination</h5>

                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Height</label>
                                    <input type="text" value={value.height} name='height' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Weight </label>
                                    <input type="text" value={value.weight} name='weight' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">BMI</label>
                                    <input type="text" value={value.bmi} name='bmi' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Blood Pressure</label>
                                    <input type="text" value={value.bloodpresur} name='bloodpresur' onChange={handlechange} className="form-control"  />
                                </div></div>
                               
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Pulse/min</label>
                                    <input type="text" value={value.pulsmin} name='pulsmin' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Pulse Vol.</label>
                                    <input type="text" value={value.vol} name='vol' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Pulse Rythm</label>
                                    <input type="text" value={value.prythm} name='prythm' onChange={handlechange} className="form-control"  />
                                </div></div>
                                
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">RR/min</label>
                                    <input type="text" value={value.rrmin} name='rrmin' onChange={handlechange} className="form-control"  />
                                </div></div>
                              
                           
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Temprature  </label>
                                    <input type="text" value={value.temp} name='temp' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">                               
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">spo2</label>
                                    <input type="text" value={value.spo2} name='spo2' onChange={handlechange} className="form-control"  />
                                </div></div>
                              </div>
                                
                                <div className="partition">
                                <h5 >visual Acuty AIDED/UNAIDED </h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Visual Acuty</label>
                                    <input type="text" value={value.visualacuty} name='visualacuty' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="partition">
                                <h8> Near</h8>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >UNAIDED Left 6/ </label>
                                    <input type="text" value={value.unaidedL6N} name='unaidedL6N' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >UNAIDED Right 6/</label>
                                    <input type="text" value={value.unaidedR6N} name='unaidedR6N' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >AIDED Left 20/</label>
                                    <input type="text" value={value.aidedL20N} name='aidedL20N' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >AIDED Right 20/ </label>
                                    <input type="text" value={value.aidedR20N} name='aidedR20N' onChange={handlechange} className="form-control"  />
                                </div></div></div>
                                <div className="partition">
                                <h8> Distant</h8>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >UNAIDED Left 6/</label>
                                    <input type="text" value={value.unaidedL6D} name='unaidedL6D' onChange={handlechange} className="form-control"  />
                  
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >UNAIDED Right 6/</label>
                                    <input type="text" value={value.unaidedR6D} name='unaidedR6D' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >AIDED Left 20/</label>
                                    <input type="text" value={value.aidedL20D} name='aidedL20D' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >AIDED Right 20/</label>
                                    <input type="text" value={value.aidedR20D} name='aidedR20D' onChange={handlechange} className="form-control"  />
                                </div></div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Color Vision</label>
                                    <input type="text" value={value.colorvision} name='colorvision' onChange={handlechange} className="form-control"  />
                                </div></div>
                                
                                </div>
                                <div className="partition">
                                <h5 >clinical Examination</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >General Apperance</label>
                                    <input type="text" value={value.generalapperance} name='generalapperance' onChange={handlechange} className="form-control"  />
                                </div></div>
                                
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Rsystem</label>
                                    <input type="text" value={value.Rsystem} name='Rsystem' onChange={handlechange} className="form-control"  />
                                </div></div>
                              
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >CV System</label>
                                    <input type="text" value={value.cvSystem} name='cvSystem' onChange={handlechange} className="form-control"  />
                                </div></div>
                                
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">EBT</label>
                                    <input type="text" value={value.ent} name='ent' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">HEENT</label>
                                    <input type="text" value={value.heent} name='heent' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Breast</label>
                                    <input type="text" value={value.breast} name='breast' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Precordium</label>
                                    <input type="text" value={value.precordium} name='precordium' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Lymphnodes</label>
                                    <input type="text" value={value.lymphnodes} name='lymphnodes' onChange={handlechange} className="form-control"  />
                                    
                                </div></div><h5 >Hearing</h5>
                                <div className="partition">
                               
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Left</label>
                                    <input type="text" value={value.hearingLeft} name='hearingLeft' onChange={handlechange} className="form-control"  />
                                </div></div>

                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Right</label>
                                    <input type="text" value={value.hearingright} name='hearingright' onChange={handlechange} className="form-control"  />
                                </div></div></div>
                              </div>
                                
                                <div className="partition">
                                <h5 >Musculoskeletal</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Exterimities</label>
                                    <input type="text" value={value.exterimities} name='exterimities' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Skin</label>
                                    <input type="text" value={value.skin} name='skin' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Deformities</label>
                                    <input type="text" value={value.deformities} name='deformities' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Back</label>
                                    <input type="text" value={value.back} name='back' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">CNS </label>
                                    <input type="text" value={value.cns} name='cns' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="partition">
                                <h5>Genitourinary</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Genitourinary</label>
                                    <input type="text" value={value.genitourinary} name='genitourinary' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Hydrocele</label>
                                    <input type="text" value={value.hydrocele} name='hydrocele' onChange={handlechange} className="form-control"  />
                                </div></div></div>
                               
                                </div>
                                
                                
                                <div className="partition">
                                <h5>Cognition</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Cognition</label>
                                    <input type="text" value={value.cognition} name='cognition' onChange={handlechange} className="form-control"  />
                                </div></div>
                              
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Memory</label>
                                    <input type="text" value={value.memory} name='memory' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                
                                <div className="col-sm-10">
                                <label className="col-sm-2 col-form-label">Mood</label>
                                <input type="text" value={value.mood} name='mood' onChange={handlechange} className="form-control"  />

                                  
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Attention</label>
                                    <input type="text" value={value.attention} name='attention' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Orientation</label>
                                    <input type="text" value={value.orientation} name='orientation' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Concentration</label>
                                    <input type="text" value={value.concentration} name='concentration' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Thoughts</label>
                                    <input type="text" value={value.thoughts} name='thoughts' onChange={handlechange} className="form-control"  />
                                </div></div></div>
                                <div className="partition">
                                <h5>Other</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Cranial nerve</label>
                                    <input type="text" value={value.cranialnerve} name='cranialnerve' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Motor Exam</label>
                                    <input type="text" value={value.MotorExam} name='MotorExam' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Sensor Exam</label>
                                    <input type="text" value={value.passPort} name='sensorExam' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Suprefical Reflexes</label>
                                    <input type="text" value={value.supreficalReflexis} name='supreficalReflexis' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">DTR</label>
                                    <input type="text" value={value.dtr} name='dtr' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Other CNS  Exam</label>
                                    <input type="text" value={value.otherCnsExam} name='otherCnsExam' onChange={handlechange} className="form-control"  />
                                </div></div>    </div>
                            
                               
                                <div className="partition">
                                <h5>Activity log</h5>
                            
                               
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">comment</label>
                                    <textarea  type="text" value={value.comment} name="comment" className="form-control" onChange={handlechange} rows="10" ></textarea>
                                    
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
                    onChange={handlechange}
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
                    onChange={handlechange}
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
                    onChange={handlechange}
                />
                <span className="custom-radio-label">Pending</span>
            </label>
        </div>
    </div>
</div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Created By</label>
                                    <input type="text" value={value.createdBy} name='createdBy' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label >Updated By</label>
                                    <input type="text" value={value.UpdatedBy} name='UpdatedBy' onChange={handlechange} className="form-control"  />
                                </div></div></div>
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
