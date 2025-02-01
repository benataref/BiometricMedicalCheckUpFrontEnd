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
                                <div className="partition">
                                
                                <div className="form-group">
                                    <label>Patient id</label>

                                    <input type="text" value={value.pid} name='pid' onChange={handlechange} className="form-control" readOnly/>
                                </div>
                                <h5>Blood Tests</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Blood Group</label>
                                    <input type="text" value={value.bloodGroup} name='bloodGroup' onChange={handlechange} className="form-control" />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Rh</label>
                                    <input type="text" value={value.rh} name='rh' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Hemoglobin </label>
                                    <input type="text" value={value.hemoglobin} name='hemoglobin' onChange={handlechange} className="form-control"  />

                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Plateletes</label>
                                    <input type="text" value={value.plateletes} name='plateletes' onChange={handlechange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">WBC</label>
                                    <input type="text" value={value.wbc} name='wbc' onChange={handlechange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">RBC</label>
                                    <input type="text" value={value.rbc} name='rbc' onChange={handlechange} className="form-control"  />
                                </div> </div>
                                </div>
                                
                                <div className="partition">
                               
                                <h5>Serology</h5>
                                
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">HIV& ll</label>
                                    <input type="text" value={value.hivll} name='hivll' onChange={handlechange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Anti HCV</label>
                                    <input type="text" value={value.antihcv} name='antihcv' onChange={handlechange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">TPHA </label>
                                    <input type="text" value={value.tpha} name='tpha' onChange={handlechange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">HBs Ag</label>
                                    <input type="text" value={value.hbsag} name='hbsag' onChange={handlechange} className="form-control"  />

                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">VDRL</label>
                                    <input type="text" value={value.vdrl} name='vdrl' onChange={handlechange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Pregnancy</label>
                                    <input type="text" value={value.pregnancy} name='pregnancy' onChange={handlechange} className="form-control"  />
                                </div> </div>
                                </div> </div>
                                <div className="partition">
                                <div className="partition">
                                <h5>Urine</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Appearance</label>
                                    <input type="text" value={value.appearance} name='appearance' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Color </label>
                                    <input type="text" value={value.color} name='color' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">PH </label>
                                    <input type="text" value={value.ph} name='ph' onChange={handlechange} className="form-control"  />

                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Sp.Gravity</label>
                                    <input type="text" value={value.spgravity} name='spgravity' onChange={handlechange} className="form-control"  />
                                </div> </div></div>
                                <div className="partition">
                                <h5>Chemical Examination</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Keton</label>
                                    <input type="text" value={value.keton} name='keton' onChange={handlechange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Sugar</label>
                                    <input type="text" value={value.sugar} name='sugar' onChange={handlechange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Albumin </label>
                                    <input type="text" value={value.alnumin} name='alnumin' onChange={handlechange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Nitrate</label>
                                    <input type="text" value={value.nitrate} name='nitrate' onChange={handlechange} className="form-control"  />

                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Leukocyte</label>
                                    <input type="text" value={value.leukocyte} name='leukocyte' onChange={handlechange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Blood</label>
                                    <input type="text" value={value.blood} name='blood' onChange={handlechange} className="form-control"  />
                                </div> </div></div>
                                <div className="partition">
                                <h5>Microscopic Examination</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">RBC/hpf</label>
                                    <input type="text" value={value.rbchpf} name='rbchpf' onChange={handlechange} className="form-control"  />
                                </div> </div></div>

                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">WBC/hpf</label>
                                    <input type="text" value={value.wbchpf} name='wbchpf' onChange={handlechange} className="form-control"  />
                                </div></div>
                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Epith.Cell/lpf </label>
                                    <input type="text" value={value.epithcelllpf} name='epithcelllpf' onChange={handlechange} className="form-control"  />
                                
                                </div> </div></div>
                                <div className="partition">
                                <div className="partition">
                                <h5>Stool Routine</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Helminths</label>
                                    <input type="text" value={value.heminths} name='heminths' onChange={handlechange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">CYST</label>
                                    <input type="text" value={value.cyst} name='cyst' onChange={handlechange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">OVA</label>
                                    <input type="text" value={value.ova} name='ova' onChange={handlechange} className="form-control"  />
                                </div> </div>
                                <h5>Bio Chemistry</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">RBS/FBS(T) </label>
                                    <input type="text" value={value.rbsfbs} name='rbsfbs' onChange={handlechange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Creatine(T) </label>
                                    <input type="text" value={value.creatine} name='creatine' onChange={handlechange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">LFT</label>
                                    <input type="text" value={value.lft} name='lft' onChange={handlechange} className="form-control"  />

                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">SGOT</label>
                                    <input type="text" value={value.sgot} name='sgot' onChange={handlechange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">SGPT</label>
                                    <input type="text" value={value.sgpt} name='sgpt' onChange={handlechange} className="form-control"  />
                                </div> </div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">ALP</label>
                                    <input type="text" value={value.alp} name='alp' onChange={handlechange} className="form-control"  />
                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">BUN </label>
                                    <input type="text" value={value.bun} name='bun' onChange={handlechange} className="form-control" />
                                </div></div>
                                </div>
                                <div className="partition">
                                <h5>Thick Film for</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Malaria </label>
                                    <input type="text" value={value.malaria} name='malaria' onChange={handlechange} className="form-control"  />

                                </div></div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-2 col-form-label">Micro Filaria</label>
                                    <input type="text" value={value.microfilaria} name='microfilaria' onChange={handlechange} className="form-control"  />
                                </div> </div>
                                </div>
                              
                                <div className="partition">
                               
                               </div>
                               
                        </div>
                        <div className="partition">
                        <div className="partition">
                                <h5>Other</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">other </label>
                                    <textarea value={value.other} name="other" className="form-control" onChange={handlechange} rows="10" required></textarea>
                                </div> </div></div>
                                <div className="partition">
                                <h5>comment</h5>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">comment</label>
                                    <textarea value={value.comment} name="comment" className="form-control" onChange={handlechange} rows="10" required></textarea>
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
                    onChange={handlechange}
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
                    onChange={handlechange}
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
                    onChange={handlechange}
                />
                <span className="custom-radio-label">Pending</span>
            </label>
        </div>
    </div>
</div>
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Registered By</label>
                                    <input type="text" value={value.registerdby} name='registerdby' onChange={handlechange} className="form-control"  />
                                </div> </div>
                                
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Approved By</label>
                                    <input type="text" value={value.aprovedby} name='aprovedby' onChange={handlechange} className="form-control"  />
                                </div></div>
                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">Aproved Date</label>
                                    <input type="date" value={value.aproveddate} name='aproveddate' onChange={handlechange} className="form-control"  />
                                </div></div>
                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <label  className="col-sm-2 col-form-label">coclusionStatus</label>
                                    <input type="text" value={value.coclusionStatus} name='coclusionStatus' onChange={handlechange} className="form-control"  />
                                </div> 
                            </div></div>
                        </div></div>
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
