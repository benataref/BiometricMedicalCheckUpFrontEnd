import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

export default function CombinedTable({ Deletuser, UpdatedUser }) {
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
            name: 'Result Number',
            selector: row => row.LabResultId,
            sortable: true,
        },
        {
            name: 'Date of result',
            selector: row => row.createdDate,
            sortable: true,
        },
        {
            name: 'Final Conclution',
            selector: row => row.coclusionStatus,
            sortable: true,
        },
        {
            name: 'Action',
            cell: row => (
                <div>
                    <a href="#" className="edit cursor-pointer" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={() => UpdatedUser(row.LabResultId)}>
                        <i className="material-icons" data-bs-toggle="tooltip" title="Edit">&#xE254;</i>
                    </a>
                    <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal" onClick={() => Deletuser(row.LabResultId)}>
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
                const [patientResult, LabResult] = await Promise.all([
                    axios.get("https://biometric-medical-check-up-backend.vercel.app/api/patient/get"),
                    axios.get("https://biometric-medical-check-up-backend.vercel.app/api/labresult/get")
                ]);
                console.log('Patient Result:', patientResult);
                console.log('labresult Result:', LabResult);
                const patients = patientResult.data;
                const labresult = LabResult.data;
                if (!Array.isArray(patients) || !Array.isArray(labresult)) {
                    throw new Error('Unexpected data format');
                }
                // Merge the data based on a common field, like patientId
                const combined = patients.map(patient => {
                    const patientVitals = labresult.filter(labresult => labresult.pid === patient._id); // Assuming 'pid' is the common field

                    return patientVitals.map(labresult => ({
                        patientId: patient._id,
                        fname: patient.fname,
                        mname: patient.mname,
                        lname: patient.lname,
                        LabResultId: labresult._id,
                        createdDate: labresult.createdAt,
                        coclusionStatus:labresult.coclusionStatus // Ensure your vital signs have a date field
                    }));
                }).flat();
                console.log('Combined Data:', combined);
                setOriginalData(combined); // Set original data
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
            `${row.fname} ${row.mname ? row.mname + ' ' : ''}${row.lname}`.toLowerCase().includes(query)
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
                                <h2>Manage <b>Patients and Labratory Results</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <input type='text' placeholder='search' onChange={handleFilter} />
                                <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                                    <i className="material-icons">&#xE147;</i> <span>Add New Lab Result</span>
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
