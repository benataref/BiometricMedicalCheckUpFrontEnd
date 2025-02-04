import axios from 'axios';
import moment from 'moment';
import  { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component'
//const { app, BrowserWindow } = require('electron');
export default function Table({ Deletuser, UpdatedUser }) {
    const [data, setdata]=useState([])
   // const [exePath, setExePath] = useState('./Release/fingerprintscaner.exe');
  const [filteredData, setFilteredData]=useState([])
 
  const columns = [
            
    {
      name: '_id',
      selector: row => row._id,
      sortable: true,
      
    },
    {
        name: 'Full Name',
        selector: row => `${row.fname} ${row.mname ? row.mname + ' ' : ''}${row.lname}`,
        sortable: true,
    },
    {
        name: 'PassPort',
          selector: row => row.passPort,
          sortable: true,
     },
    {
    name: 'Date of registration',
    selector: row => moment(row.createdDate).format('YYYY-MM-DD'),
    sortable: true,
     },
      {
          name: 'Action',
          cell: row => (
              <div>
                
                        <div className="row"></div>
                  <a href="#" className="new" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={() => UpdatedUser(row._id)}>
                                                <i className="material-icons" data-bs-toggle="tooltip" title="Edit">&#xE254;</i>
                                            </a>
                                                                                       
<a href="#" className="new " data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal" onClick={() => Deletuser(row._id)}>
                                                <i className="material-icons" data-bs-toggle="tooltip" title="delete" >&#xE872;</i>
                                            </a> 
                                           
                                          
                                            <a
                                             href="#"
                                          className=" new"
                                                  data-bs-toggle="modal"
                                             data-bs-target="#showDetailModal"
                                                     onClick={handleexe}
                                                   >
      <i className="fas fa-fingerprint fa-2x"  data-bs-toggle="tooltip" title="Show Detail"></i>
    </a>      
                                   
                                            
      
                                              
                                          </div>
          ),
          sortable: false,
      }
  ]
 /*  const handleRunExe = async () => {
    try {
      const result = await window.Electron.runExe(exePath);
      console.log('Execution result:', result);
      alert('Execution completed. Check console for details.');
    } catch (error) {
      console.error('Error executing file:', error);
      alert('Failed to execute file.');
    }
  }; */

    useEffect(()=>{
        const fetchdata = async () => {
            try {
                const result = await axios.get("https://biometric-medical-check-up-front-end.vercel.app/api/patient/get");
                setdata(result.data);
                
                setFilteredData(result.data); // Set both states initially
            } catch (err) {
                console.log(err);
            }
        };
        fetchdata();
    }, []);

    const handleFilter = (event) => {
        const query = event.target.value.toLowerCase();
        const newData = data.filter(row => 
            `${row.fname} ${row.mname ? row.mname + ' ' : ''}${row.lname}`.toLowerCase().includes(query)
        );
        setFilteredData(newData);
    };
     const handleexe=()=>{
        axios.get('https://biometric-medical-check-up-front-end.vercel.app/api/patient/exe')
    }; 
    return (
        <>
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>view <b>Client</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <input type='text' placeholder='search' onChange={handleFilter} />
                                <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                                    <i className="material-icons">&#xE147;</i> <span>Add Client </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                        
                        <DataTable
                        columns={columns}
                         data={filteredData}
                         pagination
                         paginationPerPage={7}
                      >
                        
                          
                     </DataTable>        
                </div>
            </div >


        </>
    );
}

