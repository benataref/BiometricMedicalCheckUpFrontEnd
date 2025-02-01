import { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';

const PatientProfile = () => {
  const [patientId, setPatientId] = useState('');
  const [patientData, setPatientData] = useState(null);
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState(null);

  useEffect(() => {
    const fetchDropdownOptions = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/patient/get');
        const options = Array.isArray(response.data)
          ? response.data.map(option => ({
              value: option._id,
              label: `${option.fname} ${option.mname} ${option.lname}`
            }))
          : [];
        setDropdownOptions(options);
      } catch (error) {
        console.error('Error fetching dropdown options:', error);
      }
    };

    fetchDropdownOptions();
  }, []);

  useEffect(() => {
    if (patientId) {
      const fetchPatientData = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/patient/get/${patientId}`);
          setPatientData(response.data);
        } catch (error) {
          console.error('Error fetching patient data', error);
        }
      };

      fetchPatientData();
    }
  }, [patientId]);

  const handleSelectChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
    setPatientId(selectedOption ? selectedOption.value : '');
  };

  const handleExe = async () => {
    try {
      await axios.get('http://localhost:8000/api/patient/exeV');
      // Handle success if needed
    } catch (error) {
      console.error('Error executing verification:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission if needed
  };

  return (
    <div className="container">
      <h2>Client Verification</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Patient ID</label>
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

        {patientData && (
          <div className="patient-data">
            <img 
              src={`http://localhost:8000/${patientData.photo}`} 
              alt="Patient" 
              className="patient-photo"
              style={{ width: '25%', height: 'auto' }} 
            />
            <div className="patient-info">
              <p><strong>Passport Number:</strong> {patientData.passPort}</p>
              <p><strong>First Name:</strong> {patientData.fname}</p>
              <p><strong>Middle Name:</strong> {patientData.mname}</p>
              <p><strong>Last Name:</strong> {patientData.lname}</p>
            </div>
          </div>
        )}

        <div className="form-group">
          <h5>Biometric Data</h5>
          <button type="button" onClick={handleExe} className="btn btn-secondary">
            Verify
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientProfile;
