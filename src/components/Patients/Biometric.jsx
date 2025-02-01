/* import { useState, useEffect } from 'react';
import axios from 'axios';

const Test = () => {
  const [patientId, setPatientId] = useState('');
  const [patientData, setPatientData] = useState(null);
  const [vitalData, setVitalData] = useState(null);
  const [labData, setLabData] = useState(null);
  const [xrayData, setXrayData] = useState(null);

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
    try {
      const response = await axios.get(`http://localhost:8000/api/patient/get/${patientId}`);
      console.log('Patient Data:', response.data); // Debugging line
      setPatientData(response.data);
    } catch (err) {
      console.error('Error fetching patient data', err);
    }
  };

  const fetchVitalData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/vital/getV/${patientId}`);
      console.log('Vital Data:', response.data); // Debugging line
      setVitalData(response.data);
    } catch (err) {
      console.error('Error fetching vital data', err);
    }
  };

  const fetchLabData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/labresult/getL/${patientId}`);
      console.log('Lab Data:', response.data); // Debugging line
      setLabData(response.data);
    } catch (err) {
      console.error('Error fetching lab data', err);
    }
  };

  const fetchXrayData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/xray/getX/${patientId}`);
      console.log('X-ray Data:', response.data); // Debugging line
      setXrayData(response.data);
    } catch (err) {
      console.error('Error fetching X-ray data', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic to handle form submission if needed
  };

  return (
    <div className="container">
      <h2>Patient Profile</h2>
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
        </div>
  
        {patientData ? (
          <div className="form-group">
            <img src={patientData.photo} alt="Patient" style={{ width: '200px', height: '200px' }} />
            <p><strong>Passport Number:</strong> {patientData.passPort}</p>
            <p><strong>First Name:</strong> {patientData.fname}</p>
            <p><strong>Middle Name:</strong> {patientData.mname}</p>
            <p><strong>Last Name:</strong> {patientData.lname}</p>
            {vitalData && <p><strong>Examination Conclusion:</strong> {vitalData.finalconclution || 'N/A'}</p>}
            {xrayData && <p><strong>X-ray Conclusion:</strong> {xrayData.conclusion || 'N/A'}</p>}
            {labData && <p><strong>Laboratory Conclusion:</strong> {labData.coclusionStatus || 'N/A'}</p>}
          </div>
        ) : (
          <p>No patient data available</p>
        )}
      </form>
    </div>
  );
}  
export default Test; 
 */

/*  import { useState, useEffect } from 'react';
import axios from 'axios';

const Test = () => {
  const [patientId, setPatientId] = useState('');
  const [patientData, setPatientData] = useState(null);
  const [vitalData, setVitalData] = useState(null);
  const [labData, setLabData] = useState(null);
  const [xrayData, setXrayData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setPatientId(e.target.value);
  };

  const fetchData = async (patientId) => {
    setLoading(true);
    setError('');
    try {
      const [patientResponse, vitalResponse, labResponse, xrayResponse] = await Promise.all([
        axios.get(`http://localhost:8000/api/patient/get/${patientId}`),
        axios.get(`http://localhost:8000/api/labresult/getL/${patientId}`),
        axios.get(`http://localhost:8000/api/xray/getx/${patientId}`),
        axios.get(`http://localhost:8000/api/vital/getv/${patientId}`)
      ]);

      setPatientData(patientResponse.data);
      setVitalData(vitalResponse.data);
      setLabData(labResponse.data);
      setXrayData(xrayResponse.data);
    } catch (err) {
      console.error('Error fetching data', err);
      setError('Error fetching data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (patientId) {
      fetchData(patientId);
    }
  }, [patientId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (patientId) {
      fetchData(patientId);
    }
  };

  return (
    <div className="container">
      <h2>Patient Report</h2>
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
        </div>
        <button type="submit" className="btn btn-primary">Fetch Report</button>
      </form>

      {loading && <p>Loading data...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {patientData && (
        <div className="patient-data">
          <img src={patientData.photo} alt="Patient" style={{ width: '200px', height: '200px' }} />
          <p><strong>Passport Number:</strong> {patientData.passPort}</p>
          <p><strong>First Name:</strong> {patientData.fname}</p>
          <p><strong>Middle Name:</strong> {patientData.mname}</p>
          <p><strong>Last Name:</strong> {patientData.lname}</p>
        </div>
      )}

      {vitalData && (
        <div className="vital-data">
          <h3>Vital Signs</h3>
          <p><strong>Conclusion:</strong> {vitalData.finalconclution}</p>
        </div>
      )}

      {labData && (
        <div className="lab-data">
          <h3>Lab Results</h3>
          <p><strong>Conclusion Status:</strong> {labData.conclusionStatus}</p>
        </div>
      )}

      {xrayData && (
        <div className="xray-data">
          <h3>X-Ray Results</h3>
          <p><strong>Conclusion:</strong> {xrayData.conclusion}</p>
        </div>
      )}
    </div>
  );
};

export default Test;
 */
/* import { useState, useEffect } from 'react';
import axios from 'axios';

const Test = () => {
  const [patientId, setPatientId] = useState('');
  const [combinedData, setCombinedData] = useState([]);

  const handleInputChange = (e) => {
    setPatientId(e.target.value);
  };

  // Function to fetch data
  const fetchData = async () => {
    if (!patientId) return; // Avoid fetching if patientId is empty

    try {
      const [patientResult, labResult, vitalData, xrayData] = await Promise.all([
        axios.get(`http://localhost:8000/api/patient/get/${patientId}`),
        axios.get(`http://localhost:8000/api/labresult/getL/${patientId}`),
        axios.get(`http://localhost:8000/api/vital/getV/${patientId}`),
        axios.get(`http://localhost:8000/api/xray/getX/${patientId}`)
      ]);

      console.log('Patient Result:', patientResult.data);
      console.log('Lab Result:', labResult.data);
      console.log('Vital Result:', vitalData.data);
      console.log('X-ray Result:', xrayData.data);

      const patients = patientResult.data;
      const labResults = labResult.data;
      const vitals = vitalData.data;
      const xrays = xrayData.data;

      if (!Array.isArray(patients) || !Array.isArray(labResults) || !Array.isArray(vitals) || !Array.isArray(xrays)) {
        throw new Error('Unexpected data format');
      }

      const combined = patients.map(patient => {
        const patientLab = labResults.find(labResult => labResult.pid === patient._id);
        const patientVitals = vitals.find(vital => vital.pid === patient._id);
        const patientXray = xrays.find(xray => xray.pid === patient._id);

        return {
          patientId: patient._id,
          fname: patient.fname,
          mname: patient.mname,
          lname: patient.lname,
          finalConclusion: patientVitals ? patientVitals.finalconclution : 'N/A',
          labConclusion: patientLab ? patientLab.coclusionStatus : 'N/A',
          xrayConclusion: patientXray ? patientXray.conclusion : 'N/A',
        };
      });

      console.log('Combined Data:', combined);
      setCombinedData(combined);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (patientId) {
      fetchData();
    }
  }, [patientId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call fetchData to get the data based on the current patientId
    if (patientId) {
      fetchData();
    } else {
      console.error('Patient ID is required');
    }
  };

  return (
    <div className="container">
      <h2>Patient Profile</h2>
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
        </div>
        <button type="submit" className="btn btn-primary">Fetch Report</button>
        {combinedData.length > 0 ? combinedData.map(data => (
          <div key={data.patientId} className="form-group">
            <p><strong>Patient ID:</strong> {data.patientId}</p>
            <p><strong>First Name:</strong> {data.fname}</p>
            <p><strong>Middle Name:</strong> {data.mname}</p>
            <p><strong>Last Name:</strong> {data.lname}</p>
            <p><strong>Examination Conclusion:</strong> {data.finalConclusion}</p>
            <p><strong>Laboratory Conclusion:</strong> {data.labConclusion}</p>
            <p><strong>X-ray Conclusion:</strong> {data.xrayConclusion}</p>
          </div>
        )) : (
          <p>No patient data available</p>
        )}
      </form>
    </div>
  );
}

export default Test;

 */
import { useState, useEffect } from 'react';
import axios from 'axios';

const Biometric = () => {
  const [patientId, setPatientId] = useState('');
  const [patientData, setPatientData] = useState(null);
  const [vitalData, setVitalData] = useState(null);
  const [labData, setLabData] = useState(null);
  const [xrayData, setXrayData] = useState(null);

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
    try {
      const response = await axios.get(`http://localhost:8000/api/patient/get/${patientId}`);
      console.log('Patient Data:', response.data);
      setPatientData(response.data);
    } catch (err) {
      console.error('Error fetching patient data', err);
    }
  };

  const fetchVitalData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/vital/getV/${patientId}`);
      console.log('Vital Data:', response.data); 
      setVitalData(response.data);
    } catch (err) {
      console.error('Error fetching vital data', err);
    }
  };

  const fetchLabData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/labresult/getL/${patientId}`);
      console.log('Lab Data:', response.data); 
      setLabData(response.data);
    } catch (err) {
      console.error('Error fetching lab data', err);
    }
  };

  const fetchXrayData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/xray/getX/${patientId}`);
      console.log('X-ray Data:', response.data);
      setXrayData(response.data);
    } catch (err) {
      console.error('Error fetching X-ray data', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="container">
      <h2>Patient Profile</h2>
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
        </div>
  
        {patientData ? (
          <div className="form-group">
            <img src={patientData.photo} alt="Patient" style={{ width: '200px', height: '200px' }} />
            <p><strong>Passport Number:</strong> {patientData.passPort}</p>
            <p><strong>First Name:</strong> {patientData.fname}</p>
            <p><strong>Middle Name:</strong> {patientData.mname}</p>
            <p><strong>Last Name:</strong> {patientData.lname}</p>
            {vitalData && <p><strong>Examination Conclusion:</strong> {vitalData.finalconclution || 'N/A'}</p>}
            {xrayData && <p><strong>X-ray Conclusion:</strong> {xrayData.conclusion || 'N/A'}</p>}
            {labData && <p><strong>Laboratory Conclusion:</strong> {labData.coclusionStatus || 'N/A'}</p>}
          </div>
        ) : (
          <p>No patient data available</p>
        )}
      </form>
    </div>
  );
}  
export default Biometric; 