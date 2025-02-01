import React from 'react'

export default function Update({ handleOnSubmit, value, handlechange })  {
    console.log("Update Component Props:", { handleOnSubmit, value, handlechange });
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
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" value={value.name} name='name' onChange={handlechange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>category</label>
                                    <input type="text" value={value.category} name='category' onChange={handlechange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>price</label>
                                    <input type="number" value={value.price} name='price' onChange={handlechange} className="form-control" />

                                </div>
                                <div className="form-group">
                                    <label>status</label>

                                    <input type="text" value={value.status} name='status' onChange={handlechange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>regDate</label>

                                    <input type="date" value={value.regDate} name='regDate' onChange={handlechange} className="form-control" />
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
