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
            name: 'Vital Sign ID',
            selector: row => row.vitalSignId,
            sortable: true,
        },
        {
            name: 'Date of Vital Sign',
            selector: row => row.createdDate,
            sortable: true,
        },
        {
            name: 'Final Conclusion',
            selector: row => row.finalconclution,
            sortable: true,
        },
        {
            name: 'Action',
            cell: row => (
                <div>
                    <a href="#" className="edit cursor-pointer" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={() => UpdatedUser(row.vitalSignId)}>
                        <i className="material-icons" data-bs-toggle="tooltip" title="Edit">&#xE254;</i>
                    </a>
                    <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal" onClick={() => Deletuser(row.vitalSignId)}>
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
                const [patientResult, vitalResult] = await Promise.all([
                    axios.get("http://localhost:8000/api/patient/get"),
                    axios.get("http://localhost:8000/api/vital/get")
                ]);
                console.log('Patient Result:', patientResult);
                console.log('Vital Result:', vitalResult);
                const patients = patientResult.data;
                const vitals = vitalResult.data;
                if (!Array.isArray(patients) || !Array.isArray(vitals)) {
                    throw new Error('Unexpected data format');
                }
                // Merge the data based on a common field, like patientId
                const combined = patients.map(patient => {
                    const patientVitals = vitals.filter(vital => vital.pid === patient._id); // Assuming 'pid' is the common field

                    return patientVitals.map(vital => ({
                        patientId: patient._id,
                        fname: patient.fname,
                        mname: patient.mname,
                        lname: patient.lname,
                        finalconclution:vital.finalconclution,
                        vitalSignId: vital._id,
                        createdDate: vital.createdAt, // Ensure your vital signs have a date field
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
                                <h2>Manage <b>General Examnation</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <input type='text' placeholder='search' onChange={handleFilter} />
                                <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                                    <i className="material-icons">&#xE147;</i> <span>General Examnation</span>
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
