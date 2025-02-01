/* import { useState, useEffect } from 'react';
import axios from 'axios';

const Test = () => {
  const [patientId, setPatientId] = useState('');
  const [patientData, setPatientData] = useState(null);
  const [vitalData, setVitalData] = useState(null);
  const [labData, setLabData] = useState(null);
  const [xrayData, setXrayData] = useState(null);
  const [error, setError] = useState(''); 
  const [loading, setLoading] = useState(false);
  
  const handleInputChange = (e) => {
    setPatientId(e.target.value);
  };

  useEffect(() => {
    if (patientId) {
      fetchPatientData();
      fetchVitalData();
      fetchLabData();
      fetchXrayData();
    }
  }, [patientId]);
  useEffect(() => {
    console.log('Patient Data:', patientData);
    console.log('Vital Data:', vitalData);
    console.log('Lab Data:', labData);
    console.log('X-ray Data:', xrayData);
  }, [patientData, vitalData, labData, xrayData]);
  const fetchPatientData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`http://192.168.1.9:8000/api/patient/get/${patientId}`);
      console.log('Patient Data:', response.data);
      setPatientData(response.data);
    } catch (err) {
      console.error('Error fetching patient data', err);
      setError('Error fetching patient data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const fetchVitalData = async () => {
    try {
      const response = await axios.get(`http://192.168.1.9:8000/api/vital/getV/${patientId}`);
      console.log('Vital Data:', response.data); 
      setVitalData(response.data);
    } catch (err) {
      console.error('Error fetching vital data', err);
      setError('Error fetching vital data. Please try again later.');
    }
  };

  const fetchLabData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`http://192.168.1.9:8000/api/labresult/getL/${patientId}`);
      console.log('Lab Data:', response.data); 
      setLabData(response.data);
    } catch (err) {
      console.error('Error fetching lab data', err);
      setError('Error fetching lab data. Please try again later.');

    }
    finally {
      setLoading(false);
    }
  };

  const fetchXrayData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`http://192.168.1.9:8000/api/xray/getX/${patientId}`);
      console.log('X-ray Data:', response.data);
      setXrayData(response.data);
    } catch (err) {
      console.error('Error fetching X-ray data', err);
      setError('Error fetching X-ray data. Please try again later.');
    }
    finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="container">
      <h2>Patient Profile</h2>
              <button type="submit" className="btn btn-primary">Fetch Report</button>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Patient ID</label>
          <input
            type="text"
            placeholder="Enter Patient ID"
            value={patientId}
            onChange={handleInputChange}
            className="form-control"
            required
          />
                  <button type="submit" className="btn btn-primary">Fetch Report</button>

        </div>
        </form>
        {loading && <p>Loading data...</p>}
        {error && <p className="error">{error}</p>} 

        {patientData ? (
          <div className="form-group">
            <img src={`http://192.168.1.9:8000/${patientData.photo}`}alt="Patient" style={{ width: '200px', height: '200px' }} />
            <p><strong>Passport Number:</strong> {patientData.passPort}</p>
            <p><strong>First Name:</strong> {patientData.fname}</p>
            <p><strong>Middle Name:</strong> {patientData.mname}</p>
            <p><strong>Last Name:</strong> {patientData.lname}</p>
          
          </div>
        ) : (
          <p>No patient data available</p>
        )}

          {vitalData ? (
          <div className="form-group"><p><strong>Examination Conclusion:</strong> {vitalData[0].finalconclution || vitalData.length ||'N/A'}</p>
  </div>
        ) : (
          <p>No vital data available</p>
        )}
     {xrayData ? (
          <div className="form-group"> <p><strong>X-ray Conclusion:</strong> {xrayData[0].conclusion || 'N/A'}</p>
         </div>
        ) : (
          <p>No vital data available</p>
        )}
            {labData ? (
           <div className="form-group">   <p><strong>Laboratory Conclusion:</strong> {labData[0].coclusionStatus || 'N/A'}</p>
            </div>
          ) : (
            <p>No vital data available</p>
          )}
    
    </div>
  );
}  
export default Test;  */
import { useState,useEffect  } from 'react';
import axios from 'axios';
import Select from 'react-select';
const Test = () => {
  const [patientId, setPatientId] = useState('');
  const [patientData, setPatientData] = useState(null);
  const [vitalData, setVitalData] = useState(null);
  const [labData, setLabData] = useState(null);
  const [xrayData, setXrayData] = useState(null);
  const [error, setError] = useState(''); 
  const [loading, setLoading] = useState(false);
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
  const handleInputChange = (e) => {
    setPatientId(e.target.value);
  };

  // Function to fetch all data
  const fetchAllData = async () => {
    setLoading(true);
    setError('');
    try {
      await fetchPatientData();
      await fetchVitalData();
      await fetchLabData();
      await fetchXrayData();
    } catch (err) {
      setError('Error fetching data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  const handleSelectChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
    setPatientId(selectedOption ? selectedOption.value : '');
  };

  const fetchPatientData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/patient/get/${patientId}`);
      console.log('Patient Data:', response.data);
      setPatientData(response.data);
    } catch (err) {
      console.error('Error fetching patient data', err);
      setError('Error fetching patient data. Please try again later.');
    }
  };

  const fetchVitalData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/vital/getV/${patientId}`);
      console.log('Vital Data:', response.data);
      setVitalData(response.data);
    } catch (err) {
      console.error('Error fetching vital data', err);
      setError('Error fetching vital data. Please try again later.');
    }
  };

  const fetchLabData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/labresult/getL/${patientId}`);
      console.log('Lab Data:', response.data);
      setLabData(response.data);
    } catch (err) {
      console.error('Error fetching lab data', err);
      setError('Error fetching lab data. Please try again later.');
    }
  };

  const fetchXrayData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/xray/getX/${patientId}`);
      console.log('X-ray Data:', response.data);
      setXrayData(response.data);
    } catch (err) {
      console.error('Error fetching X-ray data', err);
      setError('Error fetching X-ray data. Please try again later.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchAllData();
  };

  return (
    <div className="container">
      <h2>Patient Report</h2>
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
          <button type="submit" className="btn btn-secondary">Fetch Report</button>
        </div>
      </form>

      {loading && <p>Loading data...</p>}
      {error && <p className="error">{error}</p>}

      <div className="flex-container">
        {/* Photo Section */}
        <div className="photo-section">
          {patientData && (
            <img src={`http://localhost:8000/${patientData.photo}`} alt="Patient" className="patient-photo" />
          )}
        </div>

        {/* Data Section */}
        <div className="data-section">
          {patientData && (
            <div className="personal-info">
              <p><strong>Passport Number:</strong> {patientData.passPort}</p>
              <p><strong>First Name:</strong> {patientData.fname}</p>
              <p><strong>Middle Name:</strong> {patientData.mname}</p>
              <p><strong>Last Name:</strong> {patientData.lname}</p>
            </div>
          )}

          {vitalData && Array.isArray(vitalData) && vitalData.length > 0 && (
            <div className="data-item">
              <p><strong>Examination Conclusion:</strong> {vitalData[0]?.finalconclution || 'N/A'}</p>
            </div>
          )}

          {xrayData && Array.isArray(xrayData) && xrayData.length > 0 && (
            <div className="data-item">
              <p><strong>X-ray Conclusion:</strong> {xrayData[0]?.conclusion || 'N/A'}</p>
            </div>
          )}

          {labData && Array.isArray(labData) && labData.length > 0 && (
            <div className="data-item">
              <p><strong>Laboratory Conclusion:</strong> {labData[0]?.coclusionStatus || 'N/A'}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Test;