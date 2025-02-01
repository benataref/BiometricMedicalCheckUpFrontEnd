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
                           
                           
                                <div className="partition">
                                <div className="partition">
                                
                                <div className="form-group">
                                    <label>Patient id</label>

                                    <input type="text" value={value.pid} name='pid' onChange={handlechange} className="form-control" readOnly />
                                </div>
                              
                                <div className="form-group row">
                                <div className="col-sm-10">
                                    <div className="input-group">
                                        <div className="input-group-item">
                                            <label className="col-form-label">Chest X-ray</label>
                                            <input
                                                type="text"
                                                value={value.chestxray}
                                                name="chestxray"
                                                onChange={handlechange}
                                                className="form-control"
                                               
                                            />
                                        </div>
                                        <div className="input-group-item">
                                            <label className="col-form-label">Film No</label>
                                            <input
                                                type="text"
                                                value={value.filmno}
                                                name="filmno"
                                                onChange={handlechange}
                                                className="form-control"
                                                
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Comment</label>
                                <div className="col-sm-10">
                                    <textarea
                                        value={value.comment}
                                        name="comment"
                                        className="form-control"
                                        onChange={handlechange}
                                        rows="10"
                                       
                                    ></textarea>
                                </div>
                            </div>
                            <div className="form-group row">
    <label className="col-sm-2 col-form-label">Conclusion</label>
    <div className="col-sm-10">
        <div className="custom-radio-group">
            <label className={`custom-radio ${value.conclusion === 'Fit' ? 'selected' : ''}`}>
                <input
                    type="radio"
                    id="fit"
                    name="conclusion"
                    value="Fit"
                    checked={value.conclusion === 'Fit'}
                    onChange={handlechange}
                />
                <span className="custom-radio-label">Fit</span>
            </label>
            <label className={`custom-radio ${value.conclusion === 'Unfit' ? 'selected' : ''}`}>
                <input
                    type="radio"
                    id="unfit"
                    name="conclusion"
                    value="Unfit"
                    checked={value.conclusion === 'Unfit'}
                    onChange={handlechange}
                />
                <span className="custom-radio-label">Unfit</span>
            </label>
            <label className={`custom-radio ${value.conclusion === 'Pending' ? 'selected' : ''}`}>
                <input
                    type="radio"
                    id="pending"
                    name="conclusion"
                    value="Pending"
                    checked={value.conclusion === 'Pending'}
                    onChange={handlechange}
                />
                <span className="custom-radio-label">Pending</span>
            </label>
        </div>
    </div>
</div>

                            <div className="form-group row">
    <div className="col-sm-10">
        <div className="input-group">
            <div className="input-group-item">
                <label className="col-form-label">Registered By</label>
                <input
                    type="text"
                    value={value.registerdby}
                    name="registerdby"
                    onChange={handlechange}
                    className="form-control"
                    
                />
            </div>
            <div className="input-group-item">
                <label className="col-form-label">Updated By</label>
                <input
                    type="text"
                    value={value.updatedby}
                    name="updatedby"
                    onChange={handlechange}
                    className="form-control"
                   
                />
            </div>
        </div>
    </div>
</div>


                              
                     
                               
                              
                               
                               </div>
                            
                        
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" value="Update" data-bs-dismiss="modal" />
                            </div>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </>
    )
}
