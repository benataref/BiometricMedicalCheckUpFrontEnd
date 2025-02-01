import axios from 'axios';

import  { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component'
export default function Table({ Deletuser, UpdatedUser }) {
    const [data, setdata]=useState([])
  const [filteredData, setFilteredData]=useState([])
    const columns = [
        
        {
          name: '_id',
          selector: row => row._id,
          sortable: true,
          
        },
        
        {
            name: 'name',
            selector: row => row.name,
            sortable: true,
          },
          {
            name: 'category',
            selector: row => row.category,
            sortable: true,
            
          },
          {
            name: 'price',
            selector: row => row.price,
            sortable: true,
          },
         
          {
            name: 'status',
            selector: row => row.status,
            sortable: true,
          },
          
           {
            name: 'regDate',
            selector: row => row.regDate,
            sortable: true,
          },
          {
          name: 'Action',
          cell: row => (
              <div>
                
                        <div className="row"></div>
                  <a href="#" className="edit cursor-pointer" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={() => UpdatedUser(row._id)}>
                                                <i className="material-icons" data-bs-toggle="tooltip" title="Edit">&#xE254;</i>
                                            </a>
                                            <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal" onClick={() => Deletuser(row._id)}>
                                                <i className="material-icons" data-bs-toggle="tooltip" title="delete" >&#xE872;</i>
                                            </a>
              </div>
            
          ),
          sortable: false,
      }
  ]
    

    useEffect(()=>{
        const fetchdata = async () => {
            try {
                const result = await axios.get("http://localhost:8000/api/labratory/get");
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
        const newData = data.filter(row => row.name.toLowerCase().includes(query));
        setFilteredData(newData);
    };
    return (
        <>
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Manage <b>labratory</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <input type='text' placeholder='search' onChange={handleFilter} />
                                <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                                    <i className="material-icons">&#xE147;</i> <span>Add New Labratory</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                        
                        <DataTable
                        columns={columns}
                         data={filteredData}
                         pagination
                      >
                        
                          
                     </DataTable>        
                </div>
            </div >


        </>
    );
}

