import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';


export default function Table({ Deletuser, UpdatedUser }) {
    const [combinedData, setCombinedData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [originalData, setOriginalData] = useState([]); // Add this state to hold original data

    const columns = [
        {
            name: 'Patient ID',
            selector: row => row.patientId,
            sortable: true,
        },
        {
            name: 'Full Name',
            selector: row => `${row.fname} ${row.mname ? row.mname + ' ' : ''}${row.lname}`,
            sortable: true,
        },
       
        {
            name: 'xray ID',
            selector: row => row.xrayID,
            sortable: true,
        },
        {
            name: 'Date of xray report',
            selector: row => row.createdDate,
            sortable: true,
        },
        {
            name: 'Final Conclusion',
            selector: row => row.conclusion,
            sortable: true,
        },
        {
            name: 'Action',
            cell: row => (
                <div>
                    <a href="#" className="edit cursor-pointer" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={() => UpdatedUser(row.xrayID)}>
                        <i className="material-icons" data-bs-toggle="tooltip" title="Edit">&#xE254;</i>
                    </a>
                    <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal" onClick={() => Deletuser(row.xrayID)}>
                        <i className="material-icons" data-bs-toggle="tooltip" title="delete">&#xE872;</i>
                    </a>
                </div>
            ),
            sortable: false,
        }
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [patientResult, xrayResult] = await Promise.all([
                    axios.get("https://biometric-medical-check-up-backend.vercel.app/api/patient/get"),
                    axios.get("https://biometric-medical-check-up-backend.vercel.app/api/xray/get")
                ]);
                console.log('Patient Result:', patientResult);
                console.log('Vital Result:', xrayResult);
                const patients = patientResult.data;
                const xrays = xrayResult.data;
                if (!Array.isArray(patients) || !Array.isArray(xrays)) {
                    throw new Error('Unexpected data format');
                }
               
                const combined = patients.map(patient => {
                    const patientxray = xrays.filter(xrays => xrays.pid === patient._id); 

                    return patientxray.map(xray => ({
                        patientId: patient._id,
                        fname: patient.fname,
                        mname: patient.mname,
                        lname: patient.lname,
                        conclusion:xray.conclusion,
                        xrayID: xray._id,
                        createdDate: xray.createdAt, 
                    }));
                }).flat();
                console.log('Combined Data:', combined);
                setOriginalData(combined);
                setCombinedData(combined); 
                setFilteredData(combined); 
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    const handleFilter = (event) => {
        const query = event.target.value.toLowerCase();
        const newData = originalData.filter(row => 
            `${row.fname} ${row.mname ? row.mname + '' : ''}${row.lname}`.toLowerCase().includes(query)
        );
        setCombinedData(newData);
    };
    
    return (
        <>
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Manage <b>X_ray result</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <input type='text' placeholder='search' onChange={handleFilter} />
                                <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                                    <i className="material-icons">&#xE147;</i> <span> New X_ray result</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <DataTable
                        columns={columns}
                        data={combinedData}
                        pagination
                    />
                </div>
            </div>
        </>
    );
}
