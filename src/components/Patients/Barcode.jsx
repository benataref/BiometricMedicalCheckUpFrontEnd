import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Barcode from 'react-barcode';

const PatientBarcode = () => {
  const [patientId, setPatientId] = useState('');
  const [patientData, setPatientData] = useState(null);
  const [barcodeValue, setBarcodeValue] = useState('');

  const barcodeRef = useRef(null);

  // Function to fetch patient data when patientId changes
  const fetchPatientData = async () => {
    try {
      const response = await axios.get(`https://biometric-medical-check-up-front-end.vercel.app/api/patient/get/${patientId}`);
      setPatientData(response.data);
      setBarcodeValue(response.data.passPort); // Assuming passPort is the value for the barcode
    } catch (err) {
      console.error('Error fetching patient data', err);
    }
  };

  useEffect(() => {
    if (patientId) {
      fetchPatientData();
    }
  }, [patientId]);

  // Function to handle print
  const handlePrint = () => {
    const printWindow = window.open('', '', 'width=100,height=100'); // Adjusted size for barcode and name
    printWindow.document.write('<html><head><title>Print Barcode</title>');
    printWindow.document.write('<style>');
    printWindow.document.write('body { font-family: Arial, sans-serif; text-align: center; margin: 0; padding: 0; }');
    printWindow.document.write('#print-content { padding: 10px; }');
    printWindow.document.write('#barcode-print-container { margin-bottom: 5px; }');
    printWindow.document.write('p { margin: 0; font-size: 14px; }');
    printWindow.document.write('</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write('<div id="print-content">');
    
    // Embed the barcode HTML content
    const barcodeContainer = document.getElementById('barcode-container');
    if (barcodeContainer) {
      printWindow.document.write(barcodeContainer.innerHTML);
    }
    
    // Add the full name below the barcode
    if (patientData) {
      printWindow.document.write('<p>' + `${patientData.fname} ${patientData.mname} ${patientData.lname}` + '</p>');
    }
  
    printWindow.document.write('</div>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  // Handle input change for patient ID
  const handleInputChange = (e) => {
    setPatientId(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Optionally handle form submission logic here
  };

  return (
    <div className="container">
      <h2>Client Verification</h2>
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

        {patientData && (
          <div className="patient-data">
            <img 
              src={`https://biometric-medical-check-up-front-end.vercel.app/${patientData.photo}`} 
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
          {barcodeValue && (
            <button type="button" onClick={handlePrint} className="btn btn-secondary">
              Print Barcode
            </button>
          )}
        </div>
      </form>
      
      {barcodeValue && (
        <div id="barcode-container" style={{ display: 'none' }}>
          <Barcode
            value={barcodeValue}
            ref={barcodeRef}
            width={2}
            height={100}
          />
        </div>
      )}
    </div>
  );
};

export default PatientBarcode;
