import React from 'react';
import { Document, Page } from 'react-pdf';




import { pdfjs } from 'react-pdf';



export default function Update({ handleOnSubmit, value, handlechange }) {
    console.log("Update Component Props:", { handleOnSubmit, value, handlechange });

    return (
        <div id="editEmployeeModal" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={handleOnSubmit}>
                        <div className="modal-header">
                            <h4 className="modal-title">clinical Chemistry Resualt</h4>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        
                        <div className="modal-body">
                            <div className="form-grid">

                                <div className="form-group">
                                    <label>Result File</label>
                                    <div style={{ width: '200%', height: '40vh' }}>
  <iframe
    src={`https://biometric-medical-check-up-backend.vercel.app/${value.file}`}
    title="PDF Viewer"
    style={{ width: '100%', height: '100%', border: 'none' }}
  />
</div>
                                </div>
                                <div className="container"></div>
                                <div className="container">
                                <div className="form-group">
                                    <label>Lable Name</label>
                                    <input
                                        type="text"
                                        value={value.lableName}
                                        name='lableName'
                                        onChange={handlechange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Patient Id </label>
                                    <input
                                        type="text"
                                        value={value.pid}
                                        name='pid'
                                        onChange={handlechange}
                                        className="form-control"
                                    />
                                </div></div>
                               {/*  <div className="form-group">
                                    <label>PDF Document</label>
                                    <div>
                                        <Document
                                            file={`http://192.168.1.9:8000/${value.file}`}
                                            onLoadSuccess={({ numPages }) => console.log(`Loaded ${numPages} pages`)}
                                        >
                                            <Page pageNumber={1} />
                                        </Document>
                                    </div>
                                </div>                             
                                <div style={{ width: '100%', height: '100vh', overflow: 'auto' }}>
  <iframe
    src={`http://192.168.1.9:8000/${value.file}`}
    title="PDF Viewer"
    style={{ width: '100%', height: '100%', border: 'none' }}
  />
</div>
                                */}
                            </div>
                        </div>
                        <div className="modal-footer">
                           {/*  <button type="submit" className="btn btn-primary">Save changes</button> */}
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
