import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Select from 'react-select';

export default function Add() {
  const [file, setFile] = useState(null); // State for file
  const [barcode, setBarcode] = useState('');
  const inputRef = useRef(null);
  const [value, setValue] = useState({
    pid: '',
    lableName: ''
  });
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState(null); // Updated to null instead of an empty array

  // Focus input on mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Handle barcode input change
  const handleInputChange = (e) => {
    setBarcode(e.target.value);
  };

  // Handle barcode input key down events
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setValue(prevValue => ({
        ...prevValue,
        lableName: barcode
      }));
      setBarcode(''); // Clear barcode input after saving
    }
  };

  // Fetch dropdown options
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://biometric-medical-check-up-backend.vercel.app/api/patient/get');
        const options = Array.isArray(response.data)
          ? response.data.map(option => ({
              value: option._id,
              label: `${option.fname} ${option.mname} ${option.lname}`
            }))
          : [];
        setDropdownOptions(options);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Handle file selection
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle form input changes
  const handleOnChange = (e) => {
    setValue(prevValue => ({
      ...prevValue,
      [e.target.name]: e.target.value,
      pid: selectedOptions ? selectedOptions.value : ""
    }));
  };

  // Handle select change
  const handleSelectChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
    setValue(prevValue => ({
      ...prevValue,
      pid: selectedOption ? selectedOption.value : ""
    }));
  };

  // Handle form submission
  const onFileUpload = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      if (file) {
        formData.append('file', file);
      }

      for (const [key, val] of Object.entries(value)) {
        formData.append(key, val);
      }

      const response = await axios.post('https://biometric-medical-check-up-backend.vercel.app/api/maglumi800/create1', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.success) {
        toast.success('PDF uploaded successfully!');
        window.location.reload();
      } else {
        toast.error('Failed to upload PDF.');
      }
    } catch (error) {
      console.error('Error during submission:', error);
      //toast.error('An error occurred.');
    }
  };

  return (
    <div id="addEmployeeModal" className="modal fade" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <form onSubmit={onFileUpload}>
            <div className="modal-header">
              <h4 className="modal-title">Add Clinical Chemistry</h4>
              <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div className="modal-body">
              <div className="form-grid">
                <div className="form-group">
                  <label>Patient Id</label>
                  <div className="col-sm-10">
                    <Select
                      name='pid'
                      value={selectedOptions}
                      onChange={handleSelectChange}
                      options={dropdownOptions}
                      isClearable
                      hideSelectedOptions={false}
                    />
                  </div>
                </div>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <h1>Barcode Scanner from sample Lebel</h1>
                  <input
                    type="text"
                    ref={inputRef}
                    onChange={(e) => setBarcode(e.target.value)} 
                    name="lableName"
                  //  onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Scan a barcode"
                    style={{ width: '80%', padding: '10px', marginBottom: '10px' }}
                  />
                </div>
                <div className="form-group">
                  <label>Upload File</label>
                  <input type="file" onChange={onFileChange} />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" className="btn btn-primary">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}