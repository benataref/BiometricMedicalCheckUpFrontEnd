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
            selector: row => row.maglumiId,
            sortable: true,
        },
        {
            name: 'Lable Name',
            selector: row => row.lableName,
            sortable: true,
        },
        {
            name: 'Date of result',
            selector: row => row.createdDate,
            sortable: true,
        },
        {
            name: 'File',
            selector: row => row.file,
            sortable: true,
        },
        {
            name: 'Action',
            cell: row => (
                <div>
                    <a href="#" className="edit cursor-pointer" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={() => UpdatedUser(row.maglumiId)}>
                        <i className="material-icons" data-bs-toggle="tooltip" title="Edit">&#xE254;</i>
                    </a>
                    <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal" onClick={() => Deletuser(row.maglumiId)}>
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
                const [patientResult, maglumiResult] = await Promise.all([
                    axios.get("http://localhost:8000/api/patient/get"),
                    axios.get("http://localhost:8000/api/maglumi800/get")
                ]);
                console.log('Patient Result:', patientResult);
                console.log('labresult Result:', maglumiResult);
                const patients = patientResult.data;
                const Maglumi800 = maglumiResult.data;
                if (!Array.isArray(patients) || !Array.isArray(Maglumi800)) {
                    throw new Error('Unexpected data format');
                }
                // Merge the data based on a common field, like patientId
                const combined = patients.map(patient => {
                    const patientMaglumi800 = Maglumi800.filter(Maglumi800 => Maglumi800.pid === patient._id); // Assuming 'pid' is the common field

                    return patientMaglumi800.map(Maglumi800 => ({
                        patientId: patient._id,
                        fname: patient.fname,
                        mname: patient.mname,
                        lname: patient.lname,
                        maglumiId: Maglumi800._id,
                        lableName:Maglumi800.lableName,                       
                        createdDate: Maglumi800.createdAt,
                        file:Maglumi800.file // Ensure your vital signs have a date field
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
                                <h2>Manage <b> Immuno Assey Result</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <input type='text' placeholder='search' onChange={handleFilter} />
                                <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                                    <i className="material-icons">&#xE147;</i> <span>New Immuno Assey Result</span>
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
